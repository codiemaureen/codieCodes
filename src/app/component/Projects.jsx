"use client";
import { useEffect, useState } from "react";
import Project from "./Project"; 
import styles from "./Projects.module.css"

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data.projects))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <div className={styles.projects}>
      <div className={styles.projectsContainer}>

      
      {projects.map((project) => (
        <div className={styles.projectsItems}>
          <Project key={project.id} project={project} />
        </div>
      ))}
      </div>
    </div>
  );
};

export default ProjectList;