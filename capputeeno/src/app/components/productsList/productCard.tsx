import { ProductsInterface } from "@/types/productsInterface";
import { formatValue } from "@/utils/priceFormatter";
import { useRouter } from "next/navigation";
import React from "react";
import styled from "styled-components";

interface ProductCardProps {
  product: ProductsInterface;
  key: string;
}

const Card = styled.div`
  width: 256px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  border-radius: 0 0 4px 4px;

  transition: all 0.3s ease;

  cursor: pointer;

  img {
    width: 256px;
    height: 300px;

    border-radius: 4px 4px 0 0;
  }

  h4 {
    font-family: inherit;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    color: var(--text-dark-2);
  }

  span {
    font-family: inherit;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    color: var(--shapes-dark);
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;

    padding: 8px 0;
    > div {
      width: 228px;
      height: 1px;
      border: 1px solid var(--shapes);
      margin: 8px 0;

      padding: 0;
    }
  }

  &:hover {
    transform: translate(-5px, -5px);
    box-shadow: 4px 4px 7px 1px rgba(0, 0, 0, 0.3);
  }
`;

export default function ProductCard({ product, key }: ProductCardProps) {
  const router = useRouter();

  const price = formatValue(product.price_in_cents);

  const handleNavigate = () => {
    router.push("/product?id=" + product.id);
  };

  return (
    <Card onClick={handleNavigate} key={key}>
      <img src={product.image_url} alt={`"Product ${product.name} image"`} />
      <div>
        <h4>{product.name}</h4>
        <div></div>
        <span>{price}</span>
      </div>
    </Card>
  );
}
