import AboutMe from "./component/AboutMe";

export default function Home() {
  return (
    <>
    <div className="nav-container">
      <h1>Codie Groth</h1>
      <div className="nav-item">ABOUTME.md</div>
      <div className="nav-item">Github.com</div>
      <div className="nav-item">LinkedIn.com</div>
      <div className="nav-item">Projects</div>
      <div className="nav-item">Contact Me</div>
      <header className="header">
        <img src='/pexels-pixabay-270632.jpg' alt="" className="header-image" />
      </header>
    </div>
    <AboutMe />
    </>

  );
}
