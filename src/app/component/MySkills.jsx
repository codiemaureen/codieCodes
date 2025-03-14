import styles from './MySkills.module.css';

const MySkills = () => {
  return (
    <div className={styles.skillsContainer}>
      <ol className={styles.skillList}>
        <h4 className={styles.listTitle}>My Languages</h4>
        <li className={styles.skillItems}>
          NEXT.JS
        </li>
        <li className={styles.skillItems}>
          REACT
        </li>
        <li className={styles.skillItems}>
          ANGULAR
        </li>
        <li className={styles.skillItems}>
          NODE
        </li>
        <li className={styles.skillItems}>
          TYPESCRIPT
        </li>
        <li className={styles.skillItems}>
          JAVASCRIPT
        </li>
      </ol>
    </div>
  )
}

export default MySkills
