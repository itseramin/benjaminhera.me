import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useLocation } from "@reach/router"
import { Helmet } from "react-helmet"

const Seo = ({ author, description, image, title, url }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)

  const {
    defaultAuthor,
    defaultDescription,
    defaultImage,
    defaultTitle,
    defaultUrl,
  } = site.siteMetadata
  const seo = {
    author: author || defaultAuthor,
    description: description || defaultDescription,
    image: image || `${defaultUrl}${defaultImage}`,
    title: title || defaultTitle,
    url: url || `${defaultUrl}${pathname}`,
  }

  return (
    <Helmet title={seo.title} htmlAttributes={{ lang: "en" }}>
      <meta name="author" content={seo.author} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:site_name" content="Apartment Mehes" />
    </Helmet>
  )
}

export default Seo

Seo.propTypes = {
  author: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
}
Seo.defaultProps = {
  author: null,
  description: null,
  image: null,
  title: null,
  url: null,
}
const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultAuthor: author
        defaultDescription: description
        defaultImage: image
        defaultTitle: title
        defaultUrl: siteUrl
      }
    }
  }
`
