import styles from "./ContactMe.module.css";
import ContactForm from "./ContactForm";
import Link from "next/link";

const ContactMe = () => {
  return (
    <section id="contactMe" className={styles.contactContainer}>
      <div className={styles.contactIntro}>
        <p className={styles.eyebrow}>Contact</p>
        <h2 className={styles.contactHeader}>Let’s work together</h2>
        <p className={styles.contactText}>
          Have a project, opportunity, or question? Send me a message and I’ll
          get back to you soon.
        </p>
      </div>

      <div className={styles.contactFlex}>
        <ContactForm />

        <aside className={styles.contactCard}>
          <h3 className={styles.cardTitle}>Contact Info</h3>

          <ul className={styles.contactList}>
            <li className={styles.contactItem}>
              <a
                href="mailto:codiegroth@gmail.com?subject=Project%20Inquiry"
                className={styles.contactLink}
              >
                <span>Email</span>
                CodieGroth@gmail.com
              </a>
            </li>

            <li className={styles.contactItem}>
              <a href="tel:+15868643218" className={styles.contactLink}>
                <span>Phone</span>
                586.864.3218
              </a>
            </li>

            <li className={styles.contactItem}>
              <Link
                href="https://github.com/codiemaureen"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                <span>GitHub</span>
                View my code
              </Link>
            </li>

            <li className={styles.contactItem}>
              <Link
                href="https://www.linkedin.com/in/codiemaureen/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                <span>LinkedIn</span>
                Connect with me
              </Link>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
};

export default ContactMe;