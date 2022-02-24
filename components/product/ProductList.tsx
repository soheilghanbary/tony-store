import FilterSelect from "components/forms/Select";
import { AnimatePresence, motion } from "framer-motion";
import { useAllProducts } from "hooks";
import { FilterProps, ProductProps } from "interfaces";
import { useState } from "react";
import ProductItem from "./ProductItem";

const filterItems: FilterProps[] = [
  {
    label: "all",
    value: "all",
  },
  {
    label: "electronics",
    value: "electronics",
  },
  {
    label: "jewelery",
    value: "jewelery",
  },
  {
    label: "men's clothing",
    value: "men's clothing",
  },
  {
    label: "women's clothing",
    value: "women's clothing",
  },
];

const ProductList = () => {
  const { data, isLoading } = useAllProducts();
  const [filters, setFilters] = useState<ProductProps[]>([]);
  if (isLoading) return <p>Loading...</p>;

  const selectHandler = (e: FilterProps) =>
    setFilters(data?.filter((item) => item.category === e.value) || []);

  return (
    <>
      <FilterSelect items={filterItems} onChange={selectHandler} />
      <motion.div className="product__list">
        <AnimatePresence>
          {!filters.length
            ? data?.map((product) => (
                <ProductItem key={product.id} {...product} />
              ))
            : filters?.map((product) => (
                <ProductItem key={product.id} {...product} />
              ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default ProductList;
