import React from 'react';
import Radium from 'radium';
import ProgressBar from './ProgressBar';
import { LANGUAGES } from '../data/data';

class HomePage extends React.Component {

  getStyles() {
    const wrapper = {
      position: "absolute",
      height: "100%",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      flexDirection: "column",
      textAlign: "center",
      zIndex: "900",
      bottom: "2.5vh",
    };

    const headers = {
      width: "95%",
      marginTop: "3vh",
      fontFamily: "'Special Elite', cursive",
    };

    const title = {
      fontWeight: "700",
      fontSize: "14vmin",
    };

    const subTitle = {
      fontWeight: "500",
      fontSize: "5vmin",
    };

    const skills = {
      marginBottom: "3vh",
    };

    return {
      wrapper,
      headers,
      title,
      subTitle,
      skills
    };
  }

  render() {
    const { wrapper, headers, title, subTitle, skills } = this.getStyles();

    return (
      <div style={wrapper}>
        <div style={headers}>
          <h1 style={title}>Hi, I'm Simone.</h1>
          <h3 style={subTitle}>Welcome to my portfolio.</h3>
        </div>
        <div style={skills}>
          {LANGUAGES.map(language => {
            const { colors, width, name } = language;
            return (
              <ProgressBar
                colors={colors}
                width={width}
                size={10}
                key={name}>
                  {name}
              </ProgressBar>);
          })}
        </div>
      </div>
    );
  }
}

export default Radium(HomePage);
