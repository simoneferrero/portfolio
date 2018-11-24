require('dotenv').config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: "Simone Ferrero's Portfolio",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout/index.js`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'GitHub',
        fieldName: 'github',
        url: 'https://api.github.com/graphql',
        headers: {
          Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
        },
      },
    },
    {
      resolve: `gatsby-source-medium`,
      options: {
        username: `@simoneferrero`,
        limit: 10,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Simone Ferrero's Portfolio",
        short_name: 'portfolio',
        start_url: '/',
        background_color: '#1d1f23',
        theme_color: '#1d1f23',
        display: 'minimal-ui',
        icon: 'src/images/main-logo.png',
      },
    },
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-emotion',
    'gatsby-plugin-offline',
  ],
}
