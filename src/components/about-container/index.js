import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from "gatsby";
import styles from './index.module.css';

const AboutContainer = ({ data }) => {
  const { wrapper,
    descriptionContainerTop,
    descriptionContainerBottom,
    descriptionTopText,
    descriptionTopImage
  } = styles;
  const aboutImg = data.about.childImageSharp.fluid;
  return (
    <div className={wrapper}>
      <div className={descriptionContainerTop}>
        <div className={descriptionTopText}>
          <h4>OUR WORKING PLACE</h4>
          <p>
            "VESTIBULUM LIGUT PRAESENT COMMODO CURSUS MAGNA, CONSECTETUR ET. CUM SOCIS NATOQUE PENATIBUS ET MAGNIS DIS TELLUS PARTURIENT PHARETRA MONTES."
          </p>
        </div>
        <div className={descriptionTopImage}>
          <Img fluid={aboutImg} />
        </div>
      </div>
      <div className={descriptionContainerBottom}>

      </div>
    </div>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        about: file(relativePath: { eq: "about.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <AboutContainer data={data} {...props} />}
  />
)
