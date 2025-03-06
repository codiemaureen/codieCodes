import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <h3 className={styles.footerTitle}>Website By Codie Groth</h3>
      <section className={styles.credContainer}>
       <div className={styles.iconCredContainer}>
        <h4 className={styles.iconCredit}>Icon Credit </h4>
        <ul className="iconCred">
         <li className="icons">icons 1</li>
         <li className="icons">icons 2</li>
         <li className="icons">icons 3</li>
        </ul>
       </div>
       <div className={styles.imageCredContainer}>
        <h4 className={styles.imageCredit}>Image Credit</h4>
        <ul className="imageCred">
         <li className="images">images 1</li>
         <li className="images">images 2</li>
         <li className="images">images 3</li>
        </ul>
       </div>
      </section>
      <button className="returnHome">Codie Groth</button>
    </div>
  )
}

export default Footer
