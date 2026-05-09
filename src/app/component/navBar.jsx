"use client";

import Link from "next/link";
import styles from "./navbar.module.css";
import { Download } from "lucide-react";

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        CODIE GROTH
      </Link>

      <nav className={styles.navLinks}>
        <Link href="#about">About</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#about">Skills</Link>
        <Link href="#projects">Experience</Link>
        <Link href="#contact">Contact</Link>
      </nav>

      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.resumeButton}
      >
        <Download size={18} strokeWidth={1.75} />
        Resume
      </a>
    </header>
  );
};

export default Navbar;