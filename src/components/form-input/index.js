import React from 'react';
import styles from './index.module.css';

const FormInput = ({ errorMessage, ...props }) => {
  const { span } = styles;
  return (
    <>
      <input {...props} />
      {errorMessage && <span className={span}>{errorMessage}</span>}
    </>
  )
}

export default FormInput
