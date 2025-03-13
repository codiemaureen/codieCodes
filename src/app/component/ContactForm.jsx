'use client';
import styles from './ContactForm.module.css';
import React, { useState } from 'react';

const ContactForm = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(event.target);

    formData.append("access_key", "e2c5a454-b0d9-457d-a930-85329e26d7c9");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => 
      {res.json()
      form.reset();
      });

  };

  return (
    <div className={styles.formContainer}>
     <form action="" method="get" className={styles.form} onSubmit={onSubmit}>
       <h2 className={styles.formHeading}>Let's Connect!</h2>
       <div className={styles.emailInput}>
         <label className={styles.label}  htmlFor="email">Enter Your Email: </label>
         <input type="email" 
         name="email" 
         id="email" placeholder='Enter your subject here...' 
         className={styles.formInput}
         required />
       </div>
       <div className={styles.emailInput}>
         <label 
         className={styles.label} 
         htmlFor="email">Enter Your Email Subject: </label>
         <input 
          type="text" 
          name="email" 
          id="email" 
          className={styles.formInput}
          autoComplete="off"
          placeholder='example@gmail.com' required />
       </div>
       <div >
       <div className={styles.textbody}>
         <label className={styles.label} htmlFor="message">Enter Your Message:</label>
         <textarea 
         className={styles.textarea}
         name="emailBody" 
         rows={4} id="emailBody" 
         placeholder='Enter your message here...'/>
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
