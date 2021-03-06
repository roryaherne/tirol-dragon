import React from "react"
import { Helmet } from "react-helmet"

import { useSiteMetadata } from "../hooks/use-site-metadata"

import Header from "./header"
import Footer from "./footer"
import Organisation from "./structured-data/organisation"

import "../styles/default.less"
import "../styles/layout.less"
import "../styles/media-queries.css"
import "../styles/animate.css"
import "../styles/components/schema.less"

import 'typeface-open-sans';
import 'typeface-montserrat';

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function Layout({ children }) {

  const { title, description, author, favicon, logo, url } = useSiteMetadata()

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="author" content={author.name} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="shortcut icon" href={'/' + favicon} type="image/png" />
        <meta name="robots" content="index,follow" />
        <link href={url} rel="canonical" />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={logo} />
        <meta property="og:site_name" content={title} />
        <meta property="og:description" content={description} />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Helmet>
      <Organisation />
      <Header />

      <main id="top">
        {children}
      </main>

      <Footer />
      <script dangerouslySetInnerHTML={{
        __html: `
        if (window.netlifyIdentity) {
          window.netlifyIdentity.on("init", user => {
            if (!user) {
              window.netlifyIdentity.on("login", () => {
                document.location.href = "/admin/";
              });
            }
          });
        }
`}} />
    </>
  )
}
