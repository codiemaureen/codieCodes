import styles from './ContactMe.module.css';
import ContactForm from './ContactForm';

const ContactMe = () => {
  return (
    <div className={styles.contactContainer}>
     <h2 className={styles.contactHeader}>{'<contact me />'}</h2>
     <ContactForm />
     <ol className="contactList">
      <li className="contactitems">
       CodieGroth@gmail.com
      </li>
      <li className="contactitems">
       586.864.3218
      </li>
      <li className="contactitems">
       GitHub
      </li>
      <li className="contactitems">
       LinkedIn
      </li>
      <li className="contactitems">
       Schedule a Coffee Chat!
      </li>
     </ol>
    </div>
  )
}

export default ContactMe
