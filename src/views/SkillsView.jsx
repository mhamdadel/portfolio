import ViewTitleComponent from '../components/ViewTitleComponent/ViewTitleComponent';
import { containerVariants } from '../components/StyledComponentsForPortfolioView';
import { motion } from 'framer-motion';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

// Register necessary components
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);


const skillsData = [
  { type: 'Java (Spring Framework, Boot, Security, Cloud, Data)', level: 85, color: '#6a1b9a' },
  { type: 'JavaScript & TypeScript (Node.js, Express.js, Fastify.js)', level: 90, color: '#f39c12' },
  { type: 'PHP (Laravel)', level: 80, color: '#3498db' },
  { type: 'JavaScript & TypeScript (Angular, React, JSX, TSX, JQuery, React Native, Vue)', level: 75, color: '#e67e22' },
  { type: 'HTML5 & CSS3 (Bootstrap, Tailwind CSS), SCSS', level: 70, color: '#e74c3c' },
  { type: 'Webpack, Babel (Without React), PEM, Templates', level: 65, color: '#9b59b6' },
  { type: 'SQL (MySQL, PostgreSQL, SQLite, H2)', level: 85, color: '#2ecc71' },
  { type: 'NoSQL (MongoDB, Scylla-DB)', level: 80, color: '#1abc9c' },
  { type: 'Caching (Redis)', level: 75, color: '#c0392b' },
  { type: 'Monitoring/Logging Database (Elasticsearch)', level: 70, color: '#f1c40f' },
  { type: 'Technologies (Kafka, RabbitMQ, Micro-services, Web API, polling (Long – short), WebSockets)', level: 80, color: '#34495e' },
  { type: 'Design Patterns', level: 85, color: '#16a085' },
  { type: 'SOLID Principles', level: 85, color: '#27ae60' },
  { type: 'Clean Code', level: 90, color: '#2980b9' },
  { type: 'Data Structures & Algorithms', level: 80, color: '#8e44ad' },
  { type: 'Git/Github', level: 90, color: '#2c3e50' },
  { type: 'Docker', level: 85, color: '#e74c3c' },
  { type: 'AWS (S2, S3, RDS, Lambda)', level: 75, color: '#d35400' },
  { type: 'Nginx', level: 80, color: '#2980b9' },
  { type: 'Linux User', level: 85, color: '#2c3e50' },
  { type: 'Kubernetes', level: 70, color: '#27ae60' },
  { type: 'Jenkins (CI/CD)', level: 80, color: '#34495e' },
  { type: 'Terraform', level: 75, color: '#8e44ad' },
  { type: 'Problem Solving', level: 85, color: '#16a085' },
  { type: 'Unit Testing & Mocking', level: 75, color: '#e67e22' },
  { type: 'Performance Tuning', level: 70, color: '#f1c40f' },
  { type: 'Quality of Code', level: 80, color: '#2980b9' },
  { type: 'Maven', level: 80, color: '#c0392b' },
  { type: 'NPM', level: 80, color: '#e74c3c' },
  { type: 'Composer', level: 75, color: '#f39c12' },
  { type: 'Knowledge (Nest.js, C#, C, Ruby on Rails, Python (Django))', level: 60, color: '#34495e' },
];

const data = {
  labels: skillsData.map(skill => skill.type),
  datasets: [
    {
      label: 'Skill Level',
      data: skillsData.map(skill => skill.level),
      backgroundColor: skillsData.map(skill => skill.color),
      borderColor: skillsData.map(skill => skill.color),
      borderWidth: 1,
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
      max: 100,
    },
  },
};

const SkillsView = () => (
  <motion.main
    className="mx-auto p-5 bg-surface text-on-surface flex flex-col"
    style={{ minHeight: "100vh", width: "80vw" }}
    initial="hidden"
    animate="visible"
    variants={containerVariants}
  >
    <ViewTitleComponent title="My Skills" />
    <div>
      <Bar data={data} options={options} />
    </div>
  </motion.main>
);

export default SkillsView;
