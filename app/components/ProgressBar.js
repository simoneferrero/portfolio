import React from 'react';
import Radium from 'radium';

class ProgressBar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      width: 0,
      showPercent: false,
      size: this.resizePortrait(),
      timeout: '',
    };

    this.showProgress = this.showProgress.bind(this);
  }

  componentDidMount() {
    const { autoStart } = this.props;
    if (autoStart >= 0) {
      this.setState({
        timeout: setTimeout(() => this.showProgress(), autoStart),
      });

    }

    const mq = window.matchMedia("only screen and (orientation: portrait)");
    window.addEventListener("resize", () => this.setState({
      size: this.resizePortrait(),
    }));
  }

  componentWillUnmount() {
    clearTimeout(this.state.timeout);
  }

  showProgress() {
    const width = this.state.width === this.props.width ? 0 : this.props.width;
    this.setState({
      width,
      showPercent: !this.state.showPercent,
    });
  }

  resizePortrait() {
    const { size } = this.props;
    const mq = window.matchMedia("only screen and (orientation: portrait)");

    return mq.matches ? size * 0.75 : size;
  }

  getStyles() {
    const { colors, ratio, width, duration } = this.props;
    const { baseColor, barColor } = colors;
    const { size, showPercent } = this.state;

    const baseStyle = {
      position: "absolute",
      height: `${size * 0.5}vh`,
      fontSize: `${size * (ratio < 10 ? 0.24 : 0.25)}vh`,
      userSelect: "none",
      cursor: "pointer",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      borderRadius: `${size * 0.5}vh`,
    };
    const wrapper = {
      position: "relative",
      margin: `${size * 0.1}vh`,
      height: `${size * 0.5}vh`,
      width: `${size * 5}vw`,
    };
    const background = {
      ...baseStyle,
      width: "100%",
      backgroundColor: baseColor,
      color: barColor,
    };
    const bar = {
      ...baseStyle,
      width: `${this.state.width * size * 5 / ratio}vw`,
      backgroundColor: barColor,
      color: baseColor,
      transition: `${duration * (width / ratio)}s linear`,
      top: "0",
    };
    const percentage = {
      ...baseStyle,
      width: `${size * 0.35}vh`,
      height: `${size * 0.35}vh`,
      justifyContent: "center",
      margin: `${size * 0.075}vh`,
      fontSize: `${size * (ratio < 10 ? 0.18 : 0.14)}vh`,
      backgroundColor: width !== ratio ? barColor : baseColor,
      color: width !== ratio ? baseColor : barColor,
      right: "0",
      opacity: showPercent ? "1" : "0",
      transition: `opacity ${duration * (width / ratio)}s linear`,
    };
    const title = {
      paddingLeft: `${size * 0.25}vw`,
      paddingRight: `${size * 0.25}vw`,
    };

    return {
      wrapper,
      background,
      bar,
      percentage,
      title,
    }
  }

  render() {
    const { wrapper, background, bar, percentage, title } = this.getStyles();
    const { width, ratio, children } = this.props;

    return (
      <div style={wrapper}>
        <div style={background} onClick={this.showProgress}>
          <span style={title}>{children}</span>
        </div>
        <div style={bar} onClick={this.showProgress}>
          <span style={title}>{children}</span>
        </div>
        <div style={percentage} onClick={this.showProgress}>
          <span>{`${width}/${ratio}`}</span>
        </div>
      </div>
    );
  }
}

ProgressBar.propTypes = {
  colors: React.PropTypes.object,
  width: React.PropTypes.number,
  size: React.PropTypes.number,
  children: React.PropTypes.string,
  autoStart: React.PropTypes.number,
  ratio: React.PropTypes.number,
  duration: React.PropTypes.number,
};

ProgressBar.defaultProps = {
  colors: {
    baseColor: "black",
    barColor: "white"
  },
  width: 5,
  size: 10,
  children: "Language",
  autoStart: 1000,
  ratio: 5,
  duration: 1,
}

export default Radium(ProgressBar);
