import React from 'react'

import { css } from 'emotion'

const footerStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 5rem;
  padding: 0.5rem;
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
