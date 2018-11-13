import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const MainLogo = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "main-logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 50) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={(data) => (
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
    )}
  />
)
export default MainLogo
