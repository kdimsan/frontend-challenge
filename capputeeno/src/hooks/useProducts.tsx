"use client";
import { ProductsFetchResponse } from "@/types/productsResponse";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { useFilter } from "./useFilter";
import { FilterType } from "@/types/filterTypes";
import { getCategoryByType, getFieldByPriority } from "@/utils/graphiqlFilters";
import { PriorityType } from "@/types/priorityType";
import { useDeferredValue } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetcher = (query: string): AxiosPromise<ProductsFetchResponse> => {
  return axios.post(API_URL, {
    query,
  }); /*Todas requisições para GraphiQL serão métodos post, no body especificamos.*/
};

const mountQuery = (type: FilterType, priority: PriorityType) => {
  //Filtro padrão, será renderizado
  if (type === FilterType.ALL && priority === PriorityType.POPULARITY)
    return `
  query {
    allProducts(sortField: "sales", sortOrder: "DSC") {
      id
      name
      price_in_cents
      image_url
    }
  }
`;
  const prioritySettings = getFieldByPriority(priority);
  const categoryFilter = getCategoryByType(type);
  console.log(categoryFilter);

  return `
  query{
  allProducts(sortField: "${prioritySettings.field}", sortOrder: "${
    prioritySettings.order
  }", ${categoryFilter ? `filter: { category: "${categoryFilter}"}` : ""}){
    id, 
    name,
    price_in_cents
    image_url
  }
}
`;
};

export function useProducts() {
  const { type, priority, search } = useFilter();
  const query = mountQuery(type, priority);
  const searchDeferred = useDeferredValue(search);

  const { data } = useQuery({
    queryFn: () => fetcher(query), //função que faz a busca na api.
    queryKey: ["products", type, priority], //Chave que passa para a requisição salvar. Recebe um nome para ser recuperado.
  });

  const products = data?.data.data.allProducts; //Axios adiciona mais um data devido a Promisse do axios.
  const searchProducts = products?.filter((product) =>
    product.name.toLowerCase().includes(searchDeferred.toLowerCase())
  );

  return {
    data: searchProducts,
  };
}
