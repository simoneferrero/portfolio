import React from 'react';
import Radium from 'radium';

class IntroPage extends React.Component {

  getStyles() {
    const wrapper = {
      position: "absolute",
      height: "100%",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      flexDirection: "column",
      textAlign: "justify",
      zIndex: "900",
      padding: "5%",
      bottom: "2.5vh",
    };
    return {
      wrapper: wrapper,
    }
  }

  render() {
    const { wrapper } = this.getStyles();

    return (
      <div style={wrapper}>
        <span>
          Projects coming!
        </span>
      </div>
    );
  }

}

export default Radium(IntroPage);
