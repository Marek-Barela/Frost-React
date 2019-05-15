import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from "gatsby";
import styles from './index.module.css';

const ContainerTop = ({ data }) => {
  const { descriptionContainerTop, descriptionTopText, descriptionTopImage } = styles;
  const aboutImg = data.about.childImageSharp.fluid;
  return (
    <div className={descriptionContainerTop}>
      <div className={descriptionTopText}>
        <h4>OUR WORKING PLACE</h4>
        <p>
          "VESTIBULUM LIGUT PRAESENT COMMODO CURSUS MAGNA, CONSECTETUR ET. CUM SOCIS NATOQUE PENATIBUS ET MAGNIS DIS TELLUS PARTURIENT PHARETRA MONTES."
        </p>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nullam id dolor id nibh ultricies vehicula ut id elit.
        </p>
        <p>
          Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </p>
      </div>
      <div className={descriptionTopImage}>
        <Img fluid={aboutImg} />
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
    render={data => <ContainerTop data={data} {...props} />}
  />
)
