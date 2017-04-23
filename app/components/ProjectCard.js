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
    const shadow = `0.3vmin 0.6vmin 1vmin #262626`;
    const size = this.props.portrait ? "20vh" : "14vw";
    // const size = `20${this.props.portrait ? "vw" : "vh"}`;

    const itemWrap = {
      height: size, //"18vh",
      width: size, //this.props.portrait ? "48%" : "23%",
      cursor: "pointer",
      fontSize: "2.5vh",
      fontWeight: "600",
      position: "relative",
      color: "#262626",
      textDecoration: "none",
      display: "flex",
      justifyContent: "center",
      marginLeft: this.props.portrait ? "0" : "5%",
      marginRight: this.props.portrait ? "0" : "5%",
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
    };
    const title = {
      fontSize: "3vh",
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      zIndex: "100",
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
