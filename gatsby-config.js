module.exports = {
  siteMetadata: {
    title: `Teama`,
    subtitle: `VISUAL EFFECTS STUDIO`,
    description: `TEAMA is independent visual effects studio founded in 2020. Our artists have a huge experience working in hundreds of
        music videos, commercials and films in best VFX companies in Ukraine`,
    author: `@vosaul`,
    services: [
      {
        icon: "./Ionicons/film.svg",
        info: "TEAMA is an independent visual effects studio founded in 2020. Our artists  have a huge experience working in hundreds of music videos, commercials, and films in the best VFX companies in Ukraine.",
      },
      {
        icon: "./Ionicons/flower.svg",
        info: "We work on each project with an individual approach and give all our best at every stage of its implementation - from tests and concepts to the final delivery.",
      },
      {
        icon: "./Ionicons/videocam.svg",
        info: "We provide such ourServices as compositing, clean up, beauty retouch, matte painting, editing 360 videos, color grading, 3d  modeling, simulation, and animation, etc.",
      },
      {
        icon: "./Ionicons/rocket.svg",
        info: "Our main goal is to bring creativity in each shot and share positive experiences between us and the client.",
      },
    ],
    social: [
      {
        link: "https://www.youtube.com/channel/UC3CDh3xGYOGA7CdVYXFO_Ew",
        icon: "ion-social-youtube ",
        title: "youtube ",
      },
      {
        link: "https://www.facebook.com/Teamapro-106009800973549/",
        icon: "ion-social-facebook",
        title: "facebook",
      },
      {
        link: "https://www.instagram.com/teama.pro/",
        icon: "ion-social-instagram",
        title: "instagram",
      },
      {
        link: "https://www.linkedin.com/company/teama-pro/",
        icon: "ion-social-linkedin",
        title: "linkedin",
      },
    ],

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
  },
}
