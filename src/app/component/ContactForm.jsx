"use client";

import styles from "./ContactForm.module.css";
import { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();

    setIsSubmitting(true);
    setStatus("");

    const form = event.target;
    const formData = new FormData(form);

    formData.append("access_key", "e2c5a454-b0d9-457d-a930-85329e26d7c9");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("Message sent successfully. Thanks for reaching out!");
        form.reset();
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("Unable to send message right now. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={onSubmit} id="contact">
        <div className={styles.formHeader}>
          <p className={styles.eyebrow}>Send a message</p>
          <h2 className={styles.formHeading}>Let’s Connect</h2>
          <p className={styles.formText}>
            Tell me a little about what you’re working on, and I’ll get back to
            you soon.
          </p>
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.label} htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your name"
            className={styles.formInput}
            required
          />
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@gmail.com"
            className={styles.formInput}
            required
          />
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.label} htmlFor="subject">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Project inquiry, opportunity, question..."
            className={styles.formInput}
            required
          />
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.label} htmlFor="message">
            Message
          </label>
          <textarea
            className={styles.textarea}
            name="message"
            id="message"
            rows={5}
            placeholder="Tell me how I can help..."
            required
          />
        </div>

        <button type="submit" className={styles.button} disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>

        {status && <p className={styles.statusMessage}>{status}</p>}
      </form>
    </div>
  );
};

export default ContactForm;