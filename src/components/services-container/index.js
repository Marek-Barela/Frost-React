import React from 'react';
import ServicesItem from '../services-item';
import styles from './index.module.css';
import { faImage, faWindowRestore, faShoppingCart, faHeadphones } from '@fortawesome/free-solid-svg-icons';

const ServicesContainer = () => {
  const { wrapper } = styles;
  return (
    <div className={wrapper}>
      <ServicesItem
        icon={faImage}
        headerText="Photography"
        paragraphText="Vivamus sagittis lacuson augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum."
      />
      <ServicesItem
        icon={faWindowRestore}
        headerText="WEB DESIGN"
        paragraphText="Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient monte nascetur."
      />
      <ServicesItem
        icon={faShoppingCart}
        headerText="E-COMMERCE"
        paragraphText="Curabitur blandit matti tempus porttitor. Donec id elit non mi porta ut gravida at eget metus. Consectetur adipiscing elit."
      />
      <ServicesItem
        icon={faHeadphones}
        headerText="SOUND DESIGN"
        paragraphText="Aenean lacinia bibendum consectetur. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio"
      />
    </div>
  )
}



export default ServicesContainer;
