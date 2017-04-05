import React from 'react';
import Radium from 'radium';

class MenuFolderLabel extends React.Component {

  constructor(props) {
    super(props);
  }

  getStyles() {
    const tab = {
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-end",
      width: "18vmax",
      height: "0",
      marginLeft: "1vmax",
      marginRight: "-3vmax",
      borderBottom: "6vmax solid " + this.props.color,
      borderRight: "5vmax solid transparent",
      borderTopLeftRadius: "30vmax",
      borderTopRightRadius: "100vmax",
      zIndex: this.props.zIndex,
    };
    const label = {
      padding: ".5vmax 1vmax .5vmax 1vmax",
      backgroundColor: "black",
      color: "white",
      borderRadius: ".5vmin",
      fontSize: "1.5vmax",
      marginBottom: "-4.5vmax",
      marginLeft: "1vmax",
    };

    return {
      tab: tab,
      label: label,
    };
  }

  render() {
    const style = this.getStyles();

    return (
      <div style={[style.tab]}>
        <span style={[style.label]}>{this.props.name}</span>
      </div>
    );
  }

}

export default Radium(MenuFolderLabel);
