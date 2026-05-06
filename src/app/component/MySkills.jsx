import styles from "./MySkills.module.css";

const skills = [
  "Next.js",
  "React",
  "Angular",
  "Node.js",
  "MongoDB",
  "Azure",
  "Docker",
  "TypeScript",
  "JavaScript",
  "CSS / Sass",
  "Web Accessibility",
];

const MySkills = () => {
  return (
    <div className={styles.skillsContainer}>
      <p className={styles.cardLabel}>Tech Stack</p>

      <ul className={styles.skillList}>
        {skills.map((skill) => (
          <li key={skill} className={styles.skillItem}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MySkills;