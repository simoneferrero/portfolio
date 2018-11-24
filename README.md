<h1 align="center">
  Simone Ferrero's Portfolio
</h1>

Welcome to the source code of my personal corner of the web!<br />
This version has been completely redesigned from the ground up to use [Gatsby](https://www.gatsbyjs.org/̨).

You can access the production website [here](http://simoneferrero.net).

## Setup

To make local changes to this repo, follow these steps:

1. Install [nodejs](https://nodejs.org/en/) if you don't already have it
2. Install gatsby cli and surge cli as a npm global package:

```
npm install -g gatsby surge
```

3. Clone this repo and install node packages:

```
git clone https://github.com/simoneferrero/portfolio.git
cd portfolio
npm install
```

4. Create a `.env` file at the root of the project and add a GitHub token to access GitHub's graphql api:

```
GITHUB_TOKEN=github_token
```

5. Run the app in development mode:

```
npm start
```

6. Deploy with surge:

```
npm run deploy
```

## Technologies

These are the most important libraries used in this project:

- [Gatsby](https://www.gatsbyjs.org/̨) to bootstrap the project and handle server-side rendering
- [React v16](https://facebook.github.io/react/) for the UI
- [GraphQL](https://graphql.org/) to fetch and serve data
- [Emotion](https://emotion.sh/) and [Typography](https://kyleamathews.github.io/typography.js/) for styling
- [React Helmet](https://github.com/nfl/react-helmet) to manage document head
- [Webpack 4](https://webpack.js.org/) for development, hot module reloading and advanced bundling

## Features

Here's a list of some awesome features from this project:

- **Server side rendering**: The application is super fast and optimised
- **Page transitions**: While it looks and feels like a single page application, the app is actually built with more traditional page routing. This can be achieved thanks to page transitions
- **Dynamic data fetching with GraphQL**: Gatsby and GraphQL allow declarative and simple data fetching from external APIs. In this app, I use GitHub's GraphQL api and Medium's REST API
- **Automatic prettifying and linting**: Before every commit, the code is prettified and linted to check for any errors. Commits are aborted if errors are found
- **Automated deployment**: With Surge, deployment can be run from a single line of code

## TODOs

There's always something to improve:

- [x] Improve README
- [x] Audit and improve website's SEO and ranking
- [ ] Migrate to DNS with SSL
- [ ] Add tests
- [ ] Make app responsive for mobile/tablet
- [ ] Refactor and improve markup and styles
- [ ] Add css linting to emotion template literals
