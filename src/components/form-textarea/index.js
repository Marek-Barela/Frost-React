import React from 'react';
import styles from './index.module.css';

const FormTextarea = ({ errorMessage, ...props }) => {
  const { span } = styles;
  return (
    <>
      <textarea {...props} />
      {errorMessage && <span className={span}>{errorMessage}</span>}
    </>
  )
}

export default FormTextarea
