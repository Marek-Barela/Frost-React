import React from 'react';
import SectionHeader from '../section-header';
import styles from './index.module.css';

const Projects = () => {
  const { wrapper } = styles;
  return (
    <section id="Portfolio">
      <div className={wrapper}>
        <SectionHeader 
          headerText="OUR AWESOME PROJECTS"
          paragraphText="GREAT DESIGN COMES WITH UNDERSTANDING CUSTOMER NEEDS"
        />
      </div>
    </section>
  )
}

export default Projects
