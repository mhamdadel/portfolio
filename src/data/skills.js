export const skillsData = [
    { type: 'Java (Spring Boot, Security, Cloud, Data)', level: 85, color: '#6a1b9a' },
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
    { type: 'Knowledge (Nest.js', level: 40, color: '#34495e' },
    { type: 'Knowledge (c++, C#, C', level: 40, color: '#34495e' },
    { type: 'Knowledge (Python (Django))', level: 40, color: '#34495e' },
    { type: 'Knowledge (Ruby on Rails)', level: 40, color: '#34495e' },
  ];

  export const categorizedSkillsData = {
    backend: [
      { type: 'Node.js (Express.js)', level: 95, color: '#f39c12' },
      { type: 'PHP (Laravel)', level: 90, color: '#3498db' },
      { type: 'Spring Boot', level: 85, color: '#7d3c98' },
      { type: 'Spring Security', level: 85, color: '#8e44ad' },
      { type: 'Spring Data', level: 85, color: '#bb8fce' },
      { type: 'Node.js (Fastify.js)', level: 75, color: '#f7b731' },
      { type: 'Spring Cloud', level: 65, color: '#a569bd' },
    ],
    frontend: [
      { type: 'React', level: 90, color: '#e74c3c' },
      { type: 'Angular', level: 80, color: '#e67e22' },
      { type: 'HTML5 & CSS3', level: 80, color: '#f39c12' },
      { type: 'Tailwind CSS', level: 80, color: '#d68910' },
      { type: 'Bootstrap', level: 70, color: '#d35400' },
      { type: 'SCSS', level: 70, color: '#e67e22' },
      { type: 'JQuery', level: 65, color: '#e67e22' },
      { type: 'Vue', level: 60, color: '#e74c3c' },
      { type: 'React Native', level: 60, color: '#ec7063' },
    ],
    databases: [
      { type: 'SQL (MySQL)', level: 85, color: '#2ecc71' },
      { type: 'SQL (PostgreSQL)', level: 85, color: '#27ae60' },
      { type: 'SQL (SQLite)', level: 85, color: '#229954' },
      { type: 'SQL (H2)', level: 85, color: '#1e8449' },
      { type: 'NoSQL (MongoDB)', level: 80, color: '#1abc9c' },
      { type: 'NoSQL (Scylla-DB)', level: 60, color: '#16a085' },
      { type: 'Caching (Redis)', level: 75, color: '#c0392b' },
      { type: 'Elasticsearch', level: 60, color: '#f1c40f' },
    ],
    devops: [
      { type: 'Git/Github', level: 90, color: '#2c3e50' },
      { type: 'Docker', level: 85, color: '#e74c3c' },
      { type: 'AWS (S2, S3)', level: 75, color: '#d35400' },
      { type: 'AWS (RDS)', level: 60, color: '#e67e22' },
      { type: 'AWS (Lambda)', level: 65, color: '#f39c12' },
      { type: 'Nginx', level: 80, color: '#2980b9' },
      { type: 'Linux User', level: 85, color: '#2c3e50' },
      { type: 'Kubernetes', level: 70, color: '#27ae60' },
      { type: 'Jenkins (CI/CD)', level: 80, color: '#34495e' },
      { type: 'Terraform', level: 75, color: '#8e44ad' },
    ],
    webTech: [
      { type: 'Webpack, Babel', level: 65, color: '#9b59b6' },
      { type: 'PEM, Templates', level: 60, color: '#8e44ad' },
      { type: 'WebSockets', level: 75, color: '#2980b9' },
    ],
    other: [
      { type: 'Clean Code', level: 90, color: '#2980b9' },
      { type: 'Design Patterns', level: 85, color: '#16a085' },
      { type: 'SOLID Principles', level: 85, color: '#27ae60' },
      { type: 'Problem Solving', level: 85, color: '#16a085' },
      { type: 'Data Structures', level: 80, color: '#8e44ad' },
      { type: 'Algorithms', level: 80, color: '#8e44ad' },
      { type: 'Quality of Code', level: 80, color: '#2980b9' },
      { type: 'Maven', level: 80, color: '#c0392b' },
      { type: 'NPM', level: 80, color: '#e74c3c' },
      { type: 'Unit Testing & Mocking', level: 75, color: '#e67e22' },
      { type: 'Composer', level: 75, color: '#f39c12' },
    ],
    knowledge: [
      { type: 'Nest.js', level: 40, color: '#94791e' },
      { type: 'C++', level: 40, color: '#34495e' },
      { type: 'C#', level: 40, color: '#2c3e50' },
      { type: 'C', level: 40, color: '#2c3e50' },
      { type: 'Python (Django)', level: 40, color: '#44678e' },
      { type: 'Ruby on Rails', level: 40, color: '#34755e' },
    ],
  };