import React from 'react';
import Radium from 'radium';

class AboutPage extends React.Component {

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

    const span = {
      width: "100%",
    };

    return {
      wrapper,
      span,
    };
  }

  render() {
    const { wrapper, span } = this.getStyles();

    return (
      <div style={wrapper}>
        <span style={span}>
          Ok, here are some facts about me!
          <br />
          <br />
          I did not start my professional career as a Web Developer straight out of University. Truth be told, at that time I did not really know what I wanted to become. After graduating from Psychology, I was hired as a copywriter (in Italy) and estate agent (in London), before I could understand what career I really wanted.
          <br />
          <br />
          It took me a few months to get up to speed with programming. I already knew the basics of HTML, CSS and SQL, but learning JavaScript was a game-changer and I just fell in love with it. Books, websites, other developers' experiences... I simply could not have enough.
          <br />
          Then, I began to create my own projects, and developed my online portfolio. I discovered AngularJS, SASS and, more recently, ReactJS, using this knowledge on new projects or to refactor old ones...
          <br />
          <br />
          ... Which led me to my first job as a Graduate Developer, during which I learned OOP and back end development through C# and PHP (although my passion for the front end still burns brighter). I was also made aware of unit testing, software lifecycle and a plethora of other technical terms that I had never heard before.
          <br />
          <br />
          Now, I strive to either learn or create something new every day, and am grateful that I can wake up in the morning and look forward to what challenge will be waiting for me next.
        </span>
       </div>
    );
  }
}

export default Radium(AboutPage);
