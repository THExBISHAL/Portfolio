import "./App.css";
import ContactSection from "./components/Contact-Section";
import EducationSection from "./components/Education-Section";
import Footer from "./components/Footer-Section";
import HeroSection from "./components/Hero-Section";
import Navbar from "./components/Navbar/Navbar";
import ProjectSection from "./components/Project-Section";
import SkillSection from "./components/Skill-Section";

function App() {
  return (
    <>
      <Navbar />
      <main className="cursor-default">
        <HeroSection />
        <SkillSection />
        <ProjectSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
