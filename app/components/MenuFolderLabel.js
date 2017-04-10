import React from 'react';
import Radium from 'radium';

class MenuFolderLabel extends React.Component {

  constructor(props) {
    super(props);
  }

  getStyles() {
    const { zIndex, color, name, size, unit, radius, shadow } = this.props;
    // const tabShadow = (size / 50).toString() + unit + " " +
    //   (size / 28).toString() + unit + " " +
    //   (size / 30).toString() + unit + " #262626";

    const tab = {
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      width: "22%",
      height: "100%",
      marginLeft: "-1.25%",
      marginRight: "-1.25%",
      backgroundColor: color,
      borderRadius: radius.toString() + unit,
      zIndex: zIndex,
      boxShadow: shadow + ", -" + shadow,
      cursor: "pointer",
    };
    const label = {
      backgroundColor: "#262626",
      color: "#f2f2f2",
      borderRadius: (radius / 15).toString() + unit,
      fontSize: (size / 10).toString() + unit,
      fontFamily: "'Droid Sans', sans-serif",
      textShadow: (size / 100).toString() + unit + " " +
        (size / 150).toString() + unit + " " +
        (size / 200).toString() + unit +" #595959",
      userSelect: "none",
      marginTop: "8%",
      paddingTop: (size / 30).toString() + unit,
      paddingBottom: (size / 30).toString() + unit,
      paddingLeft: (size / 20).toString() + unit,
      paddingRight: (size / 20).toString() + unit,
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
      // <div style={[style.tab]} onClick={() => onClick(name)}>
      <div style={[style.tab]} onClick={() => onClick(name, color)}>
        <span style={[style.label]}>{name.toUpperCase()}</span>
      </div>
    );
  }
}

export default Radium(MenuFolderLabel);
