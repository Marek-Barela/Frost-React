import React from "react"
import { Link } from "react-scroll"
import PropTypes from "prop-types"

const ListItem = props => {
  const { to, text } = props
  return (
    <li>
      <Link
        to={to}
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        {text}
      </Link>
    </li>
  )
}

ListItem.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default ListItem
