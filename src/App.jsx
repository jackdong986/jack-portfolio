import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { Box } from "@mui/material";

export default function App() {
  return (
    <Box
      sx={{
        scrollBehavior: "smooth",
        // Fix for navbar overlap when scrolling to anchored sections
        "& section": {
          scrollMarginTop: "80px"
        }
      }}
    >
      <Navbar />

      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>

      {/* Skills */}
      <section id="skills">
        <Skills />
      </section>

      {/* Projects */}
      <section id="projects">
        <Projects />
      </section>

      {/* Contact & Resume */}
      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </Box>
  );
}
