import { motion } from "framer-motion";
import ViewTitleComponent from "../components/ViewTitleComponent/ViewTitleComponent";
import personalPhotoImage from "../assets/personal-photo.png";
import SEOHelmet from "../utils/SEOHelmet";
import "react-toastify/dist/ReactToastify.min.css";
// import Joke from "../utils/Joke";
// import Adkar from "../utils/adkar";
import experienceData from "../data/experienceData";

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
      {/* <Joke /> */}
      {/* <Adkar /> */}
      <SEOHelmet
        title="Home - Muhammed Adel | About Me"
        description="Welcome to the portfolio of Muhammed Adel. Discover my projects and skills in Full-Stack development and DevOps."
        keywords="Muhammed Adel, Home, Portfolio, DevOps, Full-Stack"
      />
      <motion.div variants={itemVariants}>
        <ViewTitleComponent title="About Me" />
      </motion.div>
      <article className="flex flex-col lg:flex-row my-10">
        <div className="w-full lg:w-1/3 h-auto flex justify-center">
          <motion.img
            src={personalPhotoImage}
            alt="Muhammed Adel"
            className="w-full p-5 h-auto my-10 lg:my-0"
            style={{
              maxHeight: "800px",
              objectFit: "cover",
              width: "100%",
              height: "100%",
              overflow: "hidden",
            }}
            variants={itemVariants}
          />
        </div>
        <div className="w-full lg:w-2/3 p-5 text-container">
          <motion.h2
            variants={itemVariants}
            className="text-primary  lg:text-2xl"
          >
            Professional Summary
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="text-on-surface lg:text-xl pb-5"
          >
            <p className="mb-4">
              Senior-ready Software Engineer with 3+ years of hands-on experience building scalable backend and full-stack solutions using Java Spring Boot, Node.js, PHP Laravel, and React. Worked on enterprise systems including Vodafone Germany and Future Group. Strong focus on microservices, distributed systems, DevOps practices, clean architecture, and high-quality code. Certified MongoDB Developer with excellent problem-solving skills and ownership mentality.
            </p>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-primary lg:text-2xl mt-8 mb-4"
          >
            Work Experience
          </motion.h2>

          <motion.div variants={itemVariants} className="space-y-8">
            {experienceData.map((exp, index) => (
              <div key={index} className="border-l-2 border-primary pl-4">
                <h3 className="text-on-surface font-bold text-xl">{exp.title}</h3>
                <h4 className="text-secondary text-lg">{exp.company}</h4>
                <p className="text-sm text-gray-400 mb-2">
                  {exp.date} | {exp.type}
                </p>
                <ul className="list-disc list-inside text-on-surface opacity-90">
                  {exp.details.map((detail, idx) => (
                    <li key={idx} className="mb-1">{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>
      </article>
    </motion.main>
  );
}
