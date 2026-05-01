import styles from './AboutMe.module.css';
import MyDetails from './MyDetails';
import MySkills from './MySkills';

const AboutMe = () => {
  return (
    <div className={styles.aboutMe}>
      <MyDetails />
      <div className={styles.blurb}>
        <h2 className={styles.aboutHeader}>{`About Me`}</h2>
        <p className={styles.description}>I’m a full stack developer focused on building scalable, production-ready web applications from end to end. I work across the stack using technologies like React, Next.js, Node.js, and modern databases to deliver complete, reliable solutions.
        <br/><br/>
        I have experience working directly with clients to translate business requirements into technical implementations, improve application usability, and deliver features that solve real problems. My work emphasizes clean architecture, performance, and long-term maintainability.
        <br/><br/>
        I’ve built and refined applications ranging from service-based platforms to data-driven tools, with a focus on creating systems that are both functional and easy to extend. I take pride in writing clear, efficient code and delivering polished, production-quality results.</p>
      </div>
      <MySkills />
    </div>
  )
}

export default AboutMe
