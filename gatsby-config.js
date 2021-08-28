module.exports = {
  siteMetadata: {
    author: `Benjamin George Hera`,
    description: `Benjamin George Hera here! Testing out the Three.js library in React with React Three Fiber. Kinda cool, come back for something even cooler 😎`,
    image: `/static/images/seo/img.jpg`,
    title: `Benjamin Hera - professional retard and dev`,
    siteUrl: `https://www.benjaminhera.me`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        background_color: `#f7f0eb`,
        display: `standalone`,
        icon: `static/media/images/misc/favicon.jpg`,
        lang: `en`,
        name: `Benjamin Hera`,
        short_name: `CV`,
        start_url: `/`,
        theme_color: `#a2466c`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
  ],
}
