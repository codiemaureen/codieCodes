import styles from "./Project.module.css";
import Link from "next/link";

const Project = ({ project }) => {
  return (
    <article className={styles.projectCard}>
      <div className={styles.imageWrapper}>
        <img
          src={`/projects/${project.id}.png`}
          alt={`${project.title} website preview`}
          className={styles.projectImage}
        />

        <div className={styles.overlay}>
          <ul>
            {project.highlights?.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.content}>
        <h3 className={styles.projectTitle}>{project.title}</h3>

        <p className={styles.projectDescription}>{project.description}</p>

        <div className={styles.techStack}>
          {project.languages.map((language, index) => (
            <span key={index} className={styles.techItem}>
              {language}
            </span>
          ))}
        </div>

        <div className={styles.projectLinks}>
          <Link
            href={project.website}
            target="_blank"
            className={styles.primaryBtn}
          >
            Live Site
          </Link>

          <Link
            href={project.githublink}
            target="_blank"
            className={styles.secondaryBtn}
          >
            GitHub
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Project;