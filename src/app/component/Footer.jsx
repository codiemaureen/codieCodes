import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <h3>Website by:</h3><span>Codie Groth</span>
      <section className={styles.credContainer}>
       <div className={styles.iconCredContainer}>
        <h4 className={styles.iconCredit}>Icon Credit </h4>
       </div>
       <div className={styles.imageCredContainer}>
        <h4 className={styles.imageCredit}>Image Credit</h4>
       </div>
      </section>
      <button className="returnHome">Codie Groth</button>
    </div>
  )
}

export default Footer
