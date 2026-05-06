import styles from "./Project.module.css";
import Link from "next/link";

const Project = ({ project }) => {
  return (
    <article   className={`${styles.projectCard} ${
    project.featured ? styles.featuredCard : ""
  }`}>

      <div className={styles.imageWrapper}>
        <img
          src={`/projects/${project.id}.png`}
          alt={`${project.title} website preview`}
          className={styles.projectImage}
        />
      </div>
      {project.featured && (
        <span className={styles.featuredBadge}>Featured</span>
      )}
      
      <div className={styles.content}>
        <h3 className={styles.projectTitle}>{project.title}</h3>


        <ul className={styles.projectHighlights}>
          {project.highlights?.slice(0, 4).map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>

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