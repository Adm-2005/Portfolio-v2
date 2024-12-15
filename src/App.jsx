import { useState } from "react";
import Nav from "./components/Nav.jsx";
import Hero from "./sections/Hero.jsx";
import Education from "./sections/Education.jsx";
import Experience from "./sections/Experience.jsx";
import Skills from "./sections/Skills.jsx";
import Certifications from "./sections/Certifications.jsx";
import Projects from "./sections/Projects.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

export default function App() {
  const [darkMode, setdarkMode] = useState(false);

  function toggleDarkMode() {
    setdarkMode((prevDarkMode) => !prevDarkMode);
  }

  return (
    <main className={darkMode ? "bg-[#121212]" : "bg-white"}>
      <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <section>
        <Hero
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
      </section>

      <section>
        <Education
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
      </section>

      <section>
        <Experience
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
      </section>

      <section>
        <Skills
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
      </section>

      <section>
        <Projects
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
      </section>

      <section>
        <Certifications
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
      </section>

      {/* <section>
        <Contact
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
      </section> */}

      <Footer darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </main>
  );
}
