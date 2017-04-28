import React from 'react';
import Radium from 'radium';
import ProgressBar from './ProgressBar';

class HomePage extends React.Component {

  getLanguages() {
    const languages = [
      {
        name: "HTML/CSS",
        colors: {
          baseColor: "#f4b4a4",
          barColor: "#e54d26"
        },
        width: 5
      },
      {
        name: "JavaScript/jQuery",
        colors: {
          baseColor: "#f6e4bb",
          barColor: "#e2a31d"
        },
        width: 4
      },
      {
        name: "PHP",
        colors: {
          baseColor: "#ccd2e6",
          barColor: "#6c7db7"
        },
        width: 3
      },
      {
        name: "ReactJS",
        colors: {
          baseColor: "#e6f9fe",
          barColor: "#61dafb"
        },
        width: 2
      },
      {
        name: "AngularJS",
        colors: {
          baseColor: "#ff99af",
          barColor: "#de002f"
        },
        width: 1
      },
    ];

    return languages;
  }

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
    const languages = this.getLanguages();
    const { wrapper, headers, title, subTitle, skills } = this.getStyles();

    return (
      <div style={wrapper} id="home">
        <div style={headers}>
          <h1 style={title}>Hi, I'm Simone.</h1>
          <h3 style={subTitle}>Welcome to my portfolio.</h3>
        </div>
        <div style={skills}>
          {languages.map(language => {
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
