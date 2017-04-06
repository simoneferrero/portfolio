import React from 'react';
import Radium from 'radium';

class PageFolder extends React.Component {

  constructor(props) {
    super(props);
  }

  getStyles() {
    const size = 18;
    const unit = "vmax";
    const tabShadow = (size / 50).toString() + unit + " " +
      (size / 28).toString() + unit + " " +
      (size / 30).toString() + unit + " #262626";
    const width = 90;

    return {
      page: {
        position: "absolute",
        width: width.toString() + unit,
        height: "80vh",
        // minHeight: (width * 3 / 5).toString() + unit,
        left: "5vmax",
        backgroundColor: this.props.color,
        zIndex: "900",
        borderTopLeftRadius: "3vmax",
        borderTopRightRadius: "3vmax",
        boxShadow: tabShadow + ", -" + tabShadow,
      }
    }
  }

  render() {
    const styles = this.getStyles();

    return (
        <div style={[styles.page]}>
          {this.props.children}
        </div>
    );
  }

}

export default Radium(PageFolder);
