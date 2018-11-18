import React from 'react'

import { css } from 'emotion'

import { colors } from 'css/theme'

const footerStyles = css`
  margin: 0px auto;
  max-width: 960px;
  padding: 1rem 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 5rem;
  overflow: visible;
  background-color: ${colors.graphite};

  & > p {
    height: fit-content;
    margin: 0 auto;
  }
`

const Footer = () => (
  <div className={footerStyles}>
    <p>Design by Simone Ferrero</p>
  </div>
)

export default Footer
