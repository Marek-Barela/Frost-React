import React from 'react';
import Img from "gatsby-image";
import styles from './index.module.css';

const ProjectItem = ({ image }) => {
  const { wrapper } = styles;
  return (
    <div className={wrapper}>
      <Img fluid={image} />
    </div>
  )
}

export default ProjectItem
