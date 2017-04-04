import React from 'react';
import {StyleRoot} from 'radium';
import HomeTab from './HomeTab';

export default class Portfolio extends React.Component {

  constructor() {
    super();
  }

  render() {
    const menuTabs = [
      {
        name: "home",
        location: "center",
      },
      {
        name: "intro",
        location: "leftTop",
      },
      {
        name: "about",
        location: "rightTop",
      },
      {
        name: "projects",
        location: "leftBottom",
      },
      {
        name: "contacts",
        location: "rightBottom",
      }
    ];

    return (
      <StyleRoot>
        <HomeTab />
      </StyleRoot>
    );
  }

}
