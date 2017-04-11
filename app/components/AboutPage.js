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
    return {
      wrapper: wrapper,
    }
  }

  render() {
    const { wrapper } = this.getStyles();

    return (
      <div style={wrapper}>
        <span>
          Ok, here's a few (somehow lengthy) facts about me!
          <br />
          <br />
          When I graduated from Psychology in 2013, I would never have thought
          that one day I'd be a Web Developer. Truth be told, I did not really
          know what I wanted to become, so I sought and found a job as a
          Copywriter in an advertising agency in Turin, my home town in Italy.
          I loved the buzz, the effort, and the atmosphere, but I ended up
          admitting to myself that copywriting wasn't my call.
          <br />
          I still love writing, occasionally, but that's a burden that only a
          handful of selected people have to pretend to appreciate.
          <br />
          <br />
          About one year after my graduation, I took a big leap of faith and
          moved to the UK. London, the big, scary metropolis that swallows
          everything!
          <br />
          <br />
          Luckily, I found a job as an estate agent, which allowed me to get
          acquainted with the place, the people, and the different culture.
          It was really helpful and insightful, but it still was not
          what I wanted to do for the rest of my professional life.
          <br />
          <br />
          When my contract ended, I took some time to learn coding. At
          first, it was just a hobby, but it quickly grew on me to the point
          where I was sure: I finally found my vocation! I would become a
          Web Developer. And it just took a few months until I was finally
          hired as one.
          <br />
          <br />
          So, here I am, in a job I love, waking up happy in the morning
          and looking forward to each new challenge that I'll eventually
          find a way to overcome. Who knows what the future has in store for me
          now?
        </span>
       </div>
    );
  }

}

export default Radium(AboutPage);
