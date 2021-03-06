import React from 'react'
import {
  TransitionGroup,
  Transition as ReactTransition,
} from 'react-transition-group'

import { css, cx } from 'emotion'

const timeout = 750
const getTransitionStyles = {
  entering: css`
    position: absolute;
    max-height: 0;
    overflow: hidden;
  `,
  entered: css`
    transition: ${timeout}ms ease-in-out;
    max-height: 100vh;
  `,
  exiting: css`
    transition: ${timeout}ms ease-in-out;
    max-height: 0;
    overflow: hidden;
  `,
}

const wrapperStyles = css`
  & > div {
    padding: 1.5rem 1rem;
  }
`

class Transition extends React.PureComponent {
  render() {
    const { children, location } = this.props

    return (
      <TransitionGroup>
        <ReactTransition
          key={location.pathname}
          timeout={{
            enter: timeout,
            exit: timeout,
          }}
        >
          {(status) => (
            <div className={cx(getTransitionStyles[status], wrapperStyles)}>
              <div>{children}</div>
            </div>
          )}
        </ReactTransition>
      </TransitionGroup>
    )
  }
}

export default Transition
