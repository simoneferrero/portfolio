import React from 'react';
import Radium from 'radium';

class MenuFolderLabel extends React.Component {

  constructor(props) {
    super(props);
  }

  getStyles() {
    const { zIndex, color, mainPage, name, onClick } = this.props;
    const size = 18;
    const unit = "vmax";
    const tabShadow = (size / 50).toString() + unit + " " +
      (size / 28).toString() + unit + " " +
      (size / 30).toString() + unit + " #262626";

    const tab = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: size.toString() + unit,
      height: (size / 3).toString() + unit,
      marginRight: (-(size / 6)).toString() + unit,
      backgroundColor: color,
      borderTopLeftRadius: (size / 6).toString() + unit,
      borderTopRightRadius: (size / 6).toString() + unit,
      zIndex: mainPage === name ? "500" : zIndex,
      boxShadow: tabShadow + ", -" + tabShadow,
      //  boxShadow: "2px 0px 2px #000000, -2px 0px 2px #000000",
      overflowY: "hidden",
      cursor: "pointer",
    };
    const label = {
      padding: (size / 40).toString() + unit,
      backgroundColor: "#262626",
      color: "#f2f2f2",
      borderRadius: (size / 60).toString() + unit,
      fontSize: (size / 10).toString() + unit,
      fontFamily: "'Droid Sans', sans-serif",
      textShadow: (size / 100).toString() + unit + " " +
        (size / 150).toString() + unit + " " +
        (size / 200).toString() + unit +" #595959",
      userSelect: "none",
    };

    return {
      tab: tab,
      label: label,
    };
  }

  render() {
    const style = this.getStyles();
    const { name, color, page, onClick } = this.props;

    return (
      <div style={[style.tab]} onClick={() => onClick(name, color, page)}>
        <span style={[style.label]}>{name.toUpperCase()}</span>
      </div>
    );
  }
}

export default Radium(MenuFolderLabel);
