import styles from './MyDetails.module.css'

const MyDetails = () => {
  return (
    <div className={styles.detailsContainer}>
      <ol className={styles.detailsList}>
        <li className={styles.detailItems}>Full Stack Software Engineer</li>
        <li className={styles.detailItems}>Metro Detroit</li>
        <li className={styles.detailItems}>    
          <a href="mailto:codiegroth?subject=Hello%20there&body=I%20wanted%20to%20reach%20out">
            CodieGroth@Gmail.com
          </a>
        </li>
        <li className={styles.detailItems}>
          <a href="https://github.com/codiemaureen" target='_blank'>
            Github
          </a>
        </li>
        <li className={styles.detailItems}>
          <a href="https://github.com/codiemaureen" target='_blank'>
            LinkedIn
          </a>
        </li>         
        <li className={styles.detailItems}>Schedule a Coffee Chat</li>
        <li className={styles.detailItems}>
          <a href="https://honzaap.github.io/GithubCity/?name=codiemaureen&year=2025" target='_blank'>
            Visit My Github City
          </a>
        </li>
      </ol>
    </div>
  )
}

export default MyDetails
