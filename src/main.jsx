import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/global.css";
import "./styles/cursor.css";
import "./styles/navbar.css";
import "./styles/hero.css";
import "./styles/freelance.css";
import "./styles/work.css";
import "./styles/about.css";
import "./styles/skills.css";
import "./styles/experience.css";
import "./styles/education.css";
import "./styles/resume.css";
import "./styles/contact.css";
import "./styles/footer.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
