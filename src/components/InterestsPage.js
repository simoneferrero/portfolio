import React from 'react';
import Radium from 'radium';

import { getQuote, getMovie, getPlaylist } from '../helpers/interests_functions';

class InterestsPage extends React.Component {

  constructor() {
    super();

    this.state = {
      quote: getQuote(),
      playlist: getPlaylist(),
      movie: {},
    };
  }

  componentDidMount() {
    getMovie(this);
  }

  getStyles() {
    const size = 18;
    const radius = (size / 6);
    const unit = this.props.portrait ? "vh" : "vw";

    const wrapper = {
      position: "absolute",
      height: "100%",
      width: "100%",
      zIndex: "900",
      padding: "5%",
      bottom: "2.5vh",
    };

    const quoteBlock = {
      display: "inline-block",
      position: "absolute",
      textAlign: "left",
      width: "40%",
      left: "5%",
      top: "5%",
      height: "40%",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    };

    const title = {
      display: "inline-block",
      backgroundColor: "#262626",
      color: "#f2f2f2",
      borderRadius: `.5${unit}`,
      fontFamily: "'Special Elite', cursive",
      textShadow: `${size/100}${unit} ${size/150}${unit} ${size/200}${unit} #595959`,
      userSelect: "none",
      paddingTop: `${size / 30}${unit}`,
      paddingBottom: `${size / 40}${unit}`,
      paddingLeft: `${size / 20}${unit}`,
      paddingRight: `${size / 20}${unit}`,
      marginBottom: "2vh",
    };

    const quoteText = {
      fontSize: "3vh",
    };

    const movieBlock = {
      position: "absolute",
      textAlign: "center",
      width: "40%",
      left: "5%",
      bottom: "5%",
      height: "50%",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
    };

    const movieImage = {
      width: "100%",
      height: "85%",
      display: "flex",
      alignItems: "center",
      justifyContent: this.props.portrait ? "center" : "space-between",
    };

    const img = {
      height: "80%",
    };

    const movieInfo = {
      height: "90%",
      paddingLeft: "5%",
      paddingTop: "5%",
      textAlign: "justify",
      fontSize: "2vh",
      position: "relative",
      overflowY: "scroll",
      overflowX: "hidden",
    };

    const spotifyBlock = {
      display: "inline-block",
      position: "absolute",
      width: "40%",
      height: "90%",
      right: "5%",
      top: "5%",
    };

    return {
      wrapper,
      quoteBlock,
      title,
      quoteText,
      movieBlock,
      movieImage,
      img,
      movieInfo,
      spotifyBlock,
    };
  }

  render() {
    const { quote, playlist, movie } = this.state;
    const { text, author } = quote;
    const { name, image, url, summary } = movie;
    const {
      wrapper,
      quoteBlock,
      title,
      quoteText,
      movieBlock,
      movieImage,
      img,
      movieInfo,
      spotifyBlock,
    } = this.getStyles();

    return (
      <div style={wrapper}>
        <div style={quoteBlock}>
          <h3 style={title}>Random Quote</h3>
          <blockquote>
            <p style={quoteText}>{text}</p>
            <footer>{author}</footer>
          </blockquote>
        </div>
        <div style={movieBlock}>
          <h3 style={title}>Random Movie/TV Show</h3>
          <a href={url} target="_blank" style={quoteText}>{name}</a>
          <div style={movieImage}>
            <img src={image} style={img} />
            {this.props.portrait ? null :
              (<div style={movieInfo} id="movie_info">
                <p>{summary}<br /><br /></p>
              </div>)
            }
          </div>
        </div>
        <div style={spotifyBlock}>
          <h3 style={title}>Random Playlist</h3>
          <iframe
            src={`https://open.spotify.com/embed?uri=${playlist}`}
            width="100%"
            height="90%"
            frameBorder="0"
            allowTransparency="true"
          ></iframe>
        </div>
       </div>
    );
  }
}

export default Radium(InterestsPage);
