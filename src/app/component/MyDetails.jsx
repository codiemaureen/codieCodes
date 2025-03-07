import styles from './MyDetails.module.css'

const MyDetails = () => {
  return (
    <div className={styles.detailsContainer}>
      <ol className={styles.detailsList}>
        <li className={styles.detailItems}></li>
        <li className={styles.detailItems}></li>
        <li className={styles.detailItems}></li>
        <li className={styles.detailItems}></li>
        <li className={styles.detailItems}></li>
        <li className={styles.detailItems}></li>
        <li className={styles.detailItems}></li>
      </ol>
    </div>
  )
}

export default MyDetails
