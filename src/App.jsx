import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ExperiencePage from "./pages/ExperiencePage"; // ✅ New Page
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import SkillsPage from "./pages/SkillsPage";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <main className="flex-grow bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        <section id="home" className="min-h-screen">
          <Home />
        </section>

        <section
          id="about"
          className="min-h-screen flex items-center justify-center"
        >
          <AboutPage />
        </section>

        <section id="experience">
          <ExperiencePage />
        </section>
        <section id="projects">
          <ProjectsPage />
        </section>
        <section id="skills">
          <SkillsPage />
        </section>
        <section id="contact">
          <ContactPage />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
