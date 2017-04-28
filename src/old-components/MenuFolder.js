import React from 'react';
import Radium from 'radium';
import MenuFolderLabel from './MenuFolderLabel';

class MenuFolder extends React.Component {

  getStyles() {
    const { color, radius, shadow, unit, portrait } = this.props;

    const styleLandscape = {
      bottom: "0",
      left: "0",
      width: "100vw",
      height: "10vw",
      maxHeight: "18vh",
      transform: "rotate(0deg)",
    };

    const stylePortrait = {
      bottom: "44vh",
      left: "-46vh",
      width: "100vh",
      height: "10vh",
      maxHeight: "18vw",
      transform: "rotate(90deg)",
    };

    const menuFolder = {
      ...portrait ? stylePortrait : styleLandscape,
      position: "fixed",
      display: "flex",
      justifyContent: "center",
    };

    const menu = {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      height: "100%",
      width: "80%",
      top: "0",
    };

    const cover = {
      position: "absolute",
      width: "90%",
      height: "45%",
      left: "50%",
      marginLeft: "-45%",
      backgroundColor: color,
      zIndex: "900",
      borderTopLeftRadius: `${radius}${unit}`,
      borderTopRightRadius: `${radius}${unit}`,
      boxShadow: `${shadow}, -${shadow}`,
      bottom: "0",
    };

    return {
      menuFolder,
      menu,
      cover,
    };
  }

  render() {
    const { menuFolder, menu, cover } = this.getStyles();
    const {
      labels,
      size,
      unit,
      radius,
      shadow,
      children,
      onClick
    } = this.props;

    return (
      <div style={menuFolder}>
        {children}
        <div style={menu} id="menu">{labels.map(label => {
          return (
            <MenuFolderLabel
              name={label.name}
              color={label.color}
              zIndex={label.zIndex}
              size={size}
              unit={unit}
              radius={radius}
              shadow={shadow}
              onClick={onClick}
              key={label.name} />
          );
        })}</div>
        <div style={cover}></div>
      </div>
    );
  }
}

export default Radium(MenuFolder);
