"use client";
import { useState } from 'react';
import styles from './Project.module.css';
import Link from 'next/link';


const Project = () => {
 const [isHovering, setIsHovering] = useState(false);

 const handleMouseEnter = () => {
  setIsHovering(true);
 }

 const handleMouseLeave = () => {
  setIsHovering(false);
 }
  return (
   <div className={styles.ProjectContainer} 
   onMouseEnter={handleMouseEnter}
   onMouseLeave={handleMouseLeave}>
    <h3 >Project Name</h3>
    {/* <img src="" alt="" /> */}
    {isHovering ? 'Back Image' : 'Front Image'}
    
    <section className={styles.projectLinks}>
     <Link href={'/'}>Github</Link>
     <Link href={'/'}>WebSite</Link>
     <Link href={'/'}>Mobile Preview</Link>
    </section>
   </div>
  )
}

export default Project
