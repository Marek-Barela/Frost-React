import React from 'react';
import AccordionPanel from '../about-accordion-panel';
import styles from './index.module.css';

const AccordionContainer = () => {
  const { descriptionContainer, header } = styles;
  return (
    <div className={descriptionContainer}>
      <h4 className={header}>WHY CHOOSE US?</h4>
      <AccordionPanel
        name="100% Responsive"
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus reprehenderit asperiores magni eligendi quasi quas ad sapiente, excepturi accusamus? Ullam voluptate beatae sunt nihil pariatur ipsam commodi suscipit dolor facilis."
      />
      <AccordionPanel
        name="Clean & Professional Design "
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, nostrum. Perspiciatis ab id obcaecati, quas, quo corrupti impedit, quis ipsum explicabo deleniti tempore suscipit. Alias quod natus sed est ipsam reprehenderit laudantium, id mollitia fuga, enim sint magni hic deserunt!"
      />
      <AccordionPanel
        name=" Collapsible Group Item #3 "
        text="Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
      />
    </div>
  )
}

export default AccordionContainer
