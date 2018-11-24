import React, { PureComponent } from 'react'

import { css, cx } from 'emotion'

import mq from 'css/mediaQueries'
import { colors } from 'css/theme'

const responsiveWarningStyles = css`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: ${colors.black};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;

  & span {
    font-weight: 700;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  ${mq.laptop},
  ${mq.desktop},
  ${mq.bigDesktop} {
    display: none;
  }
`

const hiddenWarningStyles = css`
  display: none;
`

export default class ResponsiveWarning extends PureComponent {
  state = {
    hidden: false,
  }

  handleClick = () => this.setState({ hidden: true })

  render() {
    const responsiveWarningFullStyles = cx(responsiveWarningStyles, {
      [hiddenWarningStyles]: this.state.hidden,
    })

    return (
      <div className={responsiveWarningFullStyles}>
        <h1>WARNING: This website is not optimised for responsive layouts.</h1>
        <p>
          It&#39;s in the backlog, but I haven&#39;t had time to address it yet.
        </p>
        <p>
          If you still want to see it as a Work in Progress, click{' '}
          <span onClick={this.handleClick}>here</span>.
        </p>
      </div>
    )
  }
}

// TODO: for some reason this doesn't work; find out why
// const ResponsiveWarning = () => {
//   const [warning, setWarning] = useState(false)
//   const handleClick = () => {
//     setWarning(true)
//   }
//
//   const responsiveWarningFullStyles = cx(responsiveWarningStyles, {
//     [hiddenWarningStyles]: warning,
//   })
//
//   return (
//     <div className={responsiveWarningFullStyles}>
//       <h1>
//         WARNING: This website is not optimised for responsive
//         layouts.
//       </h1>
//       <p>
//         It&#39;s in the backlog, but I haven&#39;t had time to address
//         it yet.
//       </p>
//       <p>
//         If you still want to see it as a Work in Progress, click{' '}
//         <button onClick={handleClick}>Here.</button>
//       </p>
//       <p>state is { `${warning}` }</p>
//     </div>
//   )
// }
//
// export default ResponsiveWarning
