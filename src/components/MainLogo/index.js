import React from 'react'
import { bool } from 'prop-types'

import { Link, StaticQuery, graphql } from 'gatsby'

import Icon from './icon'

import { css, cx } from 'emotion'

import { colors } from 'css/theme'

const shared = `
  padding: 0.5rem;

  & > div {
    padding: 0;
  }
`

const selectedStyles = css`
  ${shared};
`

const mainLogoStyles = css`
  width: 6rem;
  height: 6rem;
  padding: 0;
  transition: padding 0.25s;

  &:hover {
    color: ${colors.white};
    text-decoration: none;
    ${shared};
  }
`

const innerStyles = css`
  padding: 0.5rem;
  border-radius: 100%;
  border: 2px solid ${colors.white};
  transition: padding 0.25s;
  position: relative;

  &::before {
    content: '';
    width: 100%;
    border: 1px solid ${colors.white};
    position: absolute;
    right: 100%;
    top: calc(50% - 1px);
  }

  &::after {
    content: '';
    width: 100%;
    border: 1px solid ${colors.white};
    position: absolute;
    left: 100%;
    top: calc(50% - 1px);
  }
`

const bottomLineStyles = css`
  height: 100%;
  border: 1px solid ${colors.white};
  position: absolute;
  top: 100%;
  left: calc(50% - 1px);
`

const MainLogo = ({ selected }) => (
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
      <Link
        className={cx(mainLogoStyles, { [selectedStyles]: selected })}
        to="/"
      >
        <div className={innerStyles}>
          <Icon height="1rem" />
          <div className={bottomLineStyles} />
        </div>
      </Link>
    )}
  />
)

MainLogo.propTypes = {
  selected: bool,
}

export default MainLogo
