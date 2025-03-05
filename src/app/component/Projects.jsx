import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <div className={styles.projects}>
      <h2 className={styles.projectsHeader}>{`<Projects />`}</h2>
      <div className={styles.projectsContainer}>
       <item className={styles.projectsItems}>item 1</item>
       <item className={styles.projectsItems}>item 2</item>
       <item className={styles.projectsItems}>item 3</item>
       <item className={styles.projectsItems}>item 4</item>
       <item className={styles.projectsItems}>item 5</item>
       <item className={styles.projectsItems}>item 6</item>
      </div>
    </div>
  )
}

export default Projects
