import React from 'react'

import MenuItem from 'components/MenuItem'
import MainLogo from 'components/MainLogo'

import { css } from 'emotion'

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

const mainLogoStyles = css`
  width: 6rem;
  height: 6rem;
  padding: 0.5rem;
  border-radius: 100%;
`

const crossBarStyles = css`
  position: absolute;
  left: 0;
  width: 100%;
  border-width: 1px;
  border-style: solid;
  border-color: rebeccapurple;
  z-index: -1;
`

const Header = ({ siteTitle }) => (
  <div className={outerWrapperStyles}>
    <div className={innerWrapperStyles}>
      <div className={crossBarStyles} />
      <MenuItem path="/about">ABOUT</MenuItem>
      <MenuItem path="/info">INFO</MenuItem>
      <MenuItem className={mainLogoStyles} path="/">
        <MainLogo />
      </MenuItem>
      <MenuItem path="/projects">PROJECTS</MenuItem>
      <MenuItem path="/contact">CONTACT</MenuItem>
    </div>
  </div>
)

export default Header
