export interface ProductsInterface {
  name: string;
  price_in_cents: number;
  id: string;
  image_url: string;
  description?: string;
  category?: string;
}

export interface ProductsInCartProps extends ProductsInterface {
  quantity: number;
}

export interface ProductFetchResponse {
  data: {
    Product: ProductsInterface;
  };
}
