import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      one: file(relativePath: { eq: "3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      two: file(relativePath: { eq: "1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      three: file(relativePath: { eq: "7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="container">
    <div className="main-text">QUORUM FASHION</div>
      <div className="landing-page">
        <div className="main-photo"> 
        <Img fluid={data.two.childImageSharp.fluid} />
        </div>
        <div className="left-photo">
        <Img fluid={data.one.childImageSharp.fluid} />    
        </div>
        <div className="right-photo">
        <Img fluid={data.three.childImageSharp.fluid} />    
         </div>
        <div className="bottom-left-text">
            TAKE A DEEP DIVE
        </div>
      </div>
    </div>
  )
}

export default Banner
