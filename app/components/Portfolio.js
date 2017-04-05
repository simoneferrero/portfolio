import React from 'react';
import {StyleRoot} from 'radium';
import HomeTab from './HomeTab';
import MenuFolderLabel from './MenuFolderLabel';

export default class Portfolio extends React.Component {

  constructor() {
    super();
  }

  getStyles() {
    const menu = {
      display: "flex",
      flexDirection: "row",
      marginTop: "20vh",
    };

    return {
      menu: menu,
    };
  }

  render() {
    const pages = [
      {
        name: "home",
        color: "orange",
        zIndex: "700",
      },
      {
        name: "intro",
        color: "red",
        zIndex: "690",
      },
      {
        name: "about",
        color: "blue",
        zIndex: "680",
      },
      {
        name: "projects",
        color: "green",
        zIndex: "670",
      },
      {
        name: "contacts",
        color: "yellow",
        zIndex: "660",
      }
    ];

    const style = this.getStyles();

    return (
      <StyleRoot>
        <div style={[style.menu]}>
          {pages.map(page => {
            return (
              <MenuFolderLabel
                name={page.name.toUpperCase()}
                color={page.color}
                zIndex={page.zIndex}
                key={page.name} />
            );
          })}
        </div>
        {/* <HomeTab /> */}
      </StyleRoot>
    );
  }

}
