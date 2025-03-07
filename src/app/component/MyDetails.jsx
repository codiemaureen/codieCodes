import styles from './MyDetails.module.css'

const MyDetails = () => {
  return (
    <div className={styles.detailsContainer}>
      <ol className={styles.detailsList}>
        <li className={styles.detailItems}>Full Stack Software Engineer</li>
        <li className={styles.detailItems}>Metro Detroit</li>
        <li className={styles.detailItems}>CodieGroth@Gmail.com</li>
        <li className={styles.detailItems}>Github</li>
        <li className={styles.detailItems}>LinkedIn</li>
        <li className={styles.detailItems}>Schedue a Coffee Chat</li>
        <li className={styles.detailItems}>Vist My Github City</li>
      </ol>
    </div>
  )
}

export default MyDetails
