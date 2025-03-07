import styles from './MySkills.module.css';

const MySkills = () => {
  return (
    <div className={styles.skillsContainer}>
      <ol className={styles.skillList}>
        <li className={styles.skillItems}></li>
        <li className={styles.skillItems}></li>
        <li className={styles.skillItems}></li>
        <li className={styles.skillItems}></li>
        <li className={styles.skillItems}></li>
        <li className={styles.skillItems}></li>
        <li className={styles.skillItems}></li>
      </ol>
    </div>
  )
}

export default MySkills
