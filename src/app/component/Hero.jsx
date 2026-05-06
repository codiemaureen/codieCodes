import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Image
        src="/hero.jpg"
        alt="Developer workspace"
        fill
        priority
        className={styles.heroImg}
      />
      <div className={styles.overlay} />
      
      <div className={styles.content}>
        <p className={styles.name}>Codie Groth</p>
        <p className={styles.role}>Full Stack Developer</p>

        <h1 className={styles.heading}>
          Building Scalable, Production-Ready Web Applications
        </h1>

        <p className={styles.subheading}>
          I develop end-to-end applications using React, Next.js, Node.js, and modern databases, delivering reliable solutions that are built to perform and scale.
        </p>

        <div className={styles.buttons}>
          <a href="#projects" className={`${styles.btn} ${styles.primary}`}>
            View Projects <span>→</span>
          </a>

          <a href="/resume.pdf" className={`${styles.btn} ${styles.secondary}`}>
            Download Resume
          </a>

          <a href="#contact" className={`${styles.btn} ${styles.ghost}`}>
            Contact
          </a>
        </div>

        <p className={styles.tech}>
          <span>React</span>
          <i>•</i>
          <span>Next.js</span>
          <i>•</i>
          <span>Node.js</span>
          <i>•</i>
          <span>PostgreSQL</span>
          <i>•</i>
          <span>MongoDB</span>
        </p>
      </div>
    </section>
  );
}