import styles from './Header.module.css';
import Link from 'next/link';
import { Fleur_De_Leah, DM_Serif_Text } from 'next/font/google';

const fleurDeLeah = Fleur_De_Leah({
  weight: '400',
  subsets: ['latin'],
});
const dmSerifText = DM_Serif_Text({
  weight: '400',
  subsets: ['latin'],
});

const Header = () => {
  return (
    <>
      <div id='navBar' className={styles.navContainer}>
        <Link className={styles.headerTitle} href="#navBar"><
          h1 className={`${styles.headerTitle} ${fleurDeLeah.className}`}>Codie Groth</h1>
        </Link>
        <ol className={`${styles.navList} ${dmSerifText.className}`}>
          <Link className={styles.navLink} href="https://github.com/codiemaureen" target='_blank'>
            <li className={styles.navItem}>Github</li>
          </Link>
          <Link className={styles.navLink} href="https://www.linkedin.com/in/codiemaureen/" target='_blank'>
            <li className={styles.navItem}>LinkedIn</li>
          </Link>
          <Link className={styles.navLink} href="#projects">
            <li className={styles.navItem}>Projects</li>
          </Link>
          <Link className={styles.navLink} href="#contactMe">
            <li className={styles.navItem}>Contact Me</li>
          </Link>
        </ol> 
      </div>
      <header className={styles.header}>
        <img src='/pexels-sarah-ann-3164915-7031427.jpg' alt='header-image' className={styles.headerImage} />
      </header>
    </>
  )
}

export default Header
