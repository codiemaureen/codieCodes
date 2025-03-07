import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.navContainer}>
      <h1>Codie Groth</h1>
      <div className={styles.navItem}>ABOUTME.md</div>
      <div className={styles.navItem}>Github.com</div>
      <div className={styles.navItem}>LinkedIn.com</div>
      <div className={styles.navItem}>Projects</div>
      <div className={styles.navItem}>Contact Me</div>
      <header className={styles.header}>
        <img src='/pexels-pixabay-270632.jpg' alt='' className={styles.headerImage} />
      </header>
    </div>
  )
}

export default Header
