import React from 'react'

import { graphql } from 'gatsby'

import ExternalLink from 'components/ExternalLink'

import { css } from 'emotion'

const postWrapperStyles = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.25rem;
  align-items: center;
  margin: 1.5rem 0;

  & h2 {
    font-size: 1.5rem;
    margin: 0 auto;
  }

  & p {
    font-size: 0.75rem;
    margin: 0 auto;
  }
`

export default ({ data }) => {
  const { edges } = data.allMediumPost

  return (
    <>
      <p>
        I owe a huge debt to all the kind strangers that took it upon themselves
        to share their knowledge with the world.
        <br />
        This is my attempt at giving back to the community. You can find all my
        publications on{' '}
        <ExternalLink href="https://medium.com/@simoneferrero">
          Medium
        </ExternalLink>
        .
      </p>
      <div>
        {edges.map(({ node }) => {
          const { medium_id, title, previewContent } = node
          return (
            <div className={postWrapperStyles} key={medium_id}>
              <ExternalLink href={`https://medium.com/p/${medium_id}`}>
                <h2>{title}</h2>
              </ExternalLink>
              <p>{previewContent.subtitle}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export const query = graphql`
  query MediumPosts {
    allMediumPost(sort: { fields: [updatedAt], order: DESC }) {
      edges {
        node {
          medium_id
          title
          previewContent {
            subtitle
          }
        }
      }
    }
  }
`
