import React from 'react'
import { string } from 'prop-types'

import MenuItem from 'components/MenuItem'
import MainLogo from 'components/MainLogo'

import { css } from 'emotion'

import { colors } from 'css/theme'

const outerWrapperStyles = css`
  overflow: visible;
`

const innerWrapperStyles = css`
  margin: 0px auto;
  max-width: 960px;
  padding: 1rem 0.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 5rem;
  overflow: visible;
`

const crossBarStyles = css`
  position: absolute;
  left: 0;
  width: 100%;
  border-width: 1px;
  border-style: solid;
  border-color: ${colors.white};
  z-index: -1;
`

const Header = ({ currentPath }) => (
  <div className={outerWrapperStyles}>
    <div className={innerWrapperStyles}>
      <div className={crossBarStyles} />
      <MenuItem path="/about" selected={currentPath === '/about'}>
        ABOUT
      </MenuItem>
      <MenuItem path="/info" selected={currentPath === '/info'}>
        INFO
      </MenuItem>
      <MainLogo selected={currentPath === '/'} />
      <MenuItem path="/projects" selected={currentPath === '/projects'}>
        PROJECTS
      </MenuItem>
      <MenuItem path="/contact" selected={currentPath === '/contact'}>
        CONTACT
      </MenuItem>
    </div>
  </div>
)

Header.propTypes = {
  currentPath: string.isRequired,
}

export default Header
