import React from 'react';
import Radium from 'radium';

class ProjectCard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      front: true,
    };

    this.flipCard = this.flipCard.bind(this);
  }

  flipCard() {
    this.setState({
      front: !(this.state.front),
    })
  }

  getStyles() {
    const { portrait } = this.props;
    const shadow = "0.3vmin 0.6vmin 1vmin #262626";

    let textShadow = "";

    for (let i = 1; i <= 4; i++) {
      textShadow += `${i % 2 === 0 ? "-" : ""}0.4vmin ${i > 2 ? "-" : ""}0.4vmin 0.6vmin white${i !== 4 ? ", " : ""}`;
    }

    const itemWrap = {
      height: portrait ? "30%" : "45%",
      width: portrait ? "45%" : "30%",
      cursor: "pointer",
      fontWeight: "600",
      position: "relative",
      color: "#262626",
      textDecoration: "none",
      display: "flex",
      justifyContent: "center",
      userSelect: "none",
    };

    const face = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      width: "100%",
      padding: "5%",
      transition: "1s linear",
      border: "0.1vh solid #262626",
      borderRadius: "2vh",
      transformStyle: "preserve-3d",
      boxShadow: `${shadow}, -${shadow}`,
      backfaceVisibility: "hidden",
      position: "absolute",
      overflow: "hidden",
      left: "50%",
      marginLeft: "-50%",
    };

    const front = {
      ...face,
      transform: `rotateY(${this.state.front ? 0 : 180}deg)`,
    };

    const back = {
      ...face,
      transform: `rotateY(${this.state.front ? 180 : 0}deg)`,
      whiteSpace: "pre-line",
      alignItems: "center",
      fontSize: "2vh",
    };

    const image = {
      position: "absolute",
      height: "auto",
      width: "100%",
      left: "50%",
      marginLeft: "-50%",
    };

    const title = {
      fontSize: `3.2${portrait ? "vh" : "vw"}`,
      zIndex: "100",
      transform: "rotate(-30deg)",
      fontFamily: "'Special Elite', cursive",
      textShadow: textShadow,
    };
    return {
      itemWrap,
      front,
      back,
      image,
      title,
    };
  }

  render() {
    const { itemWrap, front, back, image, title } = this.getStyles();
    const { name, icon, link, description } = this.props.project;

    return (
      <a
        href={link}
        target="_blank"
        style={itemWrap}
        onMouseEnter={this.flipCard}
        onMouseLeave={this.flipCard}>
        <div style={front}>
          <img style={image} src={icon} alt={name} />
          <div style={title}>{name}</div>
        </div>
        <div style={back}>
          <span>{description}</span>
        </div>
      </a>
    );
  }

}

export default Radium(ProjectCard);
