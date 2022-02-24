import { motion } from "framer-motion";
import { useProduct } from "hooks";
import { useRouter } from "next/router";

const productVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0 },
  leave: { opacity: 0, scale: 0.8, y: 30 },
};

const ProductPage = () => {
  const route = useRouter();
  const { data, isLoading } = useProduct(route.query.id);

  if (isLoading) return <p>loading...</p>;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="leave"
      variants={productVariants}
      transition={{ duration: 0.3 }}
      className="flex lg:flex-row flex-col items-center gap-8 lg:p-0"
    >
      <img className="lg:w-1/4 rounded-lg h-64" src={data?.image} />
      <div className="lg:w-3/4 flex flex-col gap-3">
        <h2 className="dark:text-gray-200">{data?.title}</h2>
        <span className="text-teal-500 text-xl">${data?.price}</span>
        <span className="text-xl">
          Rating:{" "}
          <span className="text-blue-500 dark:text-sky-400">
            {data?.rating.rate}
          </span>
        </span>
        <p className="text-sm leading-6 text-justify mt-4">{data?.description}</p>
        <button className="btn info w-32 mt-4">Add To Cart</button>
      </div>
    </motion.div>
  );
};

export default ProductPage;
