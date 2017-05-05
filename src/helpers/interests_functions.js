export function getQuote() {
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
};


export function getMovie(context) {
  const shows = [
    "tt0944947",
    "tt0303461",
    "tt0903747",
    "tt5712554",
  ];
  const randomShow = shows[Math.floor(Math.random()*shows.length)];

  fetch(`http://api.tvmaze.com/lookup/shows?imdb=${randomShow}`)
    .then(response => response.json())
    .then(json => {
      const { name, image, url, summary } = json;
      const summaryNoHtml = $(summary).text();
      context.setState({
        movie: {
          name,
          url,
          summary: summaryNoHtml, //.length > 50 ? `${summaryNoHtml.slice(0, 250)}...` : summaryNoHtml,
          image: image.medium,
        },
      });
    });
};

export function getPlaylist() {
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
