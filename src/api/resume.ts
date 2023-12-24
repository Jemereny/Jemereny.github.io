export interface Profile {
  name: string;
  email: string;
  location: string;
  linkedin: string;
  summary: string;
}

export interface Experience {
  company: string;
  title: string;
  startDate: Date;
  endDate?: Date;
  summary?: string;
  impacts: string[];
}

export const profile: Profile = {
  name: 'Jeremy Chan',
  email: 'chanjem@gmail.com',
  location: 'Singapore',
  linkedin: 'https://www.linkedin.com/in/chanjem/',
  summary:
    'Software engineer with 3 years of backend development experience with a focus on backend software architecture, development and building cloud-native applications. Skilled with using Typescript (NodeJS) for backend development, architecting serverless solutions in AWS and experienced in building CI/CD pipelines. Always seeking to make an impact.',
};

export const experiences: Experience[] = [
  {
    company: 'Dyson',
    title: 'Senior Software Engineer',
    startDate: new Date(2023, 8),
    summary:
      'Building and maintaining cloud-native applications on AWS to support Dyson app and internal toolings.',
    impacts: [],
  },
  {
    company: 'Connected Freight Pte Ltd',
    title: 'Software Engineer II',
    startDate: new Date(2020, 3),
    endDate: new Date(2023, 6),
    summary:
      'Designed, built, and maintained cloud-native applications on AWS, utilizing technologies such as Serverless, Appsync GraphQL, RDS, and DynamoDB, with a focus on Typescript/Python.',
    impacts: [
      'Enhanced the performance and robustness of an internal ETL pipeline, which acts as the foundation for bulk API operations. Implemented efficient batching and buffering techniques to mitigate throttling issues during high workloads, resulting in improved reliability, resilience, and processing speed while reducing inter-process overhead.',
      'Played a key role in the collaborative migration of an order management system from a single-tenant architecture to a multi-tenant system.',
      'Successfully led the design, development, and deployment of an event-driven notification hub that enables all streams of products to be able to send system-generated notifications to customers.',
      'Collaborated on the development of a machine-to-machine authentication system and implemented QuickSight access for multi-tenant systems to benefit various streams of products.',
      'Owned the design, development, and deployment of an event-driven reporting pipeline in the Supplier Experience team, enabling the data team to create QuickSight dashboards from stored data.',
      'Supported major production issues and ensured services have zero to low downtime',
      'Owned the design, development and deployment of a report generation service using Python to reduce load on frontend client and to ensure consistency of pdfs generated throughout the different client platforms',
    ],
  },
  {
    company: 'Gojek',
    title: 'Devops Intern',
    startDate: new Date(2019, 7),
    endDate: new Date(2019, 11),
    summary:
      'Developing, deploying and integrating team workflows into slack bots onto Google Cloud Platform using Python to reduce repetitive workload of team by 80%.',
    impacts: [
      'Built and deployed a slack bot to integrate team workflows to reduce repetative workload by 80%',
      'Deployed open-sourced Eval-AI for the platform team’s interviewee’s assignments.',
    ],
  },
  {
    company: 'Acronis',
    title: 'Research Developer Intern',
    startDate: new Date(2019, 4),
    endDate: new Date(2019, 5),
    impacts: [
      'Developed a server mocking tool to facilitate automated testing by receiving and responding to requests',
      'Implemented auto-test cases for indexing to improve testing efficiency and accuracy',
      'Investigated the use of libmagic to determine MIME types of data and files',
      `Explored the use of Apache's TIKA server for text extraction to improve data processing capabilities`,
      'Implemented auto test cases',
      'Experimented with developing Elasticsearch plugins to enhance search functionality',
      'Produced comprehensive documentation on the design of API endpoints to ensure ease of use and maintainability',
    ],
  },
  {
    company: 'TinyMOS',
    title: 'Software Deverloper Intern',
    startDate: new Date(2018, 4),
    endDate: new Date(2019, 4),
    impacts: [
      'Configured ESXi and Bamboo server to support continuous integration and automated testing',
      'Contributed to the development of a camera and its accompanying mobile application',
      'Designed and implemented a noise-reduction calibration system to improve image quality',
      'Developed an auto-exposure system for the camera to enhance image capture capabilities',
      'Created a focus-peaking system to improve image clarity and precision',
    ],
  },
];
