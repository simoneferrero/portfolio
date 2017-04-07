import React from 'react';
import Radium from 'radium';
// import MenuFolderTop from './MenuFolderTop';
// import PageFolder from './PageFolder';
import MenuFolderLabel from './MenuFolderLabel';

class MenuFolder extends React.Component {

  constructor() {
    super();
    this.state = {
      pages: {
        home: {
          color: "orange",
          zIndex: "490",
        },
        intro: {
          color: "red",
          zIndex: "480",
        },
        about: {
          color: "blue",
          zIndex: "470",
        },
        projects: {
          color: "green",
          zIndex: "460",
        },
        contacts: {
          color: "purple",
          zIndex: "450",
        }
      },
      main: "home",
      color: "orange",
    }
    this.togglePage = this.togglePage.bind(this);
  }

  togglePage(name) {
    const { pages, main } = this.state;
    const mainPage = main === name ? "home" : name;
    const color = pages[mainPage].color;

    this.setState({
      main: mainPage,
      color: color,
    });
  }


  getStyles() {
    const { color } = this.state;
    const size = 18;
    const radius = (size / 6).toString();
    const unit = "vmax";
    const shadow = (size / 50).toString() + unit + " " +
      (size / 28).toString() + unit + " " +
      (size / 30).toString() + unit + " #262626";

    const menuFolder = {
      position: "fixed",
      overflow: "hidden",
      bottom: "0",
      left: "0",
      height: "10vmax",
      width: "100vw",//this should be vmax
      display: "flex",
      justifyContent: "center",
      transform: "",
      /*for portrait:
        -invert height/width
        -transform: rotate(90deg)
        -bottom: 44vmax
        -left: -44vmax //or more if want to hide folder
      */
    }
    const menu = {
      position: "absolute",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      height: "100%",
      width: "80%",
      top: "0",
    };
    const page = {
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
      page: page,
      size: size,
      radius: radius,
      shadow: shadow,
      unit: unit,
    }
  }

  render() {
    const style = this.getStyles();
    const { pages, main, pageColor } = this.state;

    const labels = [];

    for (let page in pages) {
      labels.push(<MenuFolderLabel
                    name={page}
                    color={pages[page].color}
                    zIndex={main === page ? "500" : pages[page].zIndex}
                    size={style.size}
                    unit={style.unit}
                    radius={style.radius}
                    shadow={style.shadow}
                    onClick={this.togglePage}
                    key={page} />);
    }


    return (
      <div style={[style.menuFolder]}>
        <div style={[style.menu]}>
          {labels}
        </div>
        <div style={[style.page]}>
        </div>
      </div>
    );
  }
}

export default Radium(MenuFolder);
