import React from 'react'
import { bool, node, string } from 'prop-types'

import { Link } from 'gatsby'

import MainLogo from 'components/MainLogo'

import { css, cx } from 'emotion'

import { colors } from 'css/theme'

const sharedHoverSelected = `
  padding: 0 0.5rem;
`

const sharedPseudoElements = `
  content: '';
  width: 100%;
  border: 1px solid ${colors.white};
  position: absolute;
  top: calc(50% - 1px);
`

const wrapperStyles = css`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  font-size: 0.85rem;
`

const selectedItemStyles = css`
  text-decoration: underline !important;
  ${sharedHoverSelected};
`

const menuItemStyles = css`
  color: ${colors.white};
  width: 8rem;
  text-align: center;
  flex-shrink: 0;
  margin: 0 0.5rem;
  padding: 0;
  transition: padding 0.25s;

  &:hover {
    color: ${colors.white};
    ${sharedHoverSelected};
  }
`

const innerItemStyles = css`
  text-decoration: none;
  border-left: 2px solid ${colors.white};
  border-right: 2px solid ${colors.white};
  padding: 0.5rem 0;
  position: relative;

  &::before {
    ${sharedPseudoElements} right: 100%;
  }

  &::after {
    ${sharedPseudoElements} left: 100%;
  }
`

const MenuItem = ({ children, path, selected }) => (
  <div className={wrapperStyles}>
    {path === '/' ? (
      <MainLogo selected={selected} />
    ) : (
      <Link
        className={cx(menuItemStyles, { [selectedItemStyles]: selected })}
        to={path}
      >
        <div className={innerItemStyles}>{children}</div>
      </Link>
    )}
  </div>
)

MenuItem.propTypes = {
  children: node,
  path: string.isRequired,
  selected: bool,
}

export default MenuItem
