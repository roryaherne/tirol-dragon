import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { useSiteMetadata } from "../hooks/use-site-metadata"

import content from "../../content/hero.yaml"

import "../styles/components/hero.less"

export default () => (
  <section id="hero" className="hero">
    <div className="row">
      <div className="twelve columns">
        <div className="hero-text">
          <img alt="logo" src={ useSiteMetadata().logo } className="hero-image"/>
          <h1 className="responsive-headline">{ content.headline }</h1>
          <p>{ content.body }</p>
        </div>

        <div className="buttons">
          <AnchorLink className="button learn-more" to={ content.button2.to }>{ content.button2.label }</AnchorLink>
        </div>

        {/* <div className="hero-image">
          <img src={ content.image } alt="hero" />
        </div> */}
      </div>
    </div>
  </section>
)
