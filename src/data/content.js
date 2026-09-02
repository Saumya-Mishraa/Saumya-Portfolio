import chatAppImg from "../assets/projects/chat-app.png";
import employeeMgmtImg from "../assets/projects/employee-management.png";
import softToyImg from "../assets/projects/softtoy-store.png";
import campusWellnessImg from "../assets/projects/campus-wellness.png";

export const social = {
  github: "https://github.com/Saumya-Mishraa",
  linkedin: "https://www.linkedin.com/in/saumya-mishra-a20387373/",
  email: "imsaumya48@gmail.com",
};

export const projects = [
  {
    number: "01",
    title: "Real-Time Chat Application",
    category: "Full Stack Development",
    description:
      "A full-stack real-time chat application with a responsive interface for live conversation. The frontend talks to a Node.js and Express backend that handles users, messages and application data end to end.",
    stack: ["React", "Node.js", "Express.js", "MongoDB"],
    image: chatAppImg,
    links: [{ label: "GitHub", href: "https://github.com/Saumya-Mishraa/real-time-chat-application" }],
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
