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
    this.resizePortrait = this.resizePortrait.bind(this);
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
      width: width,
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
    const { size, showPercent } = this.state;

    const baseStyle = {
      position: "absolute",
      height: (size * 0.5).toString() + "vh",
      fontSize: (size * 0.3).toString() + "vh",
      userSelect: "none",
      cursor: "pointer",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      borderRadius: (size * 0.5).toString() + "vh",
    };

    return {
      wrapper: {
        position: "relative",
        margin: (size * 0.1).toString() + "vh",
        height: (size * 0.5).toString() + "vh",
        width: (size * 5).toString() + "vw",
      },
      background: {
        ...baseStyle,
        width: "100%",
        backgroundColor: colors.baseColor,
        color: colors.barColor,
      },
      bar: {
        ...baseStyle,
        width: (this.state.width * size * 5 / ratio).toString() + "vw",
        backgroundColor: colors.barColor,
        color: colors.baseColor,
        transition: (duration * (width / ratio)).toString() + "s linear",
        top: "0",
      },
      percentage: {
        ...baseStyle,
        width: (size * 0.35).toString() + "vh",
        height: (size * 0.35).toString() + "vh",
        justifyContent: "center",
        margin: (size * 0.075).toString() + "vh",
        fontSize: (size * (ratio < 10 ? 0.22 : 0.14)).toString() + "vh",
        backgroundColor: width !== ratio ? colors.barColor : colors.baseColor,
        color: width !== ratio ? colors.baseColor : colors.barColor,
        right: "0",
        opacity: showPercent ? "1" : "0",
        transition: "opacity " + (duration * (width / ratio)).toString() +
          "s linear",
      },
      title: {
        paddingLeft: (size * 0.25).toString() + "vw",
        paddingRight: (size * 0.25).toString() + "vw",
      },
    }
  }

  render() {
    const styles = this.getStyles();
    const { width, ratio, children } = this.props;

    return (
      <div style={[styles.wrapper]}>
        <div style={[styles.background]} onClick={this.showProgress}>
          <span style={[styles.title]}>{children}</span>
        </div>
        <div style={[styles.bar]} onClick={this.showProgress}>
          <span style={[styles.title]}>{children}</span>
        </div>
        <div style={[styles.percentage]} onClick={this.showProgress}>
          <span>{width.toString() + "/" + ratio.toString()}</span>
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
