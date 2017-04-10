import React from 'react';
import Radium from 'radium';

class ContactsPage extends React.Component {

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
      textAlign: "left",
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
          If you wish to reach me, write an email to <a
            href="mailto:simone.ferrero@outlook.com">simone.ferrero@outlook.com
          </a>.<br />
          <br />
          For other contact details, and more info, please see <a
            target="_blank" href="cvsimoneferrero.pdf">
            my CV</a>.<br />
          <br />
          You can also check out my experience on <a target="_blank"
            href="https://www.linkedin.com/in/simoneferrero/">
            Linkedin</a>,
          or see what I'm working on on <a target="_blank"
            href="https://www.github.com/simoneferrero">
            GitHub</a>.<br />
          <br />
          I look forward to hearing from you!
        </span>
      </div>
    );
  }

}

export default Radium(ContactsPage);
