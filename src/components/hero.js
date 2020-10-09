import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import BrandSVG from "./svgs/brand-icon"

import content from "../../content/config.yml"

import "../styles/components/hero.less"

export default () => (
  <section id="hero" className="hero">
    <div className="row">
      <div className="twelve columns">
        <div className="hero-text">
          <div className="hero-image">
            <BrandSVG></BrandSVG>
          </div>
          <h1 className="responsive-headline">{ content.heroHeadline }</h1>
          <p>{ content.heroBody }</p>
        </div>

        <div className="buttons">
          <AnchorLink className="button learn-more" to='#features'>Learn More</AnchorLink>
        </div>
      </div>
    </div>
  </section>
)
