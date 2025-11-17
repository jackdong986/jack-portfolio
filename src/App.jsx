import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Box } from "@mui/material";


export default function App() {
  return (
    <Box>
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </Box>
  );
}