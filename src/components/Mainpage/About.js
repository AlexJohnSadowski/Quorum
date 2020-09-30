import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      one: file(relativePath: { eq: "7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      two: file(relativePath: { eq: "4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="container-fluid">
      <div className="about-grid">
        <div className="text-about">
          <div className="title">THE URBAN PERSPECTIVE</div>
          <div className="text">
            <p>
              Urban fashion is style born of the street. A ruffian look that
              emerges from neighborhoods as opposed to fashion dictated by
              designers and Wall Street. Media and garment associations often
              merge hip hop and urban fashion partly because they share this
              same beginning.Fashion is usually conceived by designers. Styles
              then filter downward to the people through channels of marketing
              and distribution. Through a trickle down effect fashions takes
              hold. Urban wear originates on the street. First worn by people
              and then copied by designers who interpret looks redelivering them
              to the people through marketing and distribution points.
            </p>
            <div><b>READ MORE</b></div>
          </div>
        </div>
        <div className="image-about-one">
          <Img fluid={data.one.childImageSharp.fluid} />
        </div>
        <div className="image-about-two">
          <Img fluid={data.two.childImageSharp.fluid} />
        </div>
        <div className="black-box"></div>
        <div className="black-box overlay"></div>
        <div className="red-box overlay"></div>
      </div>
    </div>
  )
}

export default About
