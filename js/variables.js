const NAME = "HASSAN REHAN";
const EMAIL = "memonmuhamadhasan@gmail.com";
const PHONE = "+923033792612";
const JOB = "Senior Software Engineer & CTO";
const GITHUB = "https://github.com/HRmemon";
const LINKEDIN = "https://www.linkedin.com/in/hassan-rehan-memon-749640106/";

const ABOUT =
	"Senior Software Engineer and CTO with 5+ years of experience building high-performance web applications. Deeply specialized in the JavaScript/TypeScript ecosystem (Next.js, NestJS) and AWS Cloud Architecture. Transitioned from NoSQL to PostgreSQL for robust data modeling. Proven track record of delivering MVPs in record time, optimizing AI data pipelines, and debugging complex backend concurrency issues.";

const skills = [
	{
		name: "JavaScript / TypeScript",
		level: 95,
	},
	{
		name: "Next.js & React",
		level: 90,
	},
	{
		name: "Node.js / NestJS",
		level: 90,
	},
	{
		name: "AWS (EC2, S3, Lambda)",
		level: 80,
	},
	{
		name: "PostgreSQL & Prisma",
		level: 85,
	},
	{
		name: "MongoDB",
		level: 90,
	},
	{
		name: "Docker / DevOps",
		level: 80,
	},
	{
		name: "Python / Django",
		level: 80,
	},
	{
		name: "Redis",
		level: 75,
	},
	{
		name: "Agile & Scrum",
		level: 90,
	},
];

const experiences = [
	{
		company: "Parhako",
		title: "Lead Software Engineer",
		startDate: "2025-03",
		endDate: "present",
		location: "Pakistan",
		highlights: [
			"Led backend architecture and development for an AI SaaS platform using Next.js, Express, TypeScript, PostgreSQL, Docker, and AWS.",
			"Designed an LLM orchestration layer that coordinated 100+ API keys across multiple providers with built-in rate limiting, retry logic, fallback strategies, and load distribution. Reduced inference costs while maintaining reliability.",
			"Architected AI processing pipelines for MCQ generation with stages for document chunking, structured output generation, automated validation, and response aggregation.",
			"Built real-time systems for live mock tests, concurrent sessions, and leaderboards that handled high-volume student activity.",
			"Introduced validation passes using regex checks and secondary LLM verification to catch bad output before it reached users.",
			"Managed AWS infrastructure and deployment workflows using Terraform, Docker, S3, SES, and load-balanced containerized services with ECS.",
			"Worked closely with product and engineering teams to prioritize features, improve internal tooling, and ship production systems quickly.",
		],
	},
	{
		company: "TopDevSpace LLC",
		title: "Senior Software Engineer",
		startDate: "2024-04",
		endDate: "2025-02",
		location: "Remote",
		highlights: [
			"Managed Django data pipelines on HPC clusters and resolved orchestration race conditions, cutting processing time by 70%.",
			"Integrated Stripe and QuickBooks workflows into AWS Elasticsearch and LLM-based reporting systems for automated financial summaries.",
			"Worked with product and infrastructure teams to ship backend services and integrations.",
		],
	},
	{
		company: "TopDevSpace LLC",
		title: "Software Engineer",
		startDate: "2023-08",
		endDate: "2024-03",
		location: "Remote",
		highlights: [
			"Decoupled a large Angular and Node.js monorepo into separate repositories, which fixed recurring CI/CD failures and unblocked the QA team.",
			"Delivered a SaaS MVP in four sprints using NestJS and PostgreSQL in collaboration with product stakeholders.",
			"Improved deployment workflows and backend maintainability across multiple services.",
		],
	},
	{
		company: "Bitnine Global Inc.",
		title: "Software Engineering Intern",
		startDate: "2023-04",
		endDate: "2023-09",
		location: "Remote",
		highlights: [
			"Wrote documentation and answered developer questions about PostgreSQL and Sequelize.",
			"Answered 40+ database engineering questions on StackOverflow, reaching roughly 29,000 developers.",
			"Built frontend components for a database visualization dashboard using JavaScript and CSS.",
		],
	},
	{
		company: "Erays Technology",
		title: "Software Engineering Intern",
		startDate: "2022-04",
		endDate: "2022-06",
		location: "Pakistan",
		highlights: [
			"Built a real-time foot posture heat-map visualization system using JavaScript, Python, and SVG rendering.",
			"Wrote interpolation and SVG transformation scripts to turn sensor data into smooth visual maps.",
		],
	},
	{
		company: "Incio",
		title: "Freelance Software Engineer",
		startDate: "2020-06",
		endDate: "2022-01",
		location: "Remote",
		highlights: [
			"Built scheduling and meeting integrations using Zoom and Google Meet APIs.",
			"Developed invoicing and calendar modules for a business management SaaS platform.",
			"Implemented backend and frontend features with React, Node.js, and MongoDB.",
		],
	},
];

const education = [
	{
		school: "National University of Sciences and Technology (NUST)",
		degree: "Bachelor of Engineering in Software Engineering",
	},
	{
		school: "Other Certifications",
		degree: "Advanced Node.js, Modern React with Redux",
	},
];

const services = [
	{
		name: "Full Stack Architecture",
		description:
			"Architecting scalable, type-safe web applications using the Next.js and Node.js/NestJS ecosystem. I prioritize robust data modeling with PostgreSQL/Prisma and ensure high performance from day one.",
		icon: "icon-window",
	},
	{
		name: "Cloud & DevOps (AWS)",
		description:
			"Designing and deploying cost-efficient cloud infrastructure on AWS (EC2, S3, RDS, Lambda). I implement CI/CD pipelines, Docker containerization, and distributed system best practices.",
		icon: "icon-earth",
	},
	{
		name: "AI Integration",
		description:
			"Integrating Generative AI APIs (LLMs) into web platforms. I focus on token optimization, cost reduction, and building automated data pipelines for training or context generation.",
		icon: "fa fa-database",
	},
	{
		name: "MVP Development",
		description:
			"Rapidly delivering production-ready MVPs. I specialize in taking projects from ideation to go-to-market launch, handling everything from frontend design to backend concurrency and payment integrations.",
		icon: "fa fa-rocket",
	},
];

const stats = [
	{
		icon: "icon-pencil-ruler",
		count: 36,
		title: "Projects Completed",
	},
	{
		icon: "icon-users",
		count: 12,
		title: "Happy Clients",
	},
	{
		icon: "icon-light-bulb",
		count: 9,
		title: "Crazy Ideas",
	},
	{
		icon: "icon-cup",
		count: 1800,
		title: "Coffee Cups",
	},
	{
		icon: "icon-clock",
		count: 10000,
		title: "Hours",
	},
];
