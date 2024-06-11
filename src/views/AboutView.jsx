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

export default function AboutView() {
  
  return (
    <motion.main
      className="mx-auto p-5 bg-surface text-on-surface flex flex-col"
      style={{ minHeight: "100vh", width: "80vw" }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div variants={itemVariants}>
        <ViewTitleComponent title="About Me" />
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
        <div className="w-full lg:w-2/3 p-5 text-container">
          <motion.h2 variants={itemVariants} className="text-primary text-2xl">
            My story
          </motion.h2>
          <motion.h3 variants={itemVariants} className="text-on-surface text-2xl pb-5">
            Muhammed Adel Hamed
          </motion.h3>
          <motion.p variants={itemVariants} className="text-on-surface text-2xl pb-5">
            It is important for me to fully immerse myself in the specifics of
            each client's work and business processes. I am not afraid to ask
            hundreds of clarifying questions to ensure that I correctly
            understand the project's tasks and goals.
            <br />
            <br />
            My work is based on
            principles of thorough analysis and justification of every design
            decision. I strive to ensure that my proposals are not only visually
            appealing but also functional, user-friendly, and effective for the
            end user.
          </motion.p>
        </div>
      </article>
    </motion.main>
  );
}
