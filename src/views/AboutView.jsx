import { motion } from "framer-motion";
import ViewTitleComponent from "../components/ViewTitleComponent/ViewTitleComponent";
import personalPhotoImage from "../assets/personal-photo.png";
import SEOHelmet from "../utils/SEOHelmet";
import "react-toastify/dist/ReactToastify.min.css";
// import Joke from "../utils/Joke";
// import Adkar from "../utils/adkar";

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
            My story
          </motion.h2>
          <motion.h3
            variants={itemVariants}
            className="text-on-surface  lg:text-2xl pb-5"
          >
            Muhammed Adel
          </motion.h3>
          <motion.h3
            variants={itemVariants}
            className="text-on-surface lg: lg:text-2xl pb-5"
          >
            Software Engineer
            <br />
            Future Group Translation Service Co.
          </motion.h3>
          <article className="text-on-surface  lg:text-2xl pb-5">
            <motion.p
              variants={itemVariants}
              className="text-on-surface lg:text-2xl pb-5"
            >
              I pursued a nine-month ITI Diploma in Open Source Application
              Development due to my passion for learning. Throughout my career,
              I have gained experience as both a team member and leader,
              developing skills in backend, frontend, and DevOps.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-on-surface lg:text-2xl pb-5"
            >
              Key skills:
              <br />
              Backend: Java (Spring Boot, Spring Data, Spring Security, Spring
              Cloud), PHP (Laravel), JavaScript (Express, Fastify)
              <br />
              Frontend: JavaScript (TypeScript), React.js, Angular, CSS3 (SCSS),
              HTML5
              <br />
              DevOps: Docker, Kubernetes, Git, Ansible, Jenkins, Terraform
              <br />
              Database: MongoDB, MySQL, Redis, Elasticsearch
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-on-surface lg:text-2xl pb-5"
            >
              Additionally, I have studied customer interaction, agile
              methodologies, and professional English. I excel in understanding
              client requirements, developing implementation plans, and working
              effectively in a team environment.
            </motion.p>
          </article>
        </div>
      </article>
    </motion.main>
  );
}
