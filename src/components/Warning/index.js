import React from 'react'
import PropTypes from 'prop-types'

import { css } from 'emotion'

import { colors } from 'css/theme'
import mq from 'css/mediaQueries'

const warningStyles = css`
  display: none;
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: ${colors.graphite};
  top: 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media ${mq.phone}, ${mq.tablet} {
    display: flex;
  }
`

const buttonStyles = css`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  font-weight: 700;
`

const Warning = ({ setWarning }) => (
  <div className={warningStyles}>
    <p>
      The portfolio is not currently optimised to display on lower resolution
      screens.
    </p>
    <p>
      Click{' '}
      <button onClick={() => setWarning(false)} className={buttonStyles}>
        HERE
      </button>{' '}
      to show it anyways.
    </p>
  </div>
)

Warning.propTypes = {
  setWarning: PropTypes.func.isRequired,
}

export default Warning
