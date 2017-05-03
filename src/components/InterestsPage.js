import React from 'react';
import Radium from 'radium';

class InterestsPage extends React.Component {

  constructor() {
    super();

    this.state = {
      quote: this.getQuote(),
      playlist: this.getPlaylist(),
    };

    this.getQuote = this.getQuote.bind(this);
    this.getPlaylist = this.getPlaylist.bind(this);
  }

  getQuote() {
    const quotes = [
      {
        text: "Always write code as if the guy who maintains it is a violent psychopath who knows where you live.",
        author: "Rick Osborne",
      },
      {
        text: "Profanity is the one language all programmers know best.",
        author: "Anonymous",
      },
      {
        text: "Programming isn't about what you know; it's about what you can figure out.",
        author: "Chris Pine",
      },
      {
        text: "Think twice, code once.",
        author: "Waseem Latif",
      },
    ];

    return quotes[Math.floor(Math.random()*quotes.length)];
  }

  getPlaylist() {
    const playlists = [
      "spotify:user:11149054722:playlist:41sW4XMlqkSSnBV7JrVMKk",
      "spotify:user:spotify:playlist:37i9dQZF1DWTc6X3ssl601",
      "spotify:user:ainandre:playlist:46r8xoRDfboq8UtQPxR21F",
      "spotify:user:hollywdrecrds:playlist:1xY6msLHX1W34EzB0UkkbU",
      "spotify:user:11149054722:playlist:1409kAiDDvL2Mbuc3BEuzf",
      "spotify:user:arminvanbuurenofficial:playlist:0Hu49FCkYPuWuAAy0XEx0M",
    ];

    return playlists[Math.floor(Math.random()*playlists.length)];
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

    const quote = {
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

    const spotifyBlock = {
      display: "inline-block",
      position: "absolute",
      width: "40%",
      height: "90%",
      right: "5%",
      top: "5%",
    };

    const spotifyPlaylist = {
      marginTop: "1vh",
    };

    return {
      wrapper,
      quote,
      title,
      quoteText,
      spotifyBlock,
    };
  }

  render() {
    const { text, author } = this.state.quote;
    const { playlist } = this.state;
    const {
      wrapper,
      quote,
      title,
      quoteText,
      spotifyBlock,
    } = this.getStyles();

    return (
      <div style={wrapper}>
        <div style={quote}>
          <h3 style={title}>Random Quote:</h3>
          <blockquote>
            <p style={quoteText}>{text}</p>
            <footer>{author}</footer>
          </blockquote>
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
