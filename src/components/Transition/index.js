import React from 'react'
import {
  TransitionGroup,
  Transition as ReactTransition,
} from 'react-transition-group'

import { css } from 'emotion'

const timeout = 250
const getTransitionStyles = {
  entering: css`
    position: absolute;
    opacity: 0;
  `,
  entered: css`
    transition: opacity ${timeout}ms ease-in-out;
    opacity: 1;
  `,
  exiting: css`
    transition: opacity ${timeout}ms ease-in-out;
    opacity: 0;
  `,
}

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
            <div className={getTransitionStyles[status]}>{children}</div>
          )}
        </ReactTransition>
      </TransitionGroup>
    )
  }
}

export default Transition
