import React from 'react';
import {StyleRoot} from 'radium';
import MenuFolderTop from './MenuFolderTop';
import PageFolder from './PageFolder';
import HomeTab from './HomeTab';

export default class Portfolio extends React.Component {

  constructor() {
    super();
    this.state = {
      pages: [
        {
          name: "home",
          color: "orange",
          zIndex: "490",
          page: (<HomeTab />),
        },
        {
          name: "intro",
          color: "red",
          zIndex: "480",
          page: <div>Intro</div>,
        },
        {
          name: "about",
          color: "blue",
          zIndex: "470",
          page: <div>About</div>,
        },
        {
          name: "projects",
          color: "green",
          zIndex: "460",
          page: <div>Projects</div>,
        },
        {
          name: "contacts",
          color: "purple",
          zIndex: "450",
          page: <div>Contacts</div>,
        }
      ],
      mainPage: "home",
      pageColor: "orange",
      page: <HomeTab />,
    }
    this.togglePage = this.togglePage.bind(this);
  }

  togglePage(main, color, pageDisplay) {
    const mainPage = this.state.mainPage === main ? "home" : main;
    const pageColor = this.state.mainPage === main ? "orange" : color;
    const page = this.state.mainPage === main ? <HomeTab /> : pageDisplay;

    this.setState({
      mainPage: mainPage,
      pageColor: pageColor,
      page: page,
    });
  }

  getStyles() {
    return {
      portfolio: {
        overflowY: "hidden",
        height: "100vh",
        width: "100vw",
      }
    }
  }

  render() {
    const styles = this.getStyles();
    const { pages, mainPage, pageColor } = this.state;

    return (
      <StyleRoot>
        <div style={[styles.portfolio]}>
          <MenuFolderTop pages={pages} onClick={this.togglePage} mainPage={mainPage} />
          <PageFolder color={pageColor}>{this.state.page}</PageFolder>
        </div>
      </StyleRoot>
    );
  }

}
