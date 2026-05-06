import React from 'react'
import styles from "./resume.module.css";
import Link from 'next/link';

function Resume() {
  return (
    <div>
      <div className={styles.actions}>
        <Link href="/" className={styles.back}>
            ← Back to Home
        </Link>
      </div>
      <section className={styles.header}>
        <p className={styles.eyebrow}>Resume</p>

        <h1>Codie Groth</h1>

        <p>
          Full Stack Developer focused on building scalable, production-ready web applications.
        </p>
        <div className={styles.actions}>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Open in New Tab <span>↗</span>
          </a>

          <a href="/resume.pdf" download>
            Download PDF <span>↓</span>
          </a>
        </div>
      </section>
      <div className={styles.viewer}>
        <iframe
          src="/codiegroth_resume.pdf"
          title="Resume"
          width="100%"
          height="100%"
        />
      </div>
      <div className={styles.footer}>
  <p>Interested in working together?</p>
  <a href="#contact">Contact Me</a>
</div>
    </div>
    
  )
}

export default Resume
