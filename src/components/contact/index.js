import React from 'react';
import SectionHeader from '../section-header';
import ContactAddress from '../contact-address';
import ContactForm from '../contact-form';
import styles from './index.module.css';

const Contact = () => {
  const { wrapper } = styles;
  return (
    <section id="Contact">
      <div className={wrapper}>
        <SectionHeader
          headerText="GET IN TOUCH"
          paragraphText="FEEL FREE TO DROP US A LINE TO CONTACT US"
        />
        <ContactAddress />
        <ContactForm />
      </div>
    </section>
  )
}

export default Contact
