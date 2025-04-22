import { useState } from 'react';
import styles from './Project.module.css';
import Link from 'next/link';
import Image from 'next/image';


const Project = ({project}) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  }

  const handleMouseLeave = () => {
    setIsHovering(false);
  }
  return (
   <div className={styles.projectCard} 
   onMouseEnter={handleMouseEnter}
   onMouseLeave={handleMouseLeave}>
    <h3 className={styles.projectTitle}>{project.title}</h3>
      <Link href={project.website} target='_blank'>
      <img src={project.frontimage} alt={project.title} className={styles.projectImage}/>
      </Link>
    
      <section className={styles.projectLinks}>
        <Link className={styles.projectLink} href={project.githublink} target='_blank'>Github</Link>
        <Link className={styles.projectLink} href={project.website} target='_blank'>Website</Link>
      </section>
    </div>
  )
}

export default Project
