import React from 'react';
import Radium from 'radium';

class Page extends React.Component {

  getStyles() {
    const { zIndex, offSet, shadow, size, unit, portrait } = this.props;

    const wrapper = {
      zIndex,
      position: "absolute",
      left: "50%",
      marginLeft: `-37.5${unit}`,
      width: `75${unit}`,
      height: `75${portrait ? "vw" : "vh"}`,
      bottom: `${offSet}${portrait ? "vw" : "vh"}`,
      transition: "bottom linear .75s",
    };

    const pageTop = {
      width: "100%",
      height: "0",
      position: "absolute",
      borderBottom: "6vh solid white",
      borderLeft: "5vh solid transparent",
      boxShadow: shadow,
    };

    const pageBottom = {
      width: "100%",
      height: `70${portrait ? "vw" : "vh"}`,
      position: "absolute",
      top: "5vh",
      backgroundColor: "white",
      boxShadow: `${shadow}, -${shadow}`,
    };

    const pageOrientation = {
      width: "75vw",
      height: "70vh",
      position: "absolute",
      fontSize: `2.3${portrait ? "vw" : "vh"}`,
      transform: `rotate(${portrait ? "-90" : "0"}deg)`,
      marginTop: portrait ? "-37.5vh" : "0",
      marginLeft: portrait ? "-35vw" : "0",
      top: portrait ? "50%" : "0",
      left: portrait ? "50%" : "0",
    };

    const slantedCorner = {
      position: "absolute",
      width: "5vh",
      height: "0",
      borderBottom: "5vh solid white",
      borderLeft: "5vh solid transparent",
      boxShadow: `${size/50}${unit} ${size/50}${unit} ${size/30}${unit} #262626`,
    };

    return {
      wrapper,
      pageBottom,
      pageTop,
      pageOrientation,
      slantedCorner,
    };
  }

  render() {
    const { children } = this.props;
    const {
      wrapper,
      pageBottom,
      pageTop,
      pageOrientation,
      slantedCorner
    } = this.getStyles();

    return (
      <div style={wrapper}>
        <div style={pageTop}></div>
        <div style={pageBottom}>
          <div style={pageOrientation}>
            {children}
          </div>
        </div>
        <div style={slantedCorner}></div>
      </div>
    );
  }
}

export default Radium(Page);
