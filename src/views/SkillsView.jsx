import ViewTitleComponent from "../components/ViewTitleComponent/ViewTitleComponent";
import { containerVariants } from "../components/StyledComponentsForPortfolioView";
import { motion } from "framer-motion";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  layouts,
} from "chart.js";
import { categorizedSkillsData } from "../data/skills";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const createChartData = (skills) => ({
  labels: skills.map((skill) => skill.type),
  datasets: [
    {
      label: "Skill Level",
      data: skills.map((skill) => skill.level),
      backgroundColor: skills.map((skill) => skill.color),
      borderColor: skills.map((skill) => skill.color),
      borderWidth: 1,
      barThickness: 5,
    },
  ],
});

const options = {
  indexAxis: "y",
  layouts: {
    padding: 20,
    barThickness: 10,
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: function (context) {
          return `${context.label}: ${context.raw}%`;
        },
      },
    },
  },
  scales: {
    x: {
      beginAtZero: true,
      max: 100,
      grid: {
        display: false,
        drawBorder: false,
      },
      ticks: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
        drawBorder: false,
      },
      ticks: {
        display: true,
        color: "#000",
        stepSize: 1,

        font: {
          size: "9.5vw",
        },
      },
    },
  },
};

const SkillsView = () => (
  <motion.main
    className="mx-auto p-5 bg-surface text-on-surface flex flex-col items-center"
    style={{ minHeight: "100vh", width: "80vw" }}
    initial="hidden"
    animate="visible"
    variants={containerVariants}
  >
    {/* <Adkar /> */}
    <ViewTitleComponent title="My Skills" />

    <div className="w-full break-words">
      <h2 className="font-bold mb-4 text-center">Backend</h2>
      <div className="w-full lg:w-3/4 mx-auto bg-white p-5 rounded-md shadow-md">
        <Bar
          data={createChartData(categorizedSkillsData.backend)}
          options={options}
        />
      </div>
    </div>

    <div className="mt-8 w-full break-words">
      <h2 className="font-bold mb-4 text-center">Frontend</h2>
      <div className="w-full lg:w-3/4 mx-auto bg-white p-5 rounded-md shadow-md">
        <Bar
          className="font-5vw lg:font-13vw"
          data={createChartData(categorizedSkillsData.frontend)}
          options={options}
        />
      </div>
    </div>

    <div className="mt-8 w-full break-words">
      <h2 className="font-bold mb-4 text-center">Databases</h2>
      <div className="w-full lg:w-3/4 mx-auto bg-white p-5 rounded-md shadow-md">
        <Bar
          data={createChartData(categorizedSkillsData.databases)}
          options={options}
        />
      </div>
    </div>

    <div className="mt-8 w-full break-words">
      <h2 className="font-bold mb-4 text-center">DevOps</h2>
      <div className="w-full lg:w-3/4 mx-auto bg-white p-5 rounded-md shadow-md">
        <Bar
          data={createChartData(categorizedSkillsData.devops)}
          options={options}
        />
      </div>
    </div>

    <div className="mt-8 w-full break-words">
      <h2 className="font-bold mb-4 text-center">Web Technologies</h2>
      <div className="w-full lg:w-3/4 mx-auto bg-white p-5 rounded-md shadow-md">
        <Bar
          data={createChartData(categorizedSkillsData.webTech)}
          options={options}
        />
      </div>
    </div>

    <div className="mt-8 w-full break-words">
      <h2 className="font-bold mb-4 text-center">Other Skills</h2>
      <div className="w-full lg:w-3/4 mx-auto bg-white p-5 rounded-md shadow-md">
        <Bar
          data={createChartData(categorizedSkillsData.other)}
          options={options}
        />
      </div>
    </div>
  </motion.main>
);

export default SkillsView;
