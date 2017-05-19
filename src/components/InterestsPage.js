import React from 'react';
import Radium from 'radium';
import { Promise } from 'es6-promise';
import 'whatwg-fetch';
import { QUOTES, MEDIA, PLAYLISTS } from '../data/data';
import PostIt from './PostIt';
import { POSTITCOLORS } from '../data/data';

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
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      transform: "rotate(4deg)",
      zIndex: "200",
    };

    const quoteWrap = {
      width: "100%",
    };

    const titleWrap = {
      position: "absolute",
      width: "100%",
      top: "-3.8vh",
      display: "flex",
      justifyContent: "center",
    }

    const title = {
      display: "inline-block",
      userSelect: "none",
      fontFamily: "'Permanent Marker', cursive",
      fontSize: "larger",
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
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      transform: "rotate(-2deg)",
      zIndex: "100",
    };

    const mediaNameWrap = {
      position: "absolute",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      top: "1vh",
    };

    const mediaName = {
      fontSize: "3vh",
      color: "#de002f",
      position: "absolute",
    };

    const mediaImage = {
      width: "100%",
      height: "85%",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: this.props.portrait ? "center" : "space-between",
    };

    const img = {
      height: "80%",
      marginLeft: "2%",
    };

    const mediaInfoWrap = {
      height: "80%",
      position: "relative",
      paddingLeft: "2.5%",
      paddingBottom: "2.5%",
      paddingRight: "4%",
      textAlign: "justify",
      fontSize: "2vh",
      overflow: "hidden",
    };

    const mediaInfo = {
      overflowY: "scroll",
      overflowX: "hidden",
      width: "130%",
      paddingRight: "20%",
      marginRight: "-7.5%",
      height: "100%",
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
      transform: "rotate(3deg)",
    };

    const musicWrap = {
      width: "90%",
      height: "90%",
    };

    return {
      wrapper,
      quoteBlock,
      titleWrap,
      title,
      quoteWrap,
      quoteText,
      mediaBlock,
      mediaNameWrap,
      mediaName,
      mediaImage,
      img,
      mediaInfoWrap,
      mediaInfo,
      spotifyBlock,
      musicWrap,
    };
  }

  render() {
    const { quote, playlist, media } = this.state;
    const { text, author } = quote;
    const { name, image, url, summary } = media;
    const {
      wrapper,
      quoteBlock,
      titleWrap,
      title,
      quoteWrap,
      quoteText,
      mediaBlock,
      mediaNameWrap,
      mediaName,
      mediaImage,
      img,
      mediaInfoWrap,
      mediaInfo,
      spotifyBlock,
      musicWrap,
    } = this.getStyles();
    const { yellow, pink, blue } = POSTITCOLORS;

    return (
      <div style={wrapper}>
        <div style={quoteBlock}>
          <PostIt colors={blue}>
            <div style={titleWrap}>
              <h3 style={title}>Random Quote</h3>
            </div>
            <blockquote style={quoteWrap}>
              <p style={quoteText}>{text}</p>
              <footer>{author}</footer>
            </blockquote>
          </PostIt>
        </div>
        <div style={mediaBlock}>
          <PostIt colors={yellow}>
            <div style={titleWrap}>
              <h3 style={title}>Random TV Show</h3>
            </div>
            <div style={mediaNameWrap}>
              <a href={url} target="_blank" style={mediaName}>{name}</a>
            </div>
            <div style={mediaImage}>
              <img src={image} style={img} />
              {this.props.portrait ? null :
                (<div style={mediaInfoWrap}>
                  <div style={mediaInfo}><p>{summary}<br /><br /></p></div>
                </div>)
              }
            </div>
          </PostIt>
        </div>
        <div style={spotifyBlock}>
          <PostIt colors={pink}>
            <div style={titleWrap}>
              <h3 style={title}>Random Playlist</h3>
            </div>
            <div style={musicWrap}>
              <iframe
                src={`https://open.spotify.com/embed?uri=${playlist}`}
                width="100%"
                height="100%"
                frameBorder="0"
                allowTransparency="true"
              ></iframe>
            </div>
          </PostIt>
        </div>
       </div>
    );
  }
}

export default Radium(InterestsPage);
