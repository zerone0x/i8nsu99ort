import Header from "../ui/header";
import Footer from "../ui/footer";
import About from "../pages/about";
import Skill from "../pages/skill";
import Project from "../pages/project";
import Contact from "../pages/contact";
import AboutMe from "../pages/AboutMe";
import Experience from "../pages/exp";
import "../app/globals.css";

export default function Home() {
  return (
    <body className="bg-[#7EC6B5] text-black font-sans h-screen grid grid-rows-[auto_1fr_auto] overflow-hidden">
      <Header />
      <div className="overflow-scroll">
        <main className="max-w-7xl mx-auto">
          <About />
          <AboutMe />
          <Experience />
          <Skill />
          <Project />
          
          <Contact />
          {/* <Footer /> */}
        </main>
      </div>
    </body>
  );
}

// #F3FFF9
// |
// #FAF8F1
