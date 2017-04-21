import React from 'react';
import {StyleRoot} from 'radium';
import MenuFolder from './MenuFolder';
import Page from './Page';
import HomePage from './HomePage';
import IntroPage from './IntroPage';
import AboutPage from './AboutPage';
import ProjectsPage from './ProjectsPage';
import ContactsPage from './ContactsPage';
import Ladybug from './Ladybug';

export default class Portfolio extends React.Component {

  constructor() {
    super();
    this.state = {
      main: "home",
      color: "#e2a31d",
      portrait: this.resizePortrait(),
    }
    this.togglePage = this.togglePage.bind(this);
    this.resizePortrait = this.resizePortrait.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", () => this.setState({
      portrait: this.resizePortrait(),
    }));
  }

  resizePortrait() {
    const mq = window.matchMedia("only screen and (orientation: portrait)");

    return mq.matches;
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
        contents: <ProjectsPage portrait={this.state.portrait} />,
      },
      contacts: {
        color: "#6c7db7",
        zIndex: "450",
        contents: <ContactsPage />,
      }
    };

    return elements;
  }

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
    const shadow = `${size/50}${unit} ${size/28}${unit} ${size/30}${unit} #262626`;
    const portfolio = {
      overflowY: "hidden",
      height: "100vh",
      width: "100vw",
      position: "relative",
      marginTop: "0",
      marginLeft: "0",
      backgroundImage: "url('https://img.clipartfox.com/61cfbe492a520e9ca8269362dc2489b2_wood-grain-texture-wood-grain-desktop-clipart_3888-2592.jpeg')",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
      fontFamily: "'Neucha', cursive",
      // fontFamily: "'Caveat', cursive",
      // fontFamily: "'Architects Daughter', cursive",
      // fontFamily: "'Coming Soon', cursive",
    };

    return {
      size,
      radius,
      shadow,
      unit,
      portfolio,
    }
  }

  render() {
    const { size, radius, unit, shadow, portfolio } = this.getStyles();
    const elements = this.getElements();
    const { main, color, portrait } = this.state;
    const onClick = this.togglePage;

    const labels = [];
    const pages = [];

    for (let element in elements) {
      const { zIndex, color, contents } = elements[element];
      const common = {
        name: element,
        zIndex: main === element ? "500" : zIndex,
      };
      const landscapeOffset = {
        offSet: main === element ? 20 : -71,
      };
      const portraitOffset = {
        offSet: main === element ? 0 : -30,//calculate difference between height and width and substract it from the bottom offset
        //this is calculating according to height, which is bigger as the view is slimmer,
        //it also needs to be calculated in vh instead of vw, but the problem is that width is in vw
        //possible solution to set max width in vw so it doesn't get too big?
        //other possible solution: include all pages in outer div and not turn it, it will retain values and offset
      };

      labels.push({
        ...common,
        color: color,
      });

      pages.push({
        ...common,
        contents: contents,
        ... portrait ? portraitOffset : landscapeOffset,
      });
    }

    return (
      <StyleRoot>
        <div style={portfolio}>
          <MenuFolder
            labels={labels}
            main={main}
            color={color}
            size={size}
            unit={unit}
            radius={radius}
            shadow={shadow}
            portrait={portrait}
            onClick={onClick}>
            {pages.map(page => {
              const { zIndex, offSet, name, contents } = page;
              return (
                <Page
                  zIndex={zIndex}
                  offSet={offSet}
                  shadow={shadow}
                  size={size}
                  unit={unit}
                  portrait={portrait}
                  key={name}>
                  {contents}
                </Page>
              );
            })}
          </MenuFolder>
        </div>
        <Ladybug time={10} size={5} />
      </StyleRoot>
    );
  }
}
