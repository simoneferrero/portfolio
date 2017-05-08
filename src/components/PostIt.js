import React from 'react';
import Radium from 'radium';

class PostIt extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      lifted: false,
    };

    this.onHover = this.onHover.bind(this);
  }

  onHover() {
    this.setState({
      lifted: !this.state.lifted,
    })
  }

  getStyles() {
    const wrapper = {
      position: "absolute",
      height: "100%",
      width: "100%",
    };

    const postIt = {
      height: "100%",
      width: "100%",
      position: "relative",
      background: "linear-gradient(135deg, #ffff88 71%,#ffff88 72%,#ffff88 72%,#ffffc6 100%)",
      borderTop: "5vh solid #fdfd86",
      borderBottom: ".1vh solid #E8E8E8",
      borderLeft: ".1vh solid #E8E8E8",
      borderRight: ".1vh solid #E8E8E8",
      borderBottomRightRadius: "6vh .6vw",
      display: "flex",
      alignItems: "center",
    };

    const shadow = {
      position: "absolute",
      zIndex: "-1",
      width: "15vw",
      height: "5vh",
      right: ".5vw",//portrait: "1vw",
      bottom: "3vh",//portrait: "2.9vh",
      boxShadow:".2vh 3vh .5vh rgba(0, 0, 0, 0.40)",
      transform: "skewX(1deg) rotate(4deg)",
    };

    return {
      wrapper,
      postIt,
      shadow,
    };
  }

  render() {
    const { lifted } = this.state;
    const { children } = this.props;
    const {
      wrapper,
      postIt,
      shadow,
    } = this.getStyles();

    return (
      <div style={wrapper} onMouseEnter={this.onHover} onMouseOut={this.onHover}>
        <div style={postIt}>
          {children}
        </div>
        <div style={shadow}></div>
      </div>
    );
  }
}

export default Radium(PostIt);
