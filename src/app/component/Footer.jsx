import styles from './Footer.module.css';
import Link from 'next/link';
const Footer = () => {

  const currentYear= new Date().getFullYear();
  return (
    <div className={styles.footer}>
      <h3 className={styles.footerTitle}>Website Built By Codie Groth</h3>
      <section className={styles.credContainer}>
       <div className={styles.imageCredContainer}>
        <h4 className={styles.imageCredit}>Image Credits:</h4>
        <ul className={styles.imageCredList}>
         <Link className={styles.imageCred} href={`https://www.pexels.com/photo/green-and-white-leaves-of-the-plant-7031427/`} target='_blank'>
         <li className={styles.image}>
            Header & Footer Photo by Sarah Ann
         </li>
         </Link>
        </ul>
       </div>

       <div className={styles.iconContainer}>
        <ul className={styles.icons}>
            <li className={styles.icon}>
              <Link href='#navbar'
              className={styles.icon}>Home
              </Link>
            </li>
          <li className={styles.icon}>
            <Link href="https://github.com/codiemaureen" target='_blank'
            className={styles.icon}>
              Github
            </Link>
          </li>
          <li className={styles.icon}>
            <Link 
            href="https://www.linkedin.com/in/codiemaureen/" 
            target='_blank'
            className={styles.icon}>LinkedIn
            </Link>
          </li>
          <li className={styles.icon}>
            <Link href="https://x.com/CodieMaureen" target='_blank'
            className={styles.icon}>Twitter
            </Link>
          </li>
         <li className={styles.icon}>
             <a href="mailto:codiegroth?subject=Hello%20there&body=I%20wanted%20to%20reach%20out"
             className={styles.icon}>
                CodieGroth@Gmail.com
              </a>
         </li>

        </ul>
        <p>&copy; { currentYear } Codie Groth. All rights reserved.</p>
       </div>
      </section>
    </div>
  )
}

export default Footer
