import React from 'react';
import {StyleRoot} from 'radium';
import MenuFolder from './MenuFolder';
import Page from './Page';
import HomePage from './HomePage';
import IntroPage from './IntroPage';
import AboutPage from './AboutPage';
import ProjectsPage from './ProjectsPage';
import ContactsPage from './ContactsPage';

export default class Portfolio extends React.Component {

  constructor() {
    super();
    this.state = {
      main: "home",
      color: "#e2a31d",
    }
    this.togglePage = this.togglePage.bind(this);
  }

  getElements() {
    const elements = {
      home: {
        color: "#e2a31d",
        zIndex: "490",
        contents: <HomePage />,
      },
      intro: {
        color: "#e54d26",
        zIndex: "480",
        contents: <IntroPage />,
      },
      about: {
        color: "#61dafb",
        zIndex: "470",
        contents: <AboutPage />,
      },
      projects: {
        color: "#de002f",
        zIndex: "460",
        contents: <ProjectsPage />,
      },
      contacts: {
        color: "#6c7db7",
        zIndex: "450",
        contents: <ContactsPage />,
      }
    };

    return elements;
  }

  // togglePage(name) {
  //   const pages = this.getElements();
  //   const { main } = this.state;
  //   const mainPage = main === name ? "home" : name;
  //   const color = pages[mainPage].color;
  //
  //   this.setState({
  //     main: mainPage,
  //     color: color,
  //   });
  // }
  togglePage(name, color) {
    const pages = this.getElements();
    const { main } = this.state;
    const mainPage = main === name ? "" : name;
    const mainColor = main === name ? "#e2a31d" : color;

    this.setState({
      main: mainPage,
      color: mainColor,
    });
  }

  getStyles() {
    const size = 18;
    const radius = (size / 6);
    const unit = "vmax";
    const shadow = (size / 50).toString() + unit + " " +
      (size / 28).toString() + unit + " " +
      (size / 30).toString() + unit + " #262626";

    return {
      portfolio: {
        overflowY: "hidden",
        height: "100vh",
        width: "100vw",
        position: "relative",
        marginTop: "0",
        marginLeft: "0",
        backgroundImage: "url('https://s-media-cache-ak0.pinimg.com/originals/89/c3/be/89c3beddf3c836e9b04430020d9cf32b.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      },
      size: size,
      radius: radius,
      shadow: shadow,
      unit: unit,
    }
  }

  render() {
    const style = this.getStyles();
    const elements = this.getElements();
    const { main, color } = this.state;
    const { size, unit, radius, shadow } = style;
    const onClick = this.togglePage;

    const labels = [];
    const pages = [];

    for (let element in elements) {
      const common = {
        name: element,
        zIndex: main === element ? "500" : elements[element].zIndex,
      };

      labels.push({
        ...common,
        color: elements[element].color,
      });

      pages.push({
        ...common,
        offSet: main === element ? "20vh" : "-71vh",
        contents: elements[element].contents,
      });
    }

    return (
      <StyleRoot>
        <div style={[style.portfolio]}>
          <MenuFolder
            labels={labels}
            main={main}
            color={color}
            size={size}
            unit={unit}
            radius={radius}
            shadow={shadow}
            onClick={onClick}>
            {pages.map(page => {
              return (
                <Page zIndex={page.zIndex} offSet={page.offSet} shadow={shadow} key={page.name}>
                  {page.contents}
                </Page>
              );
            })}
          </MenuFolder>
        </div>
      </StyleRoot>
    );
  }

}
