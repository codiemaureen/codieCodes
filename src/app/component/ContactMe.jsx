'use client';
import styles from './ContactMe.module.css';
import ContactForm from './ContactForm';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { PopupButton } from 'react-calendly';

const ContactMe = () => {
  const [rootElement, setRootElement] = useState(null);

  useEffect(() => {
    // Set the root element after the component mounts
    setRootElement(document.getElementById("__next"));
  }, []);

  return (
    <div id='contactMe' className={styles.contactContainer}>
      <h2>{'contact me'}</h2>
      <div className={styles.contactFlex}>
        <ContactForm />
        <ol className={styles.contactList}>
            <li className={styles.contactItem}>    
              <a href="mailto:codiegroth?subject=Hello%20there&body=I%20wanted%20to%20reach%20out" className={styles.contactLink}>
                CodieGroth@Gmail.com
              </a>
            </li>
            <li className={styles.contactItem}>
              <Link href="tel:+15868643218" className={styles.contactLink}>
                586.864.3218
              </Link>
            </li>
            <li className={styles.contactItem}>
              <Link href="https://github.com/codiemaureen" target='_blank' className={styles.contactLink}>
                Github
              </Link>
            </li>
            <li className={styles.contactItem}>
              <Link href="https://www.linkedin.com/in/codiemaureen/" target='_blank' className={styles.contactLink}>LinkedIn
              </Link>
            </li>
            <li >
              <PopupButton
                url="https://honzaap.github.io/GithubCity/?name=codiemaureen&year=2025" 
                rootElement={rootElement}
                text="Visit My Github City"
                className={styles.button}
              />
            </li>            
        </ol>
      </div>
    </div>
  )
}

export default ContactMe
