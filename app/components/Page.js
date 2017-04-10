import React from 'react';
import Radium from 'radium';

class Page extends React.Component {

  constructor(props) {
    super(props);
  }

  getStyles() {
    const { zIndex, offSet, shadow } = this.props;
    const page = {
      width: "75vw",
      height: "75vh",
      position: "absolute",
      bottom: offSet,
      left: "12.5vw",//these will give problems when resizing on tall screens
      backgroundColor: "white",
      transition: "bottom linear .75s",
      // transition: "left linear 0.75s",//for portrait
      zIndex: zIndex,
      boxShadow: shadow + ", -" + shadow,
    };
    return {
      page: page,
    }
  }

  render() {
    const style = this.getStyles();
    return (
      <div style={[style.page]}>
        {this.props.children}
      </div>
    );
  }
}

export default Radium(Page);
