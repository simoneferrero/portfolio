import React from 'react';
import HomePage from '../components/HomePage';
import IntroPage from '../components/IntroPage';
import AboutPage from '../components/AboutPage';
import ProjectsPage from '../components/ProjectsPage';
import InterestsPage from '../components/InterestsPage';
import ContactsPage from '../components/ContactsPage';

export function getTabs(portrait) {
  return {
    home: {
      color: "#e2a31d",
      zIndex: "490",
      contents: {
        front: <HomePage />,
      },
    },
    "about me": {
      color: "#e54d26",
      zIndex: "480",
      contents: {
        front: <IntroPage />,
        back: <AboutPage />,
      },
    },
    projects: {
      color: "#61dafb",
      zIndex: "470",
      contents: {
        front: <ProjectsPage portrait={portrait} />,
      },
    },
    interests: {
      color: "#de002f",
      zIndex: "460",
      contents: {
        front: <InterestsPage portrait={portrait} />,
      },
    },
    contacts: {
      color: "#6c7db7",
      zIndex: "450",
      contents: {
        front: <ContactsPage />,
      },
    },
  };
};

export const LANGUAGES = [
  {
    name: "HTML/CSS",
    colors: {
      baseColor: "#f4b4a4",
      barColor: "#e54d26"
    },
    width: 5
  },
  {
    name: "JavaScript/jQuery",
    colors: {
      baseColor: "#f6e4bb",
      barColor: "#e2a31d"
    },
    width: 4
  },
  {
    name: "PHP",
    colors: {
      baseColor: "#ccd2e6",
      barColor: "#6c7db7"
    },
    width: 3
  },
  {
    name: "ReactJS",
    colors: {
      baseColor: "#e6f9fe",
      barColor: "#61dafb"
    },
    width: 2
  },
  {
    name: "AngularJS",
    colors: {
      baseColor: "#ff99af",
      barColor: "#de002f"
    },
    width: 1
  },
];

export const PROJECTS = [
  {
    id: "yahtzee",
    name: "Yahtzee Point Scorer",
    icon: "img/yahtzee.png",
    link: "yahtzee/index.html",
    description: `(Work in Progress)
      An easier way to count Yahtzee points.

      Technologies: ReactJS, Bootstrap, SASS`,
  },
  {
    id: "blackjack",
    name: "Super Awesome Blackjack",
    icon: "img/blackjack.png",
    link: "blackjack/index.html",
    description: `(Work in Progress)
      Test your luck in this full Blackjack game!

      Technologies: AngularJS 1, jQuery, SASS`,
  },
  {
    id: "recipes",
    name: "EasyRecipes",
    icon: "img/easyrecipes.png",
    link: "easyrecipes/index.html",
    description: `Get the perfect dosage for your recipes.

      Technologies: AngularJS 1, jQuery, SASS`,
  },
  {
    id: "Portfolio2016",
    name: "Portfolio 2016",
    icon: "img/decisionmaker.png",
    link: "portfolio2016/index.html",
    description: `This is how my portfolio looked in 2016.

      Technologies: AngularJS 1, jQuery, SASS`,
  },
  {
    id: "decision",
    name: "Decision Maker",
    icon: "img/decisionmaker.png",
    link: "decisionmaker/index.html",
    description: `No more indecision: Let it choose for you!

      Technologies: jQuery, CSS`,
  },
  {
    id: "drawing",
    name: "CSS Drawing",
    icon: "img/cssdrawing.png",
    link: "cssdrawing/index.html",
    description: `Early *artistic* test of my CSS skills.

      Technologies: CSS`,
  },
];

export const QUOTES = [
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

export const MEDIA = [
  "tt0944947",
  "tt0303461",
  "tt0903747",
  "tt5712554",
];

export const PLAYLISTS = [
  "spotify:user:11149054722:playlist:41sW4XMlqkSSnBV7JrVMKk",
  "spotify:user:spotify:playlist:37i9dQZF1DWTc6X3ssl601",
  "spotify:user:ainandre:playlist:46r8xoRDfboq8UtQPxR21F",
  "spotify:user:hollywdrecrds:playlist:1xY6msLHX1W34EzB0UkkbU",
  "spotify:user:11149054722:playlist:1409kAiDDvL2Mbuc3BEuzf",
  "spotify:user:arminvanbuurenofficial:playlist:0Hu49FCkYPuWuAAy0XEx0M",
];
