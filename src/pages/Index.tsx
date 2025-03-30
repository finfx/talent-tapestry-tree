
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <main>
        <Hero />
        <About />
        <Skills />
        <WorkExperience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
