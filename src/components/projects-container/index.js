import React from 'react';
import ProjectItem from '../project-item';
import { StaticQuery, graphql } from "gatsby";
import styles from './index.module.css';

const ProjectContainer = ({ data }) => {
  const { wrapper } = styles;
  const imgOne = data.imgOne.childImageSharp.fluid;
  const imgTwo = data.imgTwo.childImageSharp.fluid;
  const imgThree = data.imgThree.childImageSharp.fluid;
  const imgFour = data.imgFour.childImageSharp.fluid;
  const imgFive = data.imgFive.childImageSharp.fluid;
  const imgSix = data.imgSix.childImageSharp.fluid;
  const imgSeven = data.imgSeven.childImageSharp.fluid;
  const imgEight = data.imgEight.childImageSharp.fluid;
  const imgNine = data.imgNine.childImageSharp.fluid;
  return (
    <div className={wrapper}>
      <ProjectItem
        image={imgOne}
        projectName="Project 1"
      />
      <ProjectItem
        image={imgTwo}
        projectName="Project 2"
      />
      <ProjectItem
        image={imgThree}
        projectName="Project 3"
      />
      <ProjectItem
        image={imgFour}
        projectName="Project 4"
      />
      <ProjectItem
        image={imgFive}
        projectName="Project 5"
      />
      <ProjectItem
        image={imgSix}
        projectName="Project 6"
      />
      <ProjectItem
        image={imgSeven}
        projectName="Project 7"
      />
      <ProjectItem
        image={imgEight}
        projectName="Project 8"
      />
      <ProjectItem
        image={imgNine}
        projectName="Project 9"
      />
    </div>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
        query {
          imgOne: file(relativePath: { eq: "p1.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          },
          imgTwo: file(relativePath: { eq: "p2.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          },
          imgThree: file(relativePath: { eq: "p3.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          },
          imgFour: file(relativePath: { eq: "p4.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          },
          imgFive: file(relativePath: { eq: "p5.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          },
          imgSix: file(relativePath: { eq: "p6.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          },
          imgSeven: file(relativePath: { eq: "p7.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          },
          imgEight: file(relativePath: { eq: "p8.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          },
          imgNine: file(relativePath: { eq: "p9.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
    render={data => <ProjectContainer data={data} {...props} />}
  />
)
