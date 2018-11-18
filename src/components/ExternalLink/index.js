import React from 'react'
import { node, string } from 'prop-types'

const ExternalLink = ({ children, href }) => (
  <a href={href} rel="noopener noreferrer" target="_blank">
    {children}
  </a>
)

ExternalLink.propTypes = {
  children: node.isRequired,
  href: string.isRequired,
}

export default ExternalLink
