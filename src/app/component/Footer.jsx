import styles from './Footer.module.css';
import Link from 'next/link';
const Footer = () => {
  return (
    <div className={styles.footer}>
      <h3 className={styles.footerTitle}>Website Built By Codie Groth</h3>
      <section className={styles.credContainer}>
       <div className={styles.imageCredContainer}>
        <h4 className={styles.imageCredit}>Image Credits</h4>
        <ul className={styles.imageCred}>
         <Link href={`https://www.pexels.com/photo/green-and-white-leaves-of-the-plant-7031427/`} target='_blank'>
         <li className={styles.image}>
            Photo by Sarah Ann: 
         </li>
         </Link>
        </ul>
       </div>

       <div className={styles.iconContainer}>
        <ul className="iconCred">
            <li className={styles.iconCred}>
              <Link href='#navbar'>Home
              </Link>
            </li>
          <li className={styles.iconCred}>
            <Link href="https://github.com/codiemaureen" target='_blank'>
              Github
            </Link>
          </li>
          <li className={styles.iconCred}>
            <Link href="https://www.linkedin.com/in/codiemaureen/" target='_blank'>LinkedIn
            </Link>
          </li>
          <li className={styles.iconC}>
            <Link href="https://x.com/CodieMaureen" target='_blank'>Twitter
            </Link>
          </li>
         <li className="icons">
             <a href="mailto:codiegroth?subject=Hello%20there&body=I%20wanted%20to%20reach%20out">
                CodieGroth@Gmail.com
              </a>
         </li>

        </ul>
       </div>
      </section>
    </div>
  )
}

export default Footer
