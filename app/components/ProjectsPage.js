import React from 'react';
import Radium from 'radium';

class IntroPage extends React.Component {

  constructor() {
    super();
  }

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
      padding: "10%",
    };
    return {
      wrapper: wrapper,
    }
  }

  render() {
    const style = this.getStyles();

    return (
      <div style={[style.wrapper]}>
        <span>
          Projects coming!
        </span>
      </div>
    );
  }

}

export default Radium(IntroPage);
