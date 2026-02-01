import { useState } from "react";
import ViewTitleComponent from "../components/ViewTitleComponent/ViewTitleComponent";
import { containerVariants } from "../components/StyledComponentsForPortfolioView";
import { motion, AnimatePresence } from "framer-motion";
import { categorizedSkillsData } from "../data/skills";
import SEOHelmet from "../utils/SEOHelmet";

const SkillBar = ({ skill }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-base font-medium text-primary dark:text-white">
        {skill.type}
      </span>
      <span className="text-sm font-medium text-primary dark:text-white">
        {skill.level}%
      </span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
      <motion.div
        className="h-2.5 rounded-full"
        style={{ backgroundColor: skill.color }}
        initial={{ width: 0 }}
        animate={{ width: `${skill.level}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
      ></motion.div>
    </div>
  </div>
);

const TabButton = ({ isActive, label, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 mr-2 mb-2 text-sm font-medium rounded-lg transition-all duration-300 focus:outline-none ${
      isActive
        ? "bg-primary text-on-primary ring-2 ring-primary ring-opacity-50"
        : "bg-surface text-on-surface hover:bg-gray-100 hover:text-primary"
    }`}
  >
    {label}
  </button>
);

const SkillsView = () => {
  const [activeTab, setActiveTab] = useState("backend");

  const tabs = [
    { id: "backend", label: "Backend" },
    { id: "frontend", label: "Frontend" },
    { id: "databases", label: "Databases" },
    { id: "devops", label: "DevOps" },
    { id: "engineeringPractices", label: "Practices" },
  ];

  return (
    <motion.main
      className="mx-auto p-5 bg-surface text-on-surface flex flex-col items-center"
      style={{ minHeight: "100vh", width: "80vw" }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <SEOHelmet
        title="Muhammed Adel | My Skills"
        description="Welcome to the portfolio of Muhammed Adel. Discover my projects and skills in Full-Stack development and DevOps."
        keywords="Muhammed Adel, Home, Portfolio, DevOps, Full-Stack"
      />
      <ViewTitleComponent title="My Skills" />

      {/* Tabs Navigation */}
      <div className="flex flex-wrap justify-center mb-8">
        {tabs.map((tab) => (
          <TabButton
            key={tab.id}
            isActive={activeTab === tab.id}
            label={tab.label}
            onClick={() => setActiveTab(tab.id)}
          />
        ))}
      </div>

      {/* Skills Content */}
      <div className="w-full lg:w-3/4 mx-auto bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-lg min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-center capitalize text-primary">
              {tabs.find((t) => t.id === activeTab)?.label} Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {categorizedSkillsData[activeTab]?.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.main>
  );
};

export default SkillsView;
