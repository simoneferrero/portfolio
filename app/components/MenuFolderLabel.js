import React from 'react';
import Radium from 'radium';

class MenuFolderLabel extends React.Component {

  getStyles() {
    const { zIndex, color, size, unit, radius, shadow } = this.props;

    const tab = {
      zIndex,
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      width: "22%",
      height: "100%",
      marginLeft: "-1.25%",
      marginRight: "-1.25%",
      backgroundColor: color,
      borderRadius: `${radius}${unit}`,
      boxShadow: `${shadow}, -${shadow}`,
      cursor: "pointer",
    };

    const label = {
      backgroundColor: "#262626",
      color: "#f2f2f2",
      borderRadius: `${radius / 15}${unit}`,
      fontSize: `${size / 10}${unit}`,
      fontFamily: "'Special Elite', cursive",
      textShadow: `${size/100}${unit} ${size/150}${unit} ${size/200}${unit} #595959`,
      userSelect: "none",
      marginTop: "8%",
      paddingTop: `${size / 30}${unit}`,
      paddingLeft: `${size / 20}${unit}`,
      paddingRight: `${size / 20}${unit}`,
    };

    return {
      tab,
      label,
    };
  }

  render() {
    const { tab, label } = this.getStyles();
    const { name, color, onClick } = this.props;

    return (
      <div style={tab} onClick={() => onClick(name, color)}>
        <span style={label}>{name.toUpperCase()}</span>
      </div>
    );
  }
}

export default Radium(MenuFolderLabel);
