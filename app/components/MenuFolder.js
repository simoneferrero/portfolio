import React from 'react';
import Radium from 'radium';
import MenuFolderLabel from './MenuFolderLabel';

class MenuFolder extends React.Component {

  constructor() {
    super();
  }

  getStyles() {
    const { color, radius, shadow, unit } = this.props;

    const menuFolder = {
      position: "fixed",
      // overflow: "hidden",
      bottom: "0",
      left: "0",
      width: "100vw",//this should be vmax
      display: "flex",
      justifyContent: "center",
      transform: "",
      maxHeight: "18vh",//18vw in portrait
      height: "10vmax",
      /*for portrait:
        -invert height/width
        -transform: rotate(90deg)
        -bottom: 44vmax
        -left: -44vmax //or more if want to hide folder
      */
    }
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
      backgroundColor: color,
      zIndex: "900",
      borderTopLeftRadius: radius.toString() + unit,
      borderTopRightRadius: radius.toString() + unit,
      boxShadow: shadow + ", -" + shadow,
      bottom: "0",
    };

    return {
      menuFolder: menuFolder,
      menu: menu,
      cover: cover,
    }
  }

  render() {
    const style = this.getStyles();
    const { labels, main, color, size, unit, radius, shadow, onClick } = this.props;

    return (
      <div style={[style.menuFolder]}>
        {this.props.children}
        <div style={[style.menu]} id="menu">{labels.map(label => {
          return (//<div></div>
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
        <div style={[style.cover]}></div>
      </div>
    );
  }
}

export default Radium(MenuFolder);
