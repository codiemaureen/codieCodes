import styles from './AboutMe.module.css';
import MyDetails from './MyDetails';
import MySkills from './MySkills';

const AboutMe = () => {
  return (
    <div className={styles.aboutMe}>
      <MyDetails />
      <div className={styles.blurb}>
        <h2 className={styles.aboutHeader}>{`<About Me />`}</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi excepturi accusantium doloremque ipsa atque iure iusto ullam culpa aliquid nobis animi porro cumque optio omnis dolorem quia, similique labore provident. Accusamus non perferendis voluptatem possimus ex accusantium aliquid consequuntur ullam?</p>
      </div>
      <MySkills />
    </div>
  )
}

export default AboutMe
