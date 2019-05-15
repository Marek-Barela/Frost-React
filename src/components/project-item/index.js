import React, { Component } from 'react';
import Img from "gatsby-image";
import Favicon from '../favicon';
import PropTypes from 'prop-types';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './index.module.css';

class ProjectItem extends Component {
  state = {
    displayLightbox: false
  }

  displayLightbox = () => {
    this.setState({
      displayLightbox: true
    })
  }

  closeLightbox = () => {
    this.setState({
      displayLightbox: false
    })
  }

  render() {
    const { wrapper, imageWrapper, layer } = styles;
    const { image, projectName } = this.props;
    const { displayLightbox } = this.state;
    return (
      <>
        <div className={wrapper} >
          <div className={imageWrapper} onClick={this.displayLightbox}>
            <div className={layer}>
              <span>{projectName}</span>
            </div>
            <Img fluid={image} />
          </div>
        </div>
        {displayLightbox && <Lightbox image={image} onClose={this.closeLightbox} />}
      </>
    )
  }
}

const Lightbox = (props) => {
  const { lightbox, imageContainer, faIcon } = styles;
  const { image, onClose } = props;
  return (
    <div className={lightbox}>
      <div className={imageContainer}>
        <Favicon
          icon={faTimesCircle}
          className={faIcon}
          onClick={onClose}
        />
        <Img fluid={image} />
      </div>
    </div>
  )
}

ProjectItem.propTypes = {
  image: PropTypes.object.isRequired,
  projectName: PropTypes.string.isRequired
}

Lightbox.propTypes = {
  image: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired
}

export default ProjectItem
