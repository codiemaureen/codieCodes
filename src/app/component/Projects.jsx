"use client";

import { useEffect, useState } from "react";
import Project from "./Project";
import styles from "./Projects.module.css";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const response = await fetch("/projects.json");

        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }

        const data = await response.json();
        setProjects(data.projects || []);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    getProjects();
  }, []);

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.projectsHeader}>
        <p className={styles.eyebrow}>Selected Work</p>
        <h2 className={styles.projectsTitle}>Featured Projects</h2>
        <p className={styles.projectsSubtitle}>
          A collection of client websites and product-focused applications built with modern web technologies.
        </p>
      </div>

      <div className={styles.projectsContainer}>
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectList;