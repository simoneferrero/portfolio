import React from 'react';
import Radium from 'radium';

class AboutPage extends React.Component {

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
          Fun facts and trivia about me!<br />
          <br />
          In 2013, I graduated in Psychology in Turin, Italy.
          These studies allowed me to comprehend the human mind and behaviour,
          and gave me the tools to listen and care for other people, as well
          as to endure difficulties.<br />
          But I wanted more than to become a psychologist. So, to get some
          strong experience of a creative environment and put my ability to
          write to use, I joined an advertising agency as a copywriter.
          Amazing times, that I treasure dearly. They shaped my professional
          profile greatly - plus points for working with great people, too.<br />
          <br />
          Then, at the end of 2014, I decided to make a leap into the unknown
          and move to London. I was quickly hired as lettings administrator
          in an estate agency in Fulham, where I worked for seven months
          until September 2015. This was another important part of my life that
          made me grow on all fronts and get to know London's job market.<br />
          <br />
          Now I'm employed at the University of London, and I finally made it
          into the Software development world. Who knows what the future will
          hold next for me?
        </span>
       </div>
    );
  }

}

export default Radium(AboutPage);
