import React from 'react'
import { bool, node, string } from 'prop-types'

import { Link } from 'gatsby'

import { css, cx } from 'emotion'

import { colors } from 'css/theme'

const shared = `
  padding: 0 0.5rem;
`

const selectedItemStyles = css`
  text-decoration: underline !important;
  font-weight: 500;
  ${shared};
`

const menuItemStyles = css`
  color: ${colors.white};
  width: 7rem;
  text-align: center;
  flex-shrink: 0;
  margin: 0 0.5rem;
  padding: 0;
  transition: padding 0.25s;

  &:hover {
    color: ${colors.white};
    text-decoration: none;
    ${shared};
  }
`

const innerItemStyles = css`
  text-decoration: none;
  border-left: 2px solid ${colors.white};
  border-right: 2px solid ${colors.white};
  background-color: ${colors.graphite};
  padding: 0.5rem 0;
`

const MenuItem = ({ children, path, selected }) => (
  <Link
    className={cx(menuItemStyles, { [selectedItemStyles]: selected })}
    to={path}
  >
    <div className={innerItemStyles}>{children}</div>
  </Link>
)

MenuItem.propTypes = {
  children: node.isRequired,
  path: string.isRequired,
  selected: bool,
}

export default MenuItem
