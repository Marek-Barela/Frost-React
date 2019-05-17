import React from 'react';
import styles from './index.module.css';

const ContactForm = () => {
  const { form, inputContainer, nameInput, emailInput, button } = styles;
  return (
    <form className={form} noValidate>
      <div className={inputContainer}>
        <div className={nameInput}>
          <input type="text" placeholder="Name" />
        </div>
        <div className={emailInput}>
          <input type="text" placeholder="Email" />
        </div>
      </div>
      <textarea name="" id="" placeholder="Your Message" />
      <button type="submit" className={button}>Send Message</button>
    </form>
  )
}

export default ContactForm
