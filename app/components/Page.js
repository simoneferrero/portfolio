import React from 'react';
import Radium from 'radium';

class Page extends React.Component {

  getStyles() {
    const { zIndex, offSet, shadow, size, unit } = this.props;
    const wrapper = {
      zIndex,
      position: "absolute",
      width: "75vw",
      height: "75vh",
      bottom: `${offSet}vh`,
      // left: "12.5vw",//these will give problems when resizing on tall screens
      transition: "bottom linear .75s",//use props to know if bottom or left
      // transition: "left linear 0.75s",//for portrait
    }
    const page = {
      width: "75vw",
      height: "70vh",
      position: "absolute",
      top: "4.8vh",
      backgroundColor: "white",
      boxShadow: `${shadow}, -${shadow}`,
      fontSize: `2.3vmin`,
    };
    const pageTop = {
      width: "75vw",
      height: "0",
      position: "absolute",
      borderBottom: "5vh solid white",
      borderLeft: "5vh solid transparent",
      boxShadow: shadow,
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
      page,
      pageTop,
      slantedCorner,
    }
  }

  render() {
    const { wrapper, page, pageTop, slantedCorner } = this.getStyles();
    const { children } = this.props;
    return (
      <div style={wrapper}>
        <div style={pageTop}></div>
        <div style={page}>
          {children}
        </div>
        <div style={slantedCorner}></div>
      </div>
    );
  }
}

export default Radium(Page);
