import React from 'react';
import Radium from 'radium';

class PolaroidImage extends React.Component {

  getStyles() {
    const { portrait } = this.props;

    const imageWrap = {
      position: "absolute",
      top: portrait ? "-0.8vw" : "0",
      [portrait ? "left" : "right"]: "0",
      width: portrait ? "30%" : "20%",
      transform: `rotate(${portrait ? "-5" : "5"}deg)`,
    };

    const image = {
      width: "100%",
      height: "auto",
      padding: "6% 6% 24% 6%",
      background: "#f2f2f2",
      boxShadow: "0.3vmin 0.6vmin 1vmin #262626",
    };

    const paperclipWrap = {
      position: "absolute",
      top: "-7.5%",
      left: "10%",
      height: "40%",
      width: "20%",
      transform: "rotate(-20deg)",
    };

    const paperclipTop = {
      position: "absolute",
      top: "0",
      left: "0",
      height: "35%",
      width: "100%",
      borderRadius: "100vh 100vh 0 0",
      borderLeft: "0.5vh groove #DDDDDD",
      borderTop: "0.5vh groove #DDDDDD",
    };

    const paperclipBottom = {
      position: "absolute",
      bottom: "0",
      left: "0",
      height: "65%",
      width: "80%",
      borderRadius: "0 0 100vh 100vh",
      borderLeft: "0.5vh groove #DDDDDD",
      borderBottom: "0.5vh groove #DDDDDD",
      borderRight: "0.5vh groove #DDDDDD",
    };

    const paperclipUnder = {
      position: "absolute",
      top: "0",
      left: "0",
      height: "35%",
      width: "100%",
      borderRadius: "100vh 100vh 0 0",
      borderRight: "0.5vh groove #DDDDDD",
    };

    return {
      imageWrap,
      image,
      paperclipWrap,
      paperclipTop,
      paperclipBottom,
      paperclipUnder,
    };
  }

  render() {
    const { photo } = this.props;
    const {
      imageWrap,
      image,
      paperclipWrap,
      paperclipTop,
      paperclipBottom,
      paperclipUnder,
     } = this.getStyles();

    return (
      <div style={imageWrap}>
        <div style={{...paperclipWrap, zIndex: "-1"}}>
          <div style={paperclipUnder}></div>
        </div>
        <img style={image} src={ photo } alt="Profile Picture" />
        <div style={paperclipWrap}>
          <div style={paperclipTop}></div>
          <div style={paperclipBottom}></div>
        </div>
      </div>
    );
  }
}

export default Radium(PolaroidImage);
