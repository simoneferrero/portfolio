import React from 'react';
import Radium from 'radium';

class ContactsPage extends React.Component {

  getStyles() {
    const wrapper = {
      position: "absolute",
      height: "100%",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      flexDirection: "column",
      textAlign: "left",
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
      </div>
    );
  }

}

export default Radium(ContactsPage);
