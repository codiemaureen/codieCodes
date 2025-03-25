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
    <div id="projects" className={styles.projects}>
      <h2 className={styles.projectsTitle} >{'My Projects'}</h2>
      <div className={styles.projectsContainer}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectsItems}>
            <Project project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;