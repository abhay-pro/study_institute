import { Code, Smartphone, Calculator, Database, Laptop } from "lucide-react";

export const appConfig = {
	instituteName: "Barrackpore Academy of Information Technology",
	shortName: "BAIT Academy",
	tagline: "Empowering Minds with Practical IT & Professional Skills",
	phone: "+91 98301 XXXXX",
	whatsappNumber: "9198301XXXXX",
	email: "info@baitacademy.in",
	address: "45/1 Station Road, Opposite Railway Gate No. 2, Barrackpore, Kolkata - 700120",
	established: "2012",
	stats: {
		studentsTrained: "15,000+",
		placementRate: "95%",
		expertTrainers: "25+",
		labComputers: "120+",
	},
	skills: [
		{
			id: "python",
			name: "Python Programming",
			category: "Software & Web",
			icon: Code,
			duration: "3 Months",
			badge: "Popular",
			description:
				"Master Data Structures, OOPs, Automation scripts, and Web Development basics using Python.",
			highlights: [
				"Core & Advanced Python",
				"Django / Flask Intro",
				"Data Analytics Basics",
				"Live Project",
			],
		},
		{
			id: "cpp",
			name: "C & C++ Programming",
			category: "Software & Web",
			icon: Code,
			duration: "3 Months",
			badge: "Foundation",
			description:
				"Build robust programming fundamentals, memory management, and algorithm development.",
			highlights: [
				"Logic Building",
				"Pointers & Arrays",
				"OOP Concepts",
				"Problem Solving",
			],
		},
		{
			id: "java",
			name: "Java Enterprise Dev",
			category: "Software & Web",
			icon: Code,
			duration: "4 Months",
			badge: "In Demand",
			description:
				"Comprehensive Java training from basic syntax to enterprise OOPs and Database Connectivity.",
			highlights: [
				"Core Java & Threads",
				"JDBC & Hibernate",
				"Spring Boot Intro",
				"Project Work",
			],
		},
		{
			id: "react",
			name: "ReactJS Web Frontend",
			category: "Software & Web",
			icon: Laptop,
			duration: "2.5 Months",
			badge: "Trending",
			description:
				"Build dynamic, fast single-page modern web applications with React Hooks & Redux.",
			highlights: [
				"JSX & Components",
				"State & Context API",
				"Tailwind Integration",
				"Real-World Apps",
			],
		},
		{
			id: "angular",
			name: "Angular Framework",
			category: "Software & Web",
			icon: Laptop,
			duration: "3 Months",
			badge: "Corporate",
			description:
				"TypeScript based modern web application architecture for scalable frontends.",
			highlights: [
				"TypeScript Mastery",
				"RxJS & Services",
				"Routing & Forms",
				"Enterprise Apps",
			],
		},
		{
			id: "android",
			name: "Android App Development",
			category: "Mobile Apps",
			icon: Smartphone,
			duration: "4 Months",
			badge: "Mobile",
			description:
				"Create native Android applications with Kotlin, Material Design, and Firebase backend.",
			highlights: [
				"Kotlin Fundamentals",
				"UI Components",
				"REST API Sync",
				"Play Store Deploy",
			],
		},
		{
			id: "ios",
			name: "iOS App Development",
			category: "Mobile Apps",
			icon: Smartphone,
			duration: "4 Months",
			badge: "Specialized",
			description:
				"Build sleek iOS apps with Swift and SwiftUI framework for Apple ecosystem.",
			highlights: [
				"Swift & SwiftUI",
				"iOS Navigation",
				"CoreData Basics",
				"App Store Guidelines",
			],
		},
		{
			id: "tally",
			name: "Tally Prime with GST",
			category: "Finance & ERP",
			icon: Calculator,
			duration: "2 Months",
			badge: "Job Ready",
			description:
				"Complete computerized accounting software training with e-Filing & GST compliance.",
			highlights: [
				"Voucher Entries",
				"GST Calculation & Returns",
				"Inventory Management",
				"Payroll",
			],
		},
		{
			id: "sap",
			name: "SAP (FICO & MM Modules)",
			category: "Finance & ERP",
			icon: Calculator,
			duration: "4 Months",
			badge: "High Pay",
			description:
				"Enterprise resource planning mastery for Financial Accounting and Materials Management.",
			highlights: [
				"General Ledger",
				"Accounts Payable/Receivable",
				"Procurement Cycle",
				"SAP System Hands-on",
			],
		},
		{
			id: "oracle",
			name: "Oracle Database & PL/SQL",
			category: "Databases",
			icon: Database,
			duration: "3 Months",
			badge: "Essential",
			description:
				"Master enterprise database architecture, complex querying, triggers, and stored procedures.",
			highlights: [
				"RDBMS Concepts",
				"PL/SQL Programming",
				"Performance Tuning",
				"Backup & Recovery",
			],
		},
		{
			id: "mysql",
			name: "MySQL & Relational DBs",
			category: "Databases",
			icon: Database,
			duration: "2 Months",
			badge: "Core",
			description:
				"Learn web database design, SQL querying, indexing, and normalized database architecture.",
			highlights: [
				"SQL Queries & Joins",
				"Normalization",
				"Stored Procedures",
				"Integration with Web Apps",
			],
		},
		{
			id: "msoffice",
			name: "MS Office & Advanced Excel",
			category: "Office Tools",
			icon: Laptop,
			duration: "2 Months",
			badge: "Beginner Friendly",
			description:
				"Master Word, PowerPoint, and Advanced Excel formulas, Pivot tables, and VBA Macros.",
			highlights: [
				"VLOOKUP / XLOOKUP",
				"Pivot Tables & Charts",
				"PowerPoint Deck Creation",
				"Office Automation",
			],
		},
	],
	reviews: [
		{
			id: 1,
			name: "Ayan Mukhopadhyay",
			course: "Python & ReactJS",
			rating: 5,
			date: "2 weeks ago",
			comment:
				"BAIT Barrackpore transformed my career! The practical hands-on coding sessions and lab guidance helped me crack my first tech interview within a month of completion.",
		},
		{
			id: 2,
			name: "Priya Banerjee",
			course: "Tally Prime & SAP FICO",
			rating: 5,
			date: "1 month ago",
			comment:
				"Best accounting institute in Barrackpore. Faculty explained GST filing step-by-step with live company bills. Got placed in a local CA firm quickly!",
		},
		{
			id: 3,
			name: "Rahul Sharma",
			course: "Android & Java",
			rating: 5,
			date: "2 months ago",
			comment:
				"Faculty members are super patient. The lab facility is top-class with high speed internet. Special thanks to the placement coordinator!",
		},
	],
};

export const categories = [
	"All",
	"Software & Web",
	"Mobile Apps",
	"Finance & ERP",
	"Databases",
	"Office Tools",
];
