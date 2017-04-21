import React from 'react';
import Radium from 'radium';

class IntroPage extends React.Component {

  getStyles() {
    const wrapper = {
      position: "absolute",
      height: "100%",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      flexDirection: "column",
      textAlign: "justify",
      zIndex: "900",
      padding: "5%",
      bottom: "2.5vh",
    };
    return {
      wrapper,
    }
  }

  render() {
    const { wrapper } = this.getStyles();

    return (
      <div style={wrapper}>
        <span>
          Hi, I'm Simone.
          <br />
          I'm a driven, hungry, ~young (*ahem...*), junior Web Developer who
          likes to use adjectives.
          <br />
          <br />
          I like coding for the web. I am especially passionate about
          JavaScript (ReactJS, I mean WOW!), PHP, CSS3, HTML5... Well, most
          of the technologies on which I get my hands fascinate me!
          <br />
          <br />
          If you are reading this, I thank you very much for taking an
          interest in me: I'd be happy to hear from you and share our
          experiences over a good cuppa.
          <br />
          <br />
          After all, it's only by learning from others that one can truly
          improve oneself, and I intend to apply this teaching to the letter!
        </span>
      </div>
    );
  }

}

export default Radium(IntroPage);
