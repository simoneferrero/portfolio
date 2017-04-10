import React from 'react';
import Radium from 'radium';

class IntroPage extends React.Component {

  constructor() {
    super();
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
      textAlign: "justify",
      zIndex: "900",
      padding: "10%",
    };
    return {
      wrapper: wrapper,
    }
  }

  render() {
    const style = this.getStyles();

    return (
      <div style={[style.wrapper]}>
        <span>
          Hi, I'm Simone.<br />
          I'm a driven, hungry, junior, ~young (*uhm...*) web developer who likes
          to use adjectives.<br />
          <br />
          When I code, I see myself as an archer. (well I really am an archer,
          but that's a story for another time).<br />
          My arrows? JavaScript (and its main frameworks), PHP, CSS3, HTML5...
          And any other technology I can put my hands on!<br />
          <br />
          If you are reading this, I thank you very much for taking an
          interest in me: I'd be happy to hear from you and get all
          chitty-chatty about our passion for programming.<br />
          <br />
          In the meanwhile, you'll find me doing what I love most:
          shooting the target!
        </span>
      </div>
    );
  }

}

export default Radium(IntroPage);
