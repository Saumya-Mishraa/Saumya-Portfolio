import veloraImg from "../assets/projects/velora.webp";
import employeeMgmtImg from "../assets/projects/employee-management.png";
import softToyImg from "../assets/projects/softtoy-store.png";
import campusWellnessImg from "../assets/projects/campus-wellness.png";
import vyraImg from "../assets/projects/vyra-coffee-house.webp";
import maisonImg from "../assets/projects/maison-atelier.webp";
import flowforgeImg from "../assets/projects/flowforge.png";

export const social = {
  github: "https://github.com/Saumya-Mishraa",
  linkedin: "https://www.linkedin.com/in/saumya-mishra-a20387373/",
  email: "imsaumya48@gmail.com",
};

export const projects = [
  {
    number: "01",
    title: "Velora — Real-Time Chat Application",
    category: "Full Stack Development",
    description:
      "A full-stack real-time communication platform covering direct and group messaging, WebRTC voice and video calls, 24-hour Status updates and shared Moments. A React front end talks to an Express API and Socket.IO for live events, with MongoDB for persistence and Cloudinary for media.",
    features: [
      "1:1 and group chat with sent, delivered and seen states",
      "Typing indicators, presence, replies, reactions and voice messages",
      "WebRTC voice and video calls with call history",
      "Status updates that expire after 24 hours, plus shared Moments",
      "JWT authentication and Cloudinary media uploads",
    ],
    stack: ["React", "Vite", "Tailwind CSS", "Node.js", "Express.js", "Socket.IO", "MongoDB", "WebRTC"],
    image: veloraImg,
    links: [
      { label: "Live Demo", href: "https://velora-real-time-chat-ecru.vercel.app/" },
      { label: "GitHub", href: "https://github.com/Saumya-Mishraa/velora-real-time-chat" },
    ],
    layout: "large-left",
  },
  {
    number: "02",
    title: "Employee Management System",
    category: "Full Stack Development",
    description:
      "A full-stack system for managing employee records, built with complete CRUD operations for creating, viewing, updating and removing entries. REST APIs connect the React interface to a MongoDB-driven backend.",
    stack: ["React", "Node.js", "Express.js", "MongoDB"],
    image: employeeMgmtImg,
    links: [{ label: "GitHub", href: "https://github.com/Saumya-Mishraa/Employee-Management-System" }],
    layout: "large-right",
  },
  {
    number: "03",
    title: "Soft Toy Store",
    category: "Frontend Development",
    description:
      "A frontend storefront concept for a soft-toy brand — clean product presentation, a light and inviting palette, and layouts built for browsing and easy navigation across devices.",
    stack: ["React", "JavaScript", "HTML", "CSS"],
    image: softToyImg,
    links: [{ label: "Live Demo", href: "https://saumya-mishraa.github.io/Soft-Toy-Store/" }],
    layout: "large-left",
  },
  {
    number: "04",
    title: "Campus Wellness Compass",
    category: "Web Development",
    description:
      "A student-focused wellness resource offering quick first-aid guidance, health tracking tools and local medical resources — designed to be simple, free and usable without an account.",
    stack: ["React", "JavaScript", "HTML", "CSS"],
    image: campusWellnessImg,
    links: [{ label: "Live Demo", href: "https://campus-wellness-compass-azm.caffeine.xyz/" }],
    layout: "large-right",
  },
  {
    number: "05",
    title: "Vyra Coffee House",
    category: "Café Website & Ordering UI",
    description:
      "An editorial website for a small-batch café, built around a slow-coffee story. A full-bleed hero, a warm cream and espresso palette and serif headlines lead into a menu of drinks that can be added to a bag. On mobile, the header navigation becomes a bottom tab bar.",
    features: [
      "Menu cards with prices and add-to-bag buttons",
      "Bag counter in the header",
      "Bottom tab navigation on mobile",
      "Story and visit sections with a distinct editorial feel",
    ],
    stack: ["Responsive Design", "Deployed on Vercel"],
    image: vyraImg,
    links: [{ label: "Live Demo", href: "https://vyra-coffee-house-ftc9.vercel.app/" }],
    layout: "large-left",
  },
  {
    number: "06",
    title: "Maison Atelier",
    category: "Fashion E-Commerce Frontend",
    description:
      "A storefront for a small-run clothing label, designed to feel calm and considered rather than loud. It pairs a large serif hero with a filterable product grid and a journal of style notes, all in a muted natural palette.",
    features: [
      "Category tabs for outerwear, tailoring, knitwear and essentials",
      "Product cards with prices, Best seller and New in badges",
      "Add-to-bag action and bag counter",
      "Journal section with read-time labels",
    ],
    stack: ["Responsive Design", "Deployed on Vercel"],
    image: maisonImg,
    links: [{ label: "Live Demo", href: "https://maison-atelier-xi.vercel.app/" }],
    layout: "large-right",
  },
  {
    number: "07",
    title: "FlowForge",
    category: "Full Stack Development",
    description:
      "A full-stack developer platform for testing REST APIs and designing multi-step API workflows on a visual canvas. A server-side engine executes real HTTP calls, branches on conditions and passes data between steps, with execution logs and step-by-step debugging.",
    features: [
      "API tester with collections, environments and request history",
      "React Flow workflow designer with nine node types",
      "Execution engine with chaining, branching, validation and debug mode",
      "JWT and Google OAuth sign-in, with analytics from real MongoDB queries",
    ],
    stack: ["React", "Vite", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "React Flow", "JWT"],
    image: flowforgeImg,
    links: [
      { label: "Live Demo", href: "https://flow-forge-three-xi.vercel.app/" },
      { label: "GitHub", href: "https://github.com/Saumya-Mishraa/FlowForge" },
    ],
    layout: "large-left",
  },
];

export const skills = [
  {
    category: "Frontend Development",
    items: [
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css3" },
      { name: "JavaScript", icon: "javascript" },
      { name: "React.js", icon: "react" },
      { name: "Responsive Design", icon: "responsive" },
      { name: "Tailwind CSS", icon: "tailwind" },
    ],
  },
  {
    category: "Backend Development",
    items: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express.js", icon: "express" },
      { name: "REST APIs", icon: "restapi" },
      { name: "JWT Authentication", icon: "jwt" },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MongoDB", icon: "mongodb" },
      { name: "Mongoose", icon: "mongoose" },
      { name: "MySQL", icon: "mysql" },
    ],
  },
  {
    category: "Tools & Deployment",
    items: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Postman", icon: "postman" },
      { name: "Vite", icon: "vite" },
      { name: "npm", icon: "npm" },
      { name: "VS Code", icon: "vscode" },
      { name: "Vercel", icon: "vercel" },
      { name: "Render", icon: "render" },
      { name: "GitHub Pages", icon: "githubpages" },
    ],
  },
  {
    category: "Additional",
    items: [
      { name: "TypeScript", icon: "typescript" },
      { name: "Next.js", icon: "nextjs" },
      { name: "AI-Assisted Development", icon: "ai" },
    ],
  },
];

export const experience = [
  {
    role: "Web Developer Designer Intern",
    org: "AayoApp",
    period: "Internship",
    points: [
      "Worked on responsive web interfaces and frontend components using React.js, JavaScript, HTML5 and CSS3.",
      "Improved UI layouts and responsiveness across desktop, tablet and mobile devices.",
      "Worked on API-integrated screens and resolved frontend UI and responsiveness issues.",
    ],
  },
  {
    role: "Full Stack Web Development Internship",
    org: "Prodigy InfoTech",
    period: "Internship",
    points: ["Completed a full stack web development internship, applying frontend and backend fundamentals to real project work."],
  },
];

export const education = {
  degree: "Bachelor of Computer Applications (BCA)",
  school: "Maharaja Agrasen Institute of Management Studies (MAIMS)",
  period: "2024 – Present",
  location: "Delhi, India",
  coursework: [
    "Web Development",
    "Database Management Systems",
    "Object-Oriented Programming",
    "Computer Networks",
    "Software Engineering",
  ],
};

export const achievements = [
  "Full Stack Web Development Internship — Prodigy InfoTech",
  "Participated in University Hackathons and Technical Events",
];
