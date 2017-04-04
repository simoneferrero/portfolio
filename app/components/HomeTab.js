import React from 'react';
import Radium from 'radium';
import ProgressBar from './ProgressBar';

class HomeTab extends React.Component {

  constructor() {
    super();
  }

  getStyles() {
    const titles = {
      fontWeight: "700",
    };

    return {
      wrapper: {
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "column",
        textAlign: "center",
        zIndex: "900"
      },
      headers: {
        width: "80vw",
        marginTop: "5vh"
      },
      title: {
        fontWeight: "700",
        fontSize: "15vmin"
      },
      subTitle: {
        fontWeight: "500",
        fontSize: "7vmin"
      },
      skills: {
        marginBottom: "5vh"
      }
    }
  }

  render() {
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

    const style = this.getStyles();

    return (
      <div
        className="tab-pane fade in active"
        id="home"
        style={[style.wrapper]}>
        <div style={[style.headers]}>
          <h1 style={[style.title]}>Hi, I'm Simone.</h1>
          <h3 style={[style.subTitle]}>Welcome to my portfolio.</h3>
        </div>
        <div style={[style.skills]}>
          {languages.map(language => {
            return <ProgressBar
                      colors={language.colors}
                      width={language.width}
                      size={12}
                      key={language.name}
                      >{language.name}</ProgressBar>
          })}
        </div>
      </div>
    );
  }

}

export default Radium(HomeTab);
