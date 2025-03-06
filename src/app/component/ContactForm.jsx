import styles from './ContactForm.module.css';

const ContactForm = () => {
  return (
    <div>
     <form action="" method="get" className={styles.form}>
       <h2 className={styles.formHeading}>Send me an Email!</h2>
       <div className={styles.formExample}>
         <label htmlFor="name">Enter your name: </label>
         <input type="text" name="name" id="name" required />
       </div>
       <div className={styles.formExample}>
         <label htmlFor="email">Enter your email: </label>
         <input type="email" name="email" id="email" required />
       </div>
       <div className={styles.formExample}>
         <label htmlFor="email"> </label>
       </div>
       <div className={styles.formExample}>
         <textarea name="emailBody" id="emailBody" rows="15" cols="50" value='Email body...'/>
       </div>
       <div className={styles.formExample}>
         <input type="submit" value="Contact Me" className={styles.formInput}/>
       </div>
     </form>
    </div>
  )
}

export default ContactForm
