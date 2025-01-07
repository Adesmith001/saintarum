import useSwr from "swr";

import type { ProductTypeList } from "@/types";

import ProductItem from "../../product-item";
import ProductsLoading from "./loading";

interface ProductsContentProps {
  products?: ProductTypeList[];
  onPurchase: (productId: string) => void;
}

const ProductsContent = ({ products }: ProductsContentProps) => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error } = useSwr("/api/products", fetcher);

  const items = products || data;

  if (error) return <div>Failed to load users</div>;
  return (
    <>
      {!items && <ProductsLoading />}

      {items && (
        <section className="products-list">
          {items.map((item: ProductTypeList) => (
            <ProductItem
              id={item.id}
              name={item.name}
              price={item.price}
              color={item.color}
              currentPrice={item.currentPrice}
              key={item.id}
              images={item.images}
            />
          ))}
        </section>
      )}
    </>
  );
};

export default ProductsContent;
