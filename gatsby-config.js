module.exports = {
  siteMetadata: {
    author: `Benjamin Hera`,
    description: `Personal website for CV and for flexing w my non-existing front-end skills`,
    image: `/static/images/seo/img.png`,
    title: `Benjamin Hera`,
    siteUrl: `https://www.benjaminhera.me`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        background_color: `#f7f0eb`,
        display: `standalone`,
        icon: `static/media/images/favicon.png`,
        lang: `en`,
        name: `Benjamin Hera`,
        short_name: `CV`,
        start_url: `/`,
        theme_color: `#a2466c`
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-styled-components`
  ]
}
