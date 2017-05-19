import React from 'react';
import HomePage from '../components/HomePage';
import IntroPage from '../components/IntroPage';
import AboutPage from '../components/AboutPage';
import ProjectsPage from '../components/ProjectsPage';
import InterestsPage from '../components/InterestsPage';
import ContactsPage from '../components/ContactsPage';

const colors = {
  yellowDark: "#e2a31d",
  yellowLight: "#f6e4bb",
  orangeDark: "#e54d26",
  orangeLight: "#f4b4a4",
  blueDark: "#61dafb",
  blueLight: "#e6f9fe",
  redDark: "#de002f",
  redLight: "#ff99af",
  purpleDark: "#6c7db7",
  purpleLight: "#ccd2e6",
}

export const getTabs = (portrait) => {
  const tabs = {
    home: {
      color: colors.yellowDark,
      zIndex: "490",
      contents: {
        front: <HomePage />,
      },
    },
    "about me": {
      color: colors.orangeDark,
      zIndex: "480",
      contents: {
        front: <IntroPage />,
        back: <AboutPage />,
      },
    },
    projects: {
      color: colors.blueDark,
      zIndex: "470",
      contents: {
        front: <ProjectsPage portrait={portrait} />,
      },
    },
    interests: {
      color: colors.redDark,
      zIndex: "460",
      contents: {
        front: <InterestsPage portrait={portrait} />,
      },
    },
    contacts: {
      color: colors.purpleDark,
      zIndex: "450",
      contents: {
        front: <ContactsPage portrait={portrait} />,
      },
    },
  };

  return tabs;
};

export const LANGUAGES = [
  {
    name: "HTML/CSS",
    colors: {
      baseColor: colors.orangeLight,
      barColor: colors.orangeDark
    },
    width: 5
  },
  {
    name: "JavaScript/jQuery",
    colors: {
      baseColor: colors.yellowLight,
      barColor: colors.yellowDark
    },
    width: 4
  },
  {
    name: "PHP",
    colors: {
      baseColor: colors.purpleLight,
      barColor: colors.purpleDark
    },
    width: 3
  },
  {
    name: "ReactJS",
    colors: {
      baseColor: colors.blueLight,
      barColor: colors.blueDark
    },
    width: 2
  },
  {
    name: "AngularJS",
    colors: {
      baseColor: colors.redLight,
      barColor: colors.redDark
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

export const POSTITCOLORS = {
  yellow: {
    base: "#ffff88",
    corner: "#ffffc6",
    top: "#fdfd86",
  },
  pink: {
    base: "#ff6bd0",
    corner: "#ffaae3",
    top: "#fc67cc",
  },
  blue: {
    base: "#88efff",
    corner: "#bcf6ff",
    top: "#84eaf9",
  }
};

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

export const getLinks = (portrait) => {
  const links = [
    {
      name: "email",
      url: "mailto:simone.ferrero@outlook.com",
      style: {
        flexBasis: "35%",
      },

    },
    {
      name: "cv",
      url: "cvsimoneferrero.pdf",
      style: {
        flexBasis: "35%",
      },
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/simoneferrero/",
      style: {
        flexBasis: portrait ? "100%" : "33%",
      },
    },
    {
      name: "github",
      url: "https://www.github.com/simoneferrero",
      style: {
        flexBasis: "33%",
      },
    },
    {
      name: "twitter",
      url: "https://twitter.com/_simoneferrero",
      style: {
        flexBasis: "33%",
      },
    },
  ];

  return links;
}
