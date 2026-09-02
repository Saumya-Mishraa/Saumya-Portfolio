import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import Hero from "./sections/Hero";
import Freelance from "./sections/Freelance";
import Work from "./sections/Work";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Resume from "./sections/Resume";
import Contact from "./sections/Contact";
import { social } from "./data/content";

export default function App() {
  return (
    <>
      <div className="grain-bg" aria-hidden="true" />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Freelance />
        <Work />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Resume />
        <Contact />
      </main>
      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Saumya Mishra</span>
        <div className="site-footer-links">
          <a href={social.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={social.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={`mailto:${social.email}`}>{social.email}</a>
        </div>
      </footer>
    </>
  );
}
