import React from 'react'
import { Link } from 'gatsby'

import MainLogo from 'components/MainLogo'

const Header = ({ siteTitle }) => (
  <div
    style={{
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      <Link
        to="/about"
        style={{
          color: 'rebeccapurple',
          textDecoration: 'none',
        }}
      >
        About
      </Link>
      <Link
        to="/"
        style={{
          color: 'rebeccapurple',
          width: '3rem',
          height: '3rem',
        }}
      >
        <MainLogo />
      </Link>
      <Link
        to="/info"
        style={{
          color: 'rebeccapurple',
          textDecoration: 'none',
        }}
      >
        Info
      </Link>
    </div>
  </div>
)

export default Header
