// TODO: refactor structure of code and components
import React from 'react'
import { node, shape, string } from 'prop-types'

import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from 'components/Header'
import Footer from 'components/Footer'
import Transition from 'components/Transition'

import { css } from 'emotion'

import { colors } from 'css/theme'

const wrapperStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 100%;
  min-height: 100vh;

  & h1,
  & h2,
  & h3 {
    color: ${colors.white};
  }

  & a {
    color: ${colors.white};
    font-weight: 700;
    text-decoration: none;

    & :hover {
      color: ${colors.white};
    }
  }
`

const sectionWrapperStyles = css`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  align-items: flex-end;

  & > div {
    margin: 0 auto;
    width: 960px;
    position: relative;

    &::before {
      content: '';
      height: 50vh;
      border: 1px solid ${colors.white};
      position: absolute;
      left: calc(50% - 1px);
      z-index: -1;
      bottom: 100%;
    }
  }
`

const contentStyles = css`
  border-top: 2px solid ${colors.white};
  border-bottom: 2px solid ${colors.white};
`

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <div className={wrapperStyles}>
          <Header currentPath={location.pathname} />
          <div className={sectionWrapperStyles}>
            <div className={contentStyles}>
              <Transition location={location}>{children}</Transition>
            </div>
          </div>
          <div className={sectionWrapperStyles}>
            <div>
              <Footer />
            </div>
          </div>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: node.isRequired,
  location: shape({
    pathname: string.isRequired,
  }).isRequired,
}

export default Layout
