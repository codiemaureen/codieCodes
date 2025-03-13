import styles from './Header.module.css';
import Link from 'next/link';

const Header = () => {
  return (
    <>
    
    <div id='navBar' className={styles.navContainer}>
      <Link className={styles.headerTitle} href="#navBar"><h1 className={styles.headerTitle}>Codie Groth</h1></Link>
      <ol  className={styles.navList}>
        <Link className={styles.navLink} href="#projects"><li className={styles.navItem}>Github</li></Link>
        <Link className={styles.navLink} href="#projects"><li className={styles.navItem}>LinkedIn</li></Link>
        <Link className={styles.navLink} href="#projects"><li className={styles.navItem}>Projects</li></Link>
        <Link className={styles.navLink} href="#contactMe"><li className={styles.navItem}>Contact Me</li></Link>
      </ol> 
    </div>
      <header className={styles.header}>
        <img src='/pexels-pixabay-270632.jpg' alt='' className={styles.headerImage} />
      </header>
   
    </>
  )
}

export default Header
