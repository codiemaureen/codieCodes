'use client'; 
import styles from './MyDetails.module.css';
import { PopupButton } from 'react-calendly';
import { useState, useEffect } from 'react';

const MyDetails = () => {
  const [rootElement, setRootElement] = useState(null);

  useEffect(() => {
    // Set the root element after the component mounts
    setRootElement(document.getElementById("__next"));
  }, []);

  if (!rootElement) {
    return null; // Don't render until the root element is set
  }

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
        <li className={styles.detailItems}>
          <PopupButton
            url="https://calendly.com/codiegroth/30min"
            rootElement={rootElement}
            text="Schedule a Meeting"
            className={styles.modal}
          />
        </li>
        <li className={styles.detailItems}>
          <PopupButton
            url="https://honzaap.github.io/GithubCity/?name=codiemaureen&year=2025" 
            rootElement={rootElement}
            text="Visit My Github City"
            className={styles.modal}
          />
          {/* <a href="https://honzaap.github.io/GithubCity/?name=codiemaureen&year=2025" target='_blank'>
            Visit My Github City
          </a> */}
        </li>
      </ol>
    </div>
  )
}

export default MyDetails
