import React from 'react';
import Radium from 'radium';

class ContactsPage extends React.Component {

  getStyles() {
    const { portrait } = this.props;
    const shadow = "0.3vmin 0.6vmin 1vmin #262626";

    const wrapper = {
      position: "absolute",
      height: "75vh",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      flexDirection: "column",
      textAlign: "left",
      zIndex: "900",
      padding: "5%",
      bottom: "0",
    };

    const span = {
      width: "100%",
    };

    const imageWrap = {
      position: "absolute",
      top: "0",
      [portrait ? "left" : "right"]: "2vw",
      width: portrait ? "15vh" : "15vw",
      padding: "1% 1% 4% 1%",
      background: "#f2f2f2",
      transform: `rotate(${portrait ? "-5" : "5"}deg)`,
      boxShadow: shadow,
    };

    const image = {
      width: "100%",
      height: "auto",
    };

    const paperclipWrap = {
      position: "absolute",
      top: "-4.5%",
      left: "10%",
      height: "40%",
      width: "20%",
      transform: "rotate(-20deg)",
    };

    const paperclipTop = {
      position: "absolute",
      top: "0",
      left: "0",
      height: "35%",
      width: "100%",
      borderRadius: "3vh 3vh 0 0",
      borderLeft: "0.5vh groove #DDDDDD",
      borderTop: "0.5vh groove #DDDDDD",
      borderRight: "none",
      borderBottom: "none",
    };

    const paperclipRight = {
      // position: "absolute",
      // top: "0",
      // left: "0",
      // height: "15%",
      // width: "100%",
      // borderRadius: "3vh 3vh 0 0",
      // borderLeft: "0.5vh groove #DDDDDD",
      // borderTop: "0.5vh groove #DDDDDD",
      // borderRight: "0.5vh groove #DDDDDD",
      // borderBottom: "none",
    };

    const paperclipBottom = {
      position: "absolute",
      bottom: "0",
      left: "0",
      height: "65%",
      width: "80%",
      borderRadius: "0 0 3vh 3vh",
      borderLeft: "0.5vh groove #DDDDDD",
      borderBottom: "0.5vh groove #DDDDDD",
      borderRight: "0.5vh groove #DDDDDD",
      borderTop: "none",
    };

    return {
      wrapper,
      span,
      imageWrap,
      image,
      paperclipWrap,
      paperclipTop,
      paperclipRight,
      paperclipBottom,
    };
  }

  render() {
    const {
      wrapper,
      span,
      imageWrap,
      image,
      paperclipWrap,
      paperclipTop,
      paperclipRight,
      paperclipBottom,
     } = this.getStyles();

    return (
      <div style={wrapper}>
        <span style={span}>
          Have I sparked your interest? Great! Let's chat!
          <br />
          <br />
          The fastest way to reach me is to write an email to <a href="mailto:simone.ferrero@outlook.com">simone.ferrero@outlook.com</a>.
          <br />
          <br />
          For other contact details, and more info, please see <a target="_blank" href="cvsimoneferrero.pdf">my CV</a>.
          <br />
          <br />
          You can also check out my profile on <a target="_blank" href="https://www.linkedin.com/in/simoneferrero/">Linkedin</a>,
          or see what I'm working on, on <a target="_blank" href="https://www.github.com/simoneferrero">GitHub</a>.
          <br />
          <br />
          I look forward to hearing from you!
        </span>
        <div style={imageWrap}>
          <img style={image} src="img/profile_photo.jpg" alt="Profile Picture" />
          <div style={paperclipWrap}>
            <div style={paperclipTop}></div>
            <div style={paperclipRight}></div>
            <div style={paperclipBottom}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Radium(ContactsPage);
