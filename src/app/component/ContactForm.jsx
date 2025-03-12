import styles from './ContactForm.module.css';

const ContactForm = () => {
  return (
    <div className={styles.formContainer}>
     <form action="" method="get" className={styles.form}>
       <h2 className={styles.formHeading}>Let's Get in Touch!</h2>
       <div className={styles.emailInput}>
         <label className={styles.label}  htmlFor="email">Enter Your Email: </label>
         <input type="email" name="email" id="email" placeholder="example@gmail.com" className={styles.formInput}
         required />
       </div>
       <div className={styles.emailInput}>
         <label className={styles.label} htmlFor="email">Enter Your Email Subject: </label>
         <input 
          type="email" 
          name="email" 
          id="email" 
          className={styles.formInput}
          placeholder="Enter your subject here..." required />
       </div>
       <div >
       <div className={styles.textbody}>
         <label className={styles.label} htmlFor="message">Enter Your Message:</label>
         <textarea className={styles.textarea}name="emailBody" id="emailBody" placeholder='Enter your message here...'/>
       </div>
       </div>
       <div >
         <input type="submit" value="Send" className={`${styles.formInput} ${styles.button}`}/>
       </div>
     </form>
    </div>
  )
}

export default ContactForm
