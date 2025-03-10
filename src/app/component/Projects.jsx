import styles from "./Projects.module.css";
import Project from "./Project";


const Projects = () => {
  return (
    <div className={styles.projects}>
      <h2>{`<Projects />`}</h2>
      <div className={styles.projectsContainer}>
       <item className={styles.projectsItems}>{<Project />}</item>
       <item className={styles.projectsItems}>{<Project />}</item>
       <item className={styles.projectsItems}>{<Project />}</item>
       <item className={styles.projectsItems}>{<Project />}</item>
       <item className={styles.projectsItems}>{<Project />}</item>
       <item className={styles.projectsItems}>{<Project />}</item>
      </div>
    </div>
  )
}

export default Projects
