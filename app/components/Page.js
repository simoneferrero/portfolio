import React from 'react';
import Radium from 'radium';

class Page extends React.Component {

  getStyles() {
    const { zIndex, offSet, shadow, size, unit, portrait } = this.props;
    // const wrapper = {
    //   zIndex,
    //   position: "absolute",
    //   bottom: `${offSet}vh`,
    //   transition: "bottom linear .75s",
    // };
    // const page = {
    //   position: "absolute",
    //   width: "75vw",
    //   height: "75vh",
    //   transform: portrait ? "rotate(-90deg)" : "rotate(0deg)",//change properties when portrait
    // };

    const wrapper = {
      zIndex,
      position: "absolute",
      width: "75vw",
      height: "75vh",
      bottom: `${offSet}vh`,
      transition: "bottom linear .75s",
      transform: portrait ? "rotate(-90deg)" : "rotate(0deg)",//change properties when portrait
    };
    const pageTop = {
      width: "75vw",
      height: "0",
      position: "absolute",
      borderBottom: "6vh solid white",
      borderLeft: "5vh solid transparent",
      boxShadow: shadow,
    };
    const pageBottom = {
      width: "75vw",
      height: "70vh",
      position: "absolute",
      top: "5vh",
      backgroundColor: "white",
      boxShadow: `${shadow}, -${shadow}`,
      fontSize: `2.3vmin`,
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
      // page,
      pageBottom,
      pageTop,
      slantedCorner,
    }
  }

  render() {
    const { wrapper, page, pageBottom, pageTop, slantedCorner } = this.getStyles();
    const { children } = this.props;
    return (
      <div style={wrapper}>
        {/* <div style={page}> */}
          <div style={pageTop}></div>
          <div style={pageBottom}>
            {children}
          </div>
          <div style={slantedCorner}></div>
        {/* </div> */}
      </div>
    );
  }
}

export default Radium(Page);
