import React from 'react'
import { string } from 'prop-types'

import MenuItem from 'components/MenuItem'

import { css } from 'emotion'

const outerWrapperStyles = css`
  overflow: visible;
  width: 100%;
`

const innerWrapperStyles = css`
  margin: 0px auto;
  max-width: 960px;
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 5rem;
  overflow: visible;
  margin-bottom: 0.5rem;
`

const menuItems = [
  {
    path: '/about',
    name: 'ABOUT',
  },
  {
    path: '/projects',
    name: 'PROJECTS',
  },
  {
    path: '/',
  },
  {
    path: '/contributions',
    name: 'CONTRIBUTIONS',
  },
  {
    path: '/contact',
    name: 'CONTACT',
  },
]

const Header = ({ currentPath }) => (
  <div className={outerWrapperStyles}>
    <div className={innerWrapperStyles}>
      {menuItems.map(({ path, name }) => (
        <MenuItem key={path} path={path} selected={currentPath === path}>
          {name}
        </MenuItem>
      ))}
    </div>
  </div>
)

Header.propTypes = {
  currentPath: string.isRequired,
}

export default Header
