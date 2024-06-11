import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ViewTitleComponent from "../components/ViewTitleComponent/ViewTitleComponent";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, when: "beforeChildren", staggerChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function PortfolioView() {

  return (
    <motion.main
      className="mx-auto p-5 bg-surface text-on-surface flex flex-col"
      style={{ minHeight: "100vh", width: "80vw" }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div variants={itemVariants}>
        <ViewTitleComponent title="Protfolio" />
      </motion.div>
      <article className="flex flex-col lg:flex-row my-10">
        <div className="w-full lg:w-1/3 h-auto flex justify-center">
          <motion.img
            src="https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Muhammed Adel"
            className="w-full p-5 h-auto my-10 lg:my-0"
            variants={itemVariants}
          />
        </div>
      </article>
    </motion.main>
  );
}
