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
`

const layoutBodyStyles = css`
  margin: 0 auto;
  width: 960px;
  border-top: 2px solid ${colors.white};
  border-bottom: 2px solid ${colors.white};
  position: relative;

  &::before {
    content: '';
    height: 50vh;
    border: 1px solid #fff;
    position: absolute;
    bottom: 100%;
    left: calc(50% - 1px);
    z-index: -1;
  }

  &::after {
    content: '';
    height: 50vh;
    border: 1px solid #fff;
    position: absolute;
    top: 100%;
    left: calc(50% - 1px);
    z-index: -1;
  }
`

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
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
          <div className={layoutBodyStyles}>
            <Transition location={location}>{children}</Transition>
          </div>
          <Footer />
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
