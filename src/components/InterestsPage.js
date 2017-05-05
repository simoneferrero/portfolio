import React from 'react';
import Radium from 'radium';
import { Promise } from 'es6-promise';
import 'whatwg-fetch';
import { QUOTES, MEDIA, PLAYLISTS } from '../data/data';

class InterestsPage extends React.Component {

  constructor() {
    super();

    this.state = {
      quote: this.getRandomItem(QUOTES),
      playlist: this.getRandomItem(PLAYLISTS),
      media: {},
    };

    this.fetchShow = this.fetchShow.bind(this);
  }

  componentDidMount() {
    this.fetchShow();
  }

  fetchShow() {
    const randomShow = this.getRandomItem(MEDIA);

    fetch(`http://api.tvmaze.com/lookup/shows?imdb=${randomShow}`)
      .then(response => response.json())
      .then(json => {
        const { name, image, url, summary } = json;
        const summaryNoHtml = $(summary).text();
        this.setState({
          media: {
            name,
            url,
            summary: summaryNoHtml,
            image: image.medium,
          },
        });
      });
  }

  getRandomItem(array) {
    return array[Math.floor(Math.random()*array.length)];
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
      width: "40%",
      left: "5%",
      top: "5%",
      height: "35%",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      backgroundColor: "#e2a31d",
      boxShadow: `${size/50}${unit} ${size/40}${unit} ${size/100}${unit} #262626`,
      padding: "2%",
    };

    const quoteWrap = {
      width: "100%",
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
      paddingLeft: `${size / 20}${unit}`,
      paddingRight: `${size / 20}${unit}`,
      marginBottom: "2vh",
    };

    const quoteText = {
      fontSize: `${this.props.portrait ? "2" : "3"}vh`,
    };

    const mediaBlock = {
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

    const mediaName = {
      fontSize: "3vh",
      color: "#de002f",
    };

    const mediaImage = {
      width: "100%",
      height: "85%",
      display: "flex",
      alignItems: "center",
      justifyContent: this.props.portrait ? "center" : "space-between",
    };

    const img = {
      height: "80%",
    };

    const mediaInfo = {
      height: "80%",
      paddingLeft: "2.5%",
      paddingBottom: "2.5%",
      paddingRight: "4%",
      textAlign: "justify",
      fontSize: "2vh",
      position: "relative",
      overflowY: "scroll",
      overflowX: "hidden",
      width: "65%",
      marginRight: "-7.5%",
    };

    const spotifyBlock = {
      display: "flex",
      position: "absolute",
      width: "40%",
      height: "90%",
      right: "5%",
      top: "5%",
      justifyContent: "center",
      flexWrap: "wrap",
      alignItems: "center",
    };

    return {
      wrapper,
      quoteBlock,
      title,
      quoteWrap,
      quoteText,
      mediaBlock,
      mediaName,
      mediaImage,
      img,
      mediaInfo,
      spotifyBlock,
    };
  }

  render() {
    const { quote, playlist, media } = this.state;
    const { text, author } = quote;
    const { name, image, url, summary } = media;
    const {
      wrapper,
      quoteBlock,
      title,
      quoteWrap,
      quoteText,
      mediaBlock,
      mediaName,
      mediaImage,
      img,
      mediaInfo,
      spotifyBlock,
    } = this.getStyles();

    return (
      <div style={wrapper}>
        <div style={quoteBlock}>
          <h3 style={title}>Random Quote</h3>
          <blockquote style={quoteWrap}>
            <p style={quoteText}>{text}</p>
            <footer>{author}</footer>
          </blockquote>
        </div>
        <div style={mediaBlock}>
          <h3 style={title}>Random media/TV Show</h3>
          <a href={url} target="_blank" style={mediaName}>{name}</a>
          <div style={mediaImage}>
            <img src={image} style={img} />
            {this.props.portrait ? null :
              (<div style={mediaInfo}>
                <p>{summary}<br /><br /></p>
              </div>)
            }
          </div>
        </div>
        <div style={spotifyBlock}>
          <div><h3 style={title}>Random Playlist</h3></div>
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
