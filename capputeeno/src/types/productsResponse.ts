import { ProductsInterface } from "./productsInterface";

export interface ProductsFetchResponse {
  data: {
    allProducts: ProductsInterface[];
  };
}
