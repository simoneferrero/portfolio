import React from 'react';
import Radium from 'radium';

class Ladybug extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      leg1: "20",
      leg2: "10",
      leg3: "-40",
      left: "50",
      top: "-10",
      rotate: "45",
    };
    this.moveLegs = this.moveLegs.bind(this);
    this.changePos = this.changePos.bind(this);
  }

  moveLegs() {
    let reps = 0;
    const movingLegs = setInterval(() => {
      const { leg1, leg2, leg3 } = this.state;
      const { time } = this.props;
      this.setState({
        leg1: leg1 === "20" ? "40" : "20",
        leg2: leg2 === "10" ? "-10" : "10",
        leg3: leg3 === "-20" ? "-40" : "-20",
      });

      if (++reps === time * 2) {
        window.clearInterval(movingLegs);
      }
    }, 500);
  }

  changePos() {
    const { left, top, rotate } = this.state;
    const { time } = this.props;
    const min = Math.ceil(time + 1);
    const max = Math.floor(time * 3);
    const interval = (Math.floor(Math.random() * (max - min)) + min) * 1000;

    this.setState({
      left: left === "50" ? "105" : "50",
      top: top === "-10" ? "50" : "-10",
      rotate: rotate === "135" ? "-45" : "135",
    });
    this.moveLegs();
    setTimeout(this.changePos, interval);
  }

  componentDidMount() {
    const { time } = this.props;

    setTimeout(this.changePos, time * 1000);
  }

  getStyles() {
    const { time, size } = this.props;
    const { top, left, rotate } = this.state;
    const unit = "vmax";//change to props when responsive website
    const shadow = `${size/50}${unit} ${size/28}${unit} ${size/30}${unit} #262626`;
    const wrapper = {
      position: "fixed",
      width: `${size}vw`,
      height: `${size}vw`,
      top: `${top}vw`,
      left: `${left}vw`,
      transform: `rotate(${rotate}deg)`,
      // width: "20vw",
      // height: "20vw",
      // top: "10vh",
      // left: "10vw",
      transition: `top ${time}s linear, left ${time}s linear`,
      zIndex: "1000",
      display: "flex",
      justifyContent: "center",
    };
    const body = {
      position: "absolute",
      width: "70%",
      height: "80%",
      borderRadius: "100%",
      backgroundColor: "#b30000",
      bottom: "0",
      boxShadow: `${shadow}, -${shadow}`,
    };
    const neckTop = {
      position: "absolute",
      width: "50%",
      height: "20%",
      borderRadius: "50% 50% 0 0/ 100% 100% 0 0",
      backgroundColor: "black",
      top: "10%",
      boxShadow: `${shadow}, -${shadow}`,
    };
    const neckBottom = {
      position: "absolute",
      width: "50%",
      height: "5%",
      borderRadius: "0 0 50% 50%/ 0 0 100% 100%",
      backgroundColor: "black",
      top: "30%",
    };
    const head = {
      position: "absolute",
      width: "20%",
      height: "5%",
      borderRadius: "50% 50% 0 0/ 100% 100% 0 0",
      backgroundColor: "black",
      top: "7%",
      boxShadow: `${shadow}, -${shadow}`,
    };
    const neckDot = {
      position: "absolute",
      width: "15%",
      height: "8%",
      borderRadius: "100%",
      backgroundColor: "white",
      top: "14%",
    };
    const eye = {
      position: "absolute",
      width: "2%",
      height: "2%",
      backgroundColor: "white",
      top: "9%",
      borderRadius: "100%"
    };
    const antennas = {
      position: "absolute",
      borderStyle: "solid",
      borderRadius: "70%",
      width: "15%",
      height: "15%",
      borderWidth: `${size * 1.5 / 100}vw`,
      borderColor: "transparent black transparent black",
      boxShadow: `${shadow}, -${shadow}`,
    };
    const leg = {
      position: "absolute",
      width: "90%",
      height: "2%",
      backgroundColor: "black",
      top: "60%",
      borderRadius: "100%",
      transition: ".5s linear",
    };
    const backLine = {
      position: "absolute",
      width: "1%",
      height: "80%",
      backgroundColor: "black",
      bottom: "0",
    };
    const backDot = {
      borderRadius: "100%",
      backgroundColor: "black",
      position: "absolute",
    }
    const leftDot = function(width, height, left, top) {
      return {
        ...backDot,
        width,
        height,
        left,
        top,
      };
    };
    const righttDot = function(width, height, right, top) {
      return {
        ...backDot,
        width,
        height,
        right,
        top,
      };
    }

    return {
      wrapper,
      leg1: {
        ...leg,
        transform: `rotate(${this.state.leg1}deg)`,
      },
      leg2: {
        ...leg,
        transform: `rotate(${this.state.leg2}deg)`,
      },
      leg3: {
        ...leg,
        transform: `rotate(${this.state.leg3}deg)`,
      },
      body,
      backLine,
      antennas,
      neckTop,
      neckBottom,
      head,
      lNeckDot: {
        ...neckDot,
        transform: "rotate(150deg)",
        left: "30%",
      },
      rNeckDot: {
        ...neckDot,
        transform: "rotate(-150deg)",
        right: "30%",
      },
      lEye: {
        ...eye,
        left: "43%",
      },
      rEye: {
        ...eye,
        right: "43%",
      },
      dot1: {
        ...leftDot("20%", "16%", "25%", "35%"),
      },
      dot2: {
        ...leftDot("8%", "8%", "20%", "57%"),
      },
      dot3: {
        ...leftDot("20%", "19%", "25%", "70%"),
      },
      dot4: {
        ...righttDot("20%", "16%", "25%", "35%"),
      },
      dot5: {
        ...righttDot("8%", "8%", "20%", "57%"),
      },
      dot6: {
        ...righttDot("20%", "19%", "25%", "70%"),
      },
      dot7: {
        ...backDot,
        width: "15%",
        height: "15%",
        top: "47%",
      },
    };
  }

  render() {
    const styles = this.getStyles();
    const layout = [];

    for (let style in styles) {
      if (style !== 'wrapper') {
        layout.push(<div style={styles[style]} key={style}></div>);
      }
    }

    return (
      <div style={styles.wrapper}>
        {layout}
      </div>
    );
  }
}

export default Radium(Ladybug);
