  'use client'; 
import styles from './MyDetails.module.css';
import { PopupButton } from 'react-calendly';
import { useState, useEffect } from 'react';

const MyDetails = () => {
  const [rootElement, setRootElement] = useState(null);

  useEffect(() => {
    setRootElement(document.getElementById("__next"));
  }, []);

  return (
    <div className={styles.detailsContainer}>
      <ol className={styles.detailsList}>
        <li className={styles.detailItems}>
          Full Stack Software Engineer
        </li>
        <li className={styles.detailItems}>
          Metro Detroit
        </li>
        <li className={`${styles.detailItems} ${styles.detailLink}`}>    
          <a href="mailto:codiegroth?subject=Hello%20there&body=I%20wanted%20to%20reach%20out"
          className={`${styles.detailItems} ${styles.detailLink}`}>
            CodieGroth@Gmail.com
          </a>
        </li>
        <li className={`${styles.detailItems} ${styles.detailLink}`}>
          <a  href="https://github.com/codiemaureen" target='_blank'
          className={`${styles.detailItems} ${styles.detailLink}`}>
            Github
          </a>
        </li>
        <li className={`${styles.detailItems} ${styles.detailLink}`}>
          <a className={`${styles.detailItems} ${styles.detailLink}`} href="https://github.com/codiemaureen" target='_blank'>
            LinkedIn
          </a>
        </li>         
        <li className={`${styles.detailItems} ${styles.detailLink}`}>
          <PopupButton
            url="https://calendly.com/codiegroth/30min"
            rootElement={rootElement}
            text="Schedule a Meeting"
            className={`${styles.modal} ${styles.detailLink}`}
          />
        </li>
        <li className={`${styles.detailItems} ${styles.detailLink}`}>
          <PopupButton
            url="https://honzaap.github.io/GithubCity/?name=codiemaureen&year=2025" 
            rootElement={rootElement}
            text="Visit My Github City"
            className={`${styles.modal} ${styles.detailLink}`}
          />
        </li>
      </ol>
    </div>
  )
}

export default MyDetails
