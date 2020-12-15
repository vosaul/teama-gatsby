module.exports = {
  siteMetadata: {
    title: `Teama`,
    subtitle: `VISUAL EFFECTS STUDIO`,
    description: `TEAMA is independent visual effects studio founded in 2020. Our artists have a huge experience working in hundreds of
        music videos, commercials and films in best VFX companies in Ukraine`,
    author: `@vosaul`,
    email: `pm@teama.pro`,
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
    works: [
      {
        title: "Flipperachi - T.N.F.S تنفس - فلبراتشي",
        tags: ["compositing", "clean up", "roto", "color correction"],
        link: "https://www.youtube.com/watch?v=-hjoEDQCvMQ?autoplay=1",
        image: "/images/7.jpg",
        img_m: "/images/7-748.jpg",
        img_s: "/images/7-580.jpg",
      },
      {
        title:
          "Vessbroz, Mark Voss Feat. Michelle Montezeri - In The Dark (360 Official Video)",
        tags: [
          "vr360",
          "video editing",
          "clean up",
          "color correction",
          "modeling",
          "animation",
          "compositing",
          "edit",
          "smoke simulation",
          "keying/roto",
        ],
        w_link: "https://www.youtube.com/watch?v=l4nrivLGFC0",
        image: "/images/6.png",
        img_m: "/images/6-748.png",
        img_s: "/images/6-580.png",
      },
      {
        title: "AVK Trueffle Escalator",
        tags: ["compositing", "clean up", "keying/roto"],
        w_link: "https://www.youtube.com/watch?v=ijRxRvgx0Vs",
        image: "/images/1.jpg",
        img_m: "/images/1-748.jpg",
        img_s: "/images/1-580.jpg",
      },
      {
        title: "Trueffle. Made right.",
        tags: ["compositing", "clean up", "keying/roto"],
        w_link: "https://www.youtube.com/watch?v=n7mIUxvHi3A",
        image: "/images/2.jpg",
        img_m: "/images/2-748.jpg",
        img_s: "/images/2-580.jpg",
      },
      {
        title: "Earth in The space",
        tags: ["3d", "compositing"],
        w_link: "https://www.youtube.com/watch?v=Rk_qYfnGnLM",
        image: "/images/3.jpg",
        img_m: "/images/3-748.jpg",
        img_s: "/images/3-580.jpg",
      },
      {
        title: "Teama",
        tags: [
          "full cg",
          "modeling",
          "animation",
          "crowd simulation",
          "fire simulation",
          "explosion simulation",
          "rain simulation",
          "hair simulation",
          "smoke simulation",
          "water simulation",
          "grains simulation",
          "edit",
          "compositing",
          "color grading",
          "sound design",
        ],
        info:
          'This is "TEAMA" by Saulyak Roman on Vimeo, the home for high quality videos and the people who love them.',
        w_link: "https://vimeo.com/430288087",
        image: "/images/4.png",
        img_m: "/images/4-748.png",
        img_s: "/images/4-580.png",
      },
      {
        title: "Inner Sanctum - Tainted Soils | OFFICIAL 360 DEGREE JAM VIDEO",
        tags: [
          "vr360",
          "Stiching",
          "Video Editing",
          "Clean Up",
          "Color correction",
        ],
        info:
          "This is a jam video of the band performing the track 'Tainted Soils' from the album Legions Awake. To watch this 360° video, you need the latest version of Chrome, Opera, Firefox, or MS Edge. On mobile devices, use the latest version of the YouTube app.",
        w_link: "https://www.youtube.com/watch?v=1VGUa-1Djko",
        image: "/images/5.jpg",
        img_m: "/images/5-748.jpg",
        img_s: "/images/5-580.jpg",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-instagram`,
      options: {
        // type: `user-profile`,
        username: `29225310943`,
      },
    },
    {
      resolve: `gatsby-plugin-styletron`,
      options: {
        // You can pass options to Styletron.
        // Prefix all generated classNames:
        prefix: `_`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // In your gatsby-transformer-remark plugin array
        plugins: [
          {
            resolve: "gatsby-remark-emojis",
            options: {
              // Deactivate the plugin globally (default: true)
              active: true,
              // Add a custom css class
              class: "emoji-icon",
              // In order to avoid pattern mismatch you can specify
              // an escape character which will be prepended to the
              // actual pattern (e.g. `#:poop:`).
              escapeCharacter: "#", // (default: '')
              // Select the size (available size: 16, 24, 32, 64)
              size: 64,
              // Add custom styles
              styles: {
                display: "inline",
                margin: "0",
                "margin-top": "1px",
                position: "relative",
                top: "5px",
                width: "30px",
              },
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `teama-visual-effects-studio`,
        short_name: `teama`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
