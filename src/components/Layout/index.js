import React from 'react'
import PropTypes from 'prop-types'

import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from 'components/Header'
import Transition from 'components/Transition'

import { css } from 'emotion'

const layoutBodyStyles = css`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1rem 1.5rem;
  padding-top: 0px;
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
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className={layoutBodyStyles}>
          <Transition location={location}>{children}</Transition>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
