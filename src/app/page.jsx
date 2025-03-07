import Header from "./component/Header";
import AboutMe from "./component/AboutMe";
import Projects from "./component/Projects";
import ContactMe from "./component/ContactMe";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <div className="app">
    <Header />
    <AboutMe />
    <Projects />
    <ContactMe />
    <Footer/>
    </div>

  );
}
