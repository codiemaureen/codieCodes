import styles from './MySkills.module.css';

const MySkills = () => {
  const skills = ['NEXT.JS', 'REACT', 'ANGULAR', 'NODE', 'MONGODB', 'AZURE', 'DOCKER', 'TYPESCRIPT', 'JAVASCRIPT', 'CSS/SASS', 'WEB ACCESSIBILITY']
  return (
    <div className={styles.skillsContainer}>
      <h4 className={styles.listTitleMobile}>My Languages</h4>
      <ol className={styles.skillList}>
      {skills.map((skill,i) => (
          <li key={i} className={styles.skillItems}>{skill}</li>
        ))}
      </ol>
    </div>
  )
}

export default MySkills
