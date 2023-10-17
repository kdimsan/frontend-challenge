"use client";
import { ProductsFetchResponse } from "@/types/productsResponse";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetcher = (): AxiosPromise<ProductsFetchResponse> => {
  return axios.post(API_URL, {
    query: `query {
        allProducts {
          id
          name
          price_in_cents
          image_url
        }
      }
  `,
  }); /*Todas requisições para GraphiQL serão métodos post, no body especificamos.*/
};

export function useProducts() {
  const { data } = useQuery({
    queryFn: fetcher, //função que faz a busca na api.
    queryKey: ["products"], //Chave que passa para a requisição salvar. Recebe um nome para ser recuperado.
  });

  return {
    data: data?.data.data.allProducts, //Axios adiciona mais um data devido a Promisse do axios.
  };
}
