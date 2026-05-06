import styles from './Footer.module.css';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <h3 className={styles.footerTitle}>
        Website Built By Codie Groth
      </h3>

      <section className={styles.credContainer}>
        
        {/* Image Credits */}
        <div className={styles.imageCredContainer}>
          <h4 className={styles.imageCredit}>Image Credits:</h4>
          <ul className={styles.imageCredList}>
            <li>
              <a
                href="https://www.pexels.com/photo/green-and-white-leaves-of-the-plant-7031427/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.imageCred}
              >
                Footer Photo by Sarah Ann
              </a>
            </li>
          </ul>
        </div>

        {/* Navigation / Social */}
        <div className={styles.iconContainer}>
          <ul className={styles.icons}>
            
            <li>
              <Link href="#navbar" className={styles.link}>
                Home
              </Link>
            </li>

            <li>
              <a
                href="https://github.com/codiemaureen"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                GitHub
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/codiemaureen/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                LinkedIn
              </a>
            </li>

            <li>
              <a
                href="https://x.com/CodieMaureen"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Twitter
              </a>
            </li>

            <li>
              <a
                href="mailto:codiegroth@gmail.com?subject=Hello&body=I%20wanted%20to%20reach%20out"
                className={styles.link}
              >
                codiegroth@gmail.com
              </a>
            </li>

          </ul>

          <p className={styles.copy}>
            &copy; {currentYear} Codie Groth. All rights reserved.
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;