import React from 'react';
import Radium from 'radium';
import PolaroidImage from './PolaroidImage';
import { getLinks } from '../data/data';

class ContactsPage extends React.Component {

  getStyles() {
    const { portrait } = this.props;

    const flex = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    };

    const wrapper = {
      position: "absolute",
      height: "75vh",
      width: "100%",
      display: "flex",
      alignItems: portrait ? "flex-end" : "flex-start",
      justifyContent: "space-between",
      flexDirection: "column",
      textAlign: "left",
      zIndex: "900",
      padding: "5%",
      bottom: "0",
    };

    const span = {
      width: portrait ? "50%" : "75%",
      marginTop: portrait ? "5vh" : "5%",
    };

    const linksWrap = {
      ...flex,
      width: "100%",
      height: "65%",
      flexWrap: "wrap",
    };

    const shadow1 = ".2vh .2vh 1vh rgba(0, 0, 0, 1)";
    const shadow2 = ".2vh -.2vh 1vh rgba(0, 0, 0, 1)";

    const iconWrap = {
      ...flex,
      height: `${portrait ? "14" : "20"}vh`,
      width: `${portrait ? "14" : "20"}vh`,
      flexDirection: "column",
      borderRadius: "100%",
      transition: "0.3s linear",
      fontFamily: "'Permanent Marker', cursive",
      color: "black",
      ":hover": {
        transform: "rotate(360deg)",
        boxShadow: `${shadow1}, -${shadow1}, ${shadow2}, -${shadow2}`,
      },
    };

    const icon = {
      height: "50%",
      width: "auto",
      margin: "1vh",
    };

    return {
      flex,
      wrapper,
      span,
      linksWrap,
      iconWrap,
      icon,
    };
  }

  render() {
    const { portrait } = this.props;
    const links = getLinks(portrait);
    const {
      flex,
      wrapper,
      span,
      linksWrap,
      iconWrap,
      icon,
     } = this.getStyles();

    return (
      <div style={wrapper}>
        <span style={span}>
          Have I sparked your interest? Great! Let's chat!
          <br />
          <br />
          I'm a sociable guy: There are many ways you can reach me and check my work. Don't worry, I won't bite!
        </span>
        <div style={linksWrap}>
          {links.map(link => {
            const { name, url, style } = link;
            return (
              <div style={{...flex, ...style}} key={name}>
                <a href={url} target="_blank">
                  <div style={iconWrap} key={name}>
                    <img src={`img/logos/${name}.png`} style={icon} />
                    <span>{name.toUpperCase()}</span>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
        <PolaroidImage portrait={portrait} photo="img/profile_photo.jpg" />
      </div>
    );
  }
}

export default Radium(ContactsPage);
