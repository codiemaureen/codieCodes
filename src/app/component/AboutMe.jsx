import styles from "./AboutMe.module.css";
import MyDetails from "./MyDetails";
import MySkills from "./MySkills";

const AboutMe = () => {
  return (
    <section id="about" className={styles.aboutMe}>
      <div className={styles.inner}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>About Me</p>

          <h2 className={styles.aboutHeader}>
            Full-stack developer building polished, reliable web applications.
          </h2>

          <p className={styles.description}>
            I’m a full-stack developer focused on building scalable,
            production-ready web applications from end to end. I work across
            the stack with React, Next.js, Node.js, TypeScript, and modern
            databases to deliver complete, reliable solutions.
          </p>

          <p className={styles.description}>
            My work combines clean interface design with practical backend
            architecture. I’ve worked directly with clients to translate
            business needs into technical solutions, improve usability, and
            build features that solve real problems.
          </p>

          <p className={styles.description}>
            I take pride in writing maintainable code, improving performance,
            and delivering applications that feel polished, professional, and
            easy to extend.
          </p>
        </div>

        <div className={styles.sidePanel}>
          <MyDetails />
          <MySkills />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;