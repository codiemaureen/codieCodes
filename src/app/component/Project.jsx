import styles from './Project.module.css';
import Link from 'next/link';

const Project = ({ project }) => {
  return (
    <div className={styles.projectCard}>
      
      {/* IMAGE */}
      <div className={styles.imageWrapper}>
        <img
          src={`/projects/${project.id}.png`} // replace with your images
          alt={project.title}
          className={styles.projectImage}
        />
      </div>

      {/* CONTENT */}
      <div className={styles.content}>
        <h3 className={styles.projectTitle}>{project.title}</h3>

        <p className={styles.projectDescription}>
          {project.description}
        </p>

        {/* TECH STACK */}
        <div className={styles.techStack}>
          {project.languages.map((tech, index) => (
            <span key={index} className={styles.techItem}>
              {tech}
            </span>
          ))}
        </div>

        {/* LINKS */}
        <div className={styles.projectLinks}>
          <Link href={project.website} target="_blank" className={styles.primaryBtn}>
            Live Site →
          </Link>
          <Link href={project.githublink} target="_blank" className={styles.secondaryBtn}>
            GitHub
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;