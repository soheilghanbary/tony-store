import { motion } from "framer-motion";
import { ProductProps } from "interfaces";
import Link from "next/link";
import { FC } from "react";

const productItemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
  leave: { opacity: 0, scale: 0.8 },
};

const ProductItem: FC<ProductProps> = ({ id, title, image, price }) => {
  return (
    <Link href={`/products/${id}`}>
      <motion.div
        layout
        variants={productItemVariants}
        initial="hidden"
        animate="visible"
        exit="leave"
        className="product__item"
      >
        <img loading="lazy" src={image} className="product__item__image" />
        <div className="product__item__body">
          <h2 className="product__item__title">{title}</h2>
          <span className="product__item__price">${price}</span>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProductItem;
