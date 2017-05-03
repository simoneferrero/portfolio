import React from 'react';
import Radium from 'radium';

class PageFace extends React.Component {

  getStyles() {
    const { zIndex, offSet, shadow, size, unit, portrait, front, rotate } = this.props;

    const face = {
      transition: "linear 1s",
      backfaceVisibility: "hidden",
      transform: `rotateY(${rotate}deg)`,
    };

    const pageTop = {
      width: "100%",
      height: "0",
      position: "absolute",
      borderBottom: "6vh solid white",
      [front ? "borderLeft" : "borderRight"]: "5vh solid transparent",
      boxShadow: front ? shadow : `-${shadow}`,
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
      textAlign: "center",
    };

    const more = {
      display: "inline-block",
      backgroundColor: "#262626",
      color: "#f2f2f2",
      borderRadius: `.5${unit}`,
      fontFamily: "'Special Elite', cursive",
      textShadow: `${size/100}${unit} ${size/150}${unit} ${size/200}${unit} #595959`,
      userSelect: "none",
      paddingTop: `${size / 30}${unit}`,
      paddingBottom: `${size / 40}${unit}`,
      paddingLeft: `${size / 20}${unit}`,
      paddingRight: `${size / 20}${unit}`,
      right: "5vw",
      transform: "rotate(10deg)",
      position: "absolute",
    };

    const cornerShadow = `${size/50}${unit} ${size/50}${unit} ${size/30}${unit} #262626`;

    const slantedCorner = {
      position: "absolute",
      width: "5vh",
      height: "0",
      borderBottom: "5vh solid white",
      [front ? "borderLeft" : "borderRight"]: "5vh solid transparent",
      [front ? "left" : "right"]: "0",
      boxShadow: front ? cornerShadow : "0",
    };

    return {
      face,
      pageBottom,
      pageTop,
      pageOrientation,
      more,
      slantedCorner,
    };
  }

  render() {
    const { contents, front } = this.props;
    const {
      face,
      pageBottom,
      pageTop,
      pageOrientation,
      more,
      slantedCorner
    } = this.getStyles();

    return (
      <div style={face}>
        <div style={pageTop}></div>
        <div style={pageBottom}>
          <div style={pageOrientation}>
            {front ? contents.front : contents.back}
            {contents.back ? <div style={more}>Click on the page to see more</div> : null}
          </div>
        </div>
        <div style={slantedCorner}></div>
      </div>
    );
  }
}

export default Radium(PageFace);
