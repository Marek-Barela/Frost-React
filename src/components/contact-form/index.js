import React from 'react';
import FormInput from '../form-input';
import FormTextarea from '../form-textarea';
import styles from './index.module.css';
import { Form, Field } from 'react-final-form';

const renderInput = ({ input, meta, placeholder }) => {
  return (
    <FormInput
      {...input}
      type="text"
      placeholder={placeholder}
      errorMessage={meta.touched && meta.error}
    />
  )
}

const renderTextarea = ({ input, meta, placeholder }) => {
  return (
    <FormTextarea
      {...input}
      type="text"
      placeholder={placeholder}
      errorMessage={meta.touched && meta.error}
    />
  )
}

const isEmpty = text => {
  if (!text || text === "") {
    return "This field is required"
  }
  return undefined
}

const validEmail = text => {
  const re = /\S+@\S+\.\S+/;
  if (!re.test(text)) {
    return "Please enter valid email"
  }
  return undefined
}

const composeValidators = (...validators) => (value) => {
  return validators.reduce((acc, validator) => acc || validator(value), undefined)
}

const onSubmit = values => {
  alert("your message have been sent");
  console.log(values);
  /**
   * Server logic here
   */
}

const ContactForm = () => {
  const { form, inputContainer, nameInput, emailInput, textarea, button } = styles;
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, invalid }) => (
        <form onSubmit={handleSubmit} className={form} noValidate>
          <div className={inputContainer}>
            <div className={nameInput}>
              <Field
                name="userName"
                placeholder="Name"
                validate={isEmpty}
                component={renderInput}
              />
            </div>
            <div className={emailInput}>
              <Field
                name="userEmail"
                placeholder="Email"
                validate={composeValidators(isEmpty, validEmail)}
                component={renderInput}
              />
            </div>
          </div>
          <div className={textarea}>
            <Field
              name="userMessage"
              placeholder="Your Message"
              validate={isEmpty}
              component={renderTextarea}
            />
          </div>
          <button type="submit" className={button} disabled={invalid}>Send Message</button>
        </form>
      )} />
  )
}

export default ContactForm
