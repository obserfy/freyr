const plugins = [
  // Load assets and pages ===================================================
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/src/docs`,
      name: `docs`,
    },
  },

  // Setup SEO ===============================================================
  `gatsby-plugin-remove-trailing-slashes`,
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Obserfy`,
      short_name: `Obserfy`,
      start_url: `/`,
      background_color: `#ffffff`,
      theme_color: `#ffffff`,
      display: `standalone`,
      icon: `src/images/logo-transparent.png`,
      icon_options: {
        purpose: `any maskable`,
      },
    },
  },
  `gatsby-plugin-react-helmet`,
  {
    resolve: `gatsby-plugin-canonical-urls`,
    options: {
      siteUrl: `https://obserfy.com`,
    },
  },
  // {
  //   resolve: `gatsby-plugin-sitemap`,
  //   options: {
  //     exclude: [`/id/404*`, `/id/privacy-policy`],
  //   },
  // },

  // Build pages with MDX and i18n support ==================================
  {
    resolve: `gatsby-theme-i18n`,
    options: {
      defaultLang: `en`,
      configPath: require.resolve(`./i18n/config.json`),
    },
  },
  `gatsby-remark-images`,
  {
    resolve: `gatsby-plugin-mdx`,
    options: {
      gatsbyRemarkPlugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            quality: 80,
            withWebp: true,
            withAvif: true,
          },
        },
        `gatsby-remark-prismjs`,
      ],
    },
  },
  {
    resolve: `gatsby-theme-i18n-lingui`,
    options: {
      localeDir: `./i18n/lingui`,
    },
  },

  // Image and bundle size optimization ======================================
  `gatsby-plugin-image`,
  `gatsby-transformer-sharp`,
  {
    resolve: `gatsby-plugin-sharp`,
    options: {
      defaultQuality: 80,
    },
  },
  `gatsby-plugin-preload-fonts`,

  // Devtools and other stuffs ===============================================
  {
    resolve: `gatsby-plugin-typegen`,
    options: {
      emitSchema: {
        "src/__generated__/gatsby-schema.graphql": true,
      },
    },
  },
  `gatsby-plugin-postcss`,
  `gatsby-plugin-gatsby-cloud`
  // {
  //   resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
  //   options: {
  //     analyzerPort: 3000,
  //   },
  // },
]

if (process.env.NODE_ENV === "production") {
  plugins.push(`gatsby-plugin-preact`)
}

module.exports = {
  flags: {
    DEV_SSR: true,
    FAST_DEV: true,
  },
  siteMetadata: {
    title: `Obserfy`,
    description: `Obserfy is an open-source record keeping and parent communication tool, built for Montessori schools.`,
    author: `@chrsep`,
    siteUrl: `https://obserfy.com`,
  },
  plugins,
}
