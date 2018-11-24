import React from 'react'

import { graphql } from 'gatsby'

import ExternalLink from 'components/ExternalLink'

import { css } from 'emotion'

const reposContainerStyles = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0.25rem;
`

const repoDetailsStyles = css`
  & > p {
    font-size: 0.75rem;
  }
`

export default ({ data }) => {
  const { nodes } = data.github.viewer.repositories

  return (
    <>
      <p>
        When I&#39;m not busy working on ClearView Flex, I let my imagination go
        wild to create awesome projects and try out new technologies.
        <br />
        Below is a list of my latest public GitHub repos.
      </p>
      <div className={reposContainerStyles}>
        {nodes.map(({ description, id, name, url }) => (
          <div className={repoDetailsStyles} key={id}>
            <ExternalLink href={url}>{name}</ExternalLink>
            {description && <p>{description}</p>}
          </div>
        ))}
      </div>
    </>
  )
}

export const query = graphql`
  query GitHubRepos {
    github {
      viewer {
        repositories(
          first: 9
          orderBy: { field: UPDATED_AT, direction: DESC }
        ) {
          nodes {
            description
            id
            name
            url
          }
        }
      }
    }
  }
`
