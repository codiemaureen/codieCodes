import Hero from "../component/Hero";
import Header from "../component/Header";
import AboutMe from "../component/AboutMe";
import Projects from "../component/Projects";
import ContactMe from "../component/ContactMe";
import Footer from "../component/Footer";

export default function Home() {
  return (

    <div id="__next" className="app">
      <Hero />
      <AboutMe />
      <Projects />
      <ContactMe />
      <Footer/>
    </div>


  );
}
