import React from 'react';
import Favicon from '../favicon';
import styles from './index.module.css';
import PropTypes from 'prop-types';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Address = () => {
  const { wrapper, addressWrapper } = styles;
  return (
    <div className={wrapper}>
      <p>
        Cras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta sem malesuada magna mollis euismod. Nulla vitae elit libero, a pharetra augue. Aenean eu leo quam. Pellentesque ornare sem lacinia.
      </p>
      <div className={addressWrapper}>
        <AddressItem
          icon={faMapMarkerAlt}
          text="Moonshine St. 14/05 Light City"
        />
        <AddressItem
          icon={faPhone}
          text="+00 (123) 456 78 90"
        />
        <AddressItem
          icon={faEnvelope}
          text="first.last@email.com"
        />
      </div>
    </div>
  )
}

const AddressItem = ({ icon, text }) => {
  const { address } = styles;
  return (
    <div className={address}>
      <Favicon icon={icon} />
      <span>{text}</span>
    </div>
  )
}

AddressItem.propTypes = {
  icon: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired
}

export default Address
