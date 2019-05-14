import React from 'react';
import PropTypes from 'prop-types';

const ListItem = props => {
  const { to, text } = props;
  return (
    <li>
      <a href={to}>
        {text}
      </a>
    </li>
  )
}

ListItem.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default ListItem;
