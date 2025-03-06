import styles from './ContactMe.module.css';
import ContactForm from './ContactForm';

const ContactMe = () => {
  return (
    <div className={styles.contactContainer}>
     <h2 className={styles.contactHeader}>{'<contact me />'}</h2>
     <div className={styles.contactFlex}>
     <ContactForm />

     <ol className={styles.contactList}>
      <li className={styles.contactItem}>
       CodieGroth@gmail.com
      </li>
      <li className={styles.contactItem}>
       586.864.3218
      </li>
      <li className={styles.contactItem}>
       GitHub
      </li>
      <li className={styles.contactItem}>
       LinkedIn
      </li>
      <li className={styles.contactItem}>
       Schedule a Coffee Chat!
      </li>
     </ol>
     </div>
    </div>
  )
}

export default ContactMe
