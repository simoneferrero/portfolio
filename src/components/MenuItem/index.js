import React from 'react'
import { node, string } from 'prop-types'

import { Link } from 'gatsby'

import { css, cx } from 'emotion'

const menuItemStyles = css`
  color: rebeccapurple;
  text-decoration: none;
  border-width: 2px;
  border-style: solid;
  border-color: rebeccapurple;
  border-radius: 15px;
  background-color: white;
  width: 6rem;
  padding: 0.5rem;
  text-align: center;
  flex-shrink: 0;
  margin: 0 0.25rem;

  &:hover {
    color: rebeccapurple;
    text-decoration: none;
  }
`

const MenuItem = ({ className, children, path }) => (
  <Link className={cx(menuItemStyles, { [className]: className })} to={path}>
    {children}
  </Link>
)

MenuItem.propTypes = {
  className: string,
  children: node.isRequired,
  path: string.isRequired,
}

export default MenuItem
