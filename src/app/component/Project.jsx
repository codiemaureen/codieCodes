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
    <h3 className={styles.projectsHeader}>{project.title}</h3>
    {/* {isHovering ? <div>{project.languages}</div> : <Image src={project.frontimage} alt={project.title} width="300" height="100" />} */}
    <Image src={project.frontimage} alt={project.title} layout="responsive" width={16} height={9} />
    <section className={styles.projectLinks}>
     <Link href={'/'}>Github</Link>
     <Link href={'/'}>WebSite</Link>
     <Link href={'/'}>Mobile Preview</Link>
    </section>
   </div>
  )
}

export default Project
