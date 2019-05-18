import React from 'react';
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";
import styles from './index.module.css';

const Logo = ({ data }) => {
  const { wrapper } = styles;
  const logo = data.logo.childImageSharp.fixed;
  return (
    <div className={wrapper}>
      <a href="/#Home">
        <Img fixed={logo} />
      </a>
    </div>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
        query {
          logo: file(relativePath: { eq: "logo.png" }) {
            childImageSharp {
              fixed(width: 64) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `}
    render={data => <Logo data={data} {...props} />}
  />
)