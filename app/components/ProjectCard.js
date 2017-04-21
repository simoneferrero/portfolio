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

    const itemWrap = {
      height: "18vh",
      width: this.props.portrait ? "48%" : "23%",
      cursor: "pointer",
      fontSize: "2.5vh",
      fontWeight: "600",
      position: "relative",
      color: "#262626",
      textDecoration: "none",
      display: "flex",
      justifyContent: "center",
    };
    const face = {
      display: "flex",
      justifyContent: "center",
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
    }
    const image = {
      position: "absolute",
      height: "58%",
      width: "auto",
      bottom: "2%",
    };
    return {
      itemWrap,
      front,
      back,
      image,
    };
  }

  render() {
    const { itemWrap, front, back, image } = this.getStyles();
    const { name, icon, link, description } = this.props.project;

    return (
      <a
        href={link}
        target="_blank"
        style={itemWrap}
        onMouseEnter={this.flipCard}
        onMouseLeave={this.flipCard}>
        <div style={front}>
          <div>{name}</div>
          <img style={image} src={icon} alt={name} />
        </div>
        <div style={back}>
          <span>{description}</span>
        </div>
      </a>
    );
  }

}

export default Radium(ProjectCard);
