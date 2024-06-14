import { motion } from "framer-motion";
import ViewTitleComponent from "../components/ViewTitleComponent/ViewTitleComponent";
import personalPhotoImage from "../assets/personal-photo.png";
import SEOHelmet from "../utils/SEOHelmet";
import "react-toastify/dist/ReactToastify.min.css";
import Joke from "../utils/Joke";
import Adkar from "../utils/adkar";

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
      <Joke />
      <Adkar />
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
          <motion.h2 variants={itemVariants} className="text-primary text-2xl">
            My story
          </motion.h2>
          <motion.h3
            variants={itemVariants}
            className="text-on-surface text-2xl pb-5"
          >
            Muhammed Adel Hamed
          </motion.h3>
          <motion.h3
            variants={itemVariants}
            className="text-on-surface text-2xl pb-5"
          >
            Software Engineer at Future Group Translation Service.
          </motion.h3>
          <article className="text-on-surface text-2xl pb-5">
            <motion.p
              variants={itemVariants}
              className="text-on-surface text-2xl pb-5"
            >
              I am passionate about learning in this field, which led me to
              leave my main field and pursue a nine-month ITI Diploma in the
              Open Source Application Development track. I have worked on many
              projects, both as a team member and as a team leader. Throughout
              my career, I have developed myself in various areas, including
              backend, frontend, and DevOps.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-on-surface text-2xl pb-5"
            >
              I am passionate about learning in this field, which led me to
              leave my main field and pursue a nine-month ITI Diploma in the
              Open Source Application Development track. I have worked on many
              projects, both as a team member and as a team leader. Throughout
              my career, I have developed myself in various areas, including
              backend, frontend, and DevOps.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-on-surface text-2xl pb-5"
            >
              I am a Linux user with experience in multiple languages,
              frameworks, and libraries. My key technical skills include:
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-on-surface text-2xl pb-5"
            >
              Backend: Java (Spring Boot, Spring Data, Spring Security, Spring
              Cloud), PHP (Laravel), JavaScript (Express, Fastify).
              <br />
              Frontend: Javascript (Typescript), React.js, Angular, CSS3 (SCSS),
              HTML5.
              <br />
              DevOps: Docker, Kubernetes, Git, Ansible, Jenkins, Terraform.
              <br />
              Database: MongoDB, MySQL, Redis, elasticsearch.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-on-surface text-2xl pb-5"
            >
              In addition to my technical skills, I have studied non-technical
              skills, such as customer interaction and agile methodologies, and
              have taken English language courses for professional purposes.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-on-surface text-2xl pb-5"
            >
              I excel at understanding client requirements and developing
              implementation plans accordingly. I work well in a team
              environment, where I actively participate and benefit from the
              skills of my colleagues.
            </motion.p>
          </article>
        </div>
      </article>
    </motion.main>
  );
}
