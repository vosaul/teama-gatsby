module.exports = {
  siteMetadata: {
    title: `Teama`,
    subtitle: `VISUAL EFFECTS STUDIO`,
    description: `TEAMA is independent visual effects studio founded in 2020. Our artists have a huge experience working in hundreds of
        music videos, commercials and films in best VFX companies in Ukraine`,
    author: `@vosaul`,
    social: 
      [{ 
        link: "https://www.youtube.com/channel/UC3CDh3xGYOGA7CdVYXFO_Ew",
        icon: "ion-social-youtube ", 
        title: "youtube "
      },
      {
        link: "https://www.facebook.com/Teamapro-106009800973549/",
        icon: "ion-social-facebook",
        title: "facebook"
      },
      {
        link: "https://www.instagram.com/teama.pro/",
        icon: "ion-social-instagram",
        title: "instagram"
      },
      {
        link: "https://www.linkedin.com/company/teama-pro/",
        icon: "ion-social-linkedin",
        title: "linkedin"
    }]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
