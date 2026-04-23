import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1>Hi, I’m Codie Groth</h1>
      <p>I build modern web applications with React, Next.js, and TypeScript.</p>
    </section>
  );
}