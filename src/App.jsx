import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Box
      sx={{
        scrollBehavior: "smooth",
        minHeight: "100vh",
        "& section": {
          scrollMarginTop: "80px",
        },
      }}
    >
      <Navbar />

      <section id="hero">
        <Hero />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </Box>
  );
}
