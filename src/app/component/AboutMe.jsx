import styles from './AboutMe.module.css';
import MyDetails from './MyDetails';
import MySkills from './MySkills';

const AboutMe = () => {
  return (
    <div className={styles.aboutMe}>
      <MyDetails />
      <div className={styles.blurb}>
        <h2 className={styles.aboutHeader}>{`About Me`}</h2>
        <p className={styles.description}>Hi, I’m Codie, a Full Stack Developer with a strong focus on Frontend Development. I take pride in  my experience in building dynamic and responsive websites, ensuring that I deliver user-centered, aesthetically pleasing, and functional web applications.
        I have a solid foundation in both frontend and backend technologies, including HTML, CSS, JavaScript, React, Node.js, Next.js and more. I’m always eager to explore the latest trends in web design and development, and I enjoy transforming ideas into visually engaging and interactive web solutions.
        Whether working independently or as part of a team, I’m committed to delivering high-quality, scalable solutions that meet business objectives and enhance user experiences. I thrive in fast-paced environments and am constantly looking for ways to optimize processes and improve my craft.
        When I'm not coding, you can find me enjoying my other passion – gardening. It’s a perfect balance to my tech world, providing a creative outlet and a way to stay grounded.
        <br/>
        <br/>

        Let’s connect if you’re looking for a driven developer to bring innovative ideas to life!</p>
      </div>
      <MySkills />
    </div>
  )
}

export default AboutMe
