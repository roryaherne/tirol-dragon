import React from "react"

import Layout from "../components/layout"

import Hero from "../components/hero"
import Features from "../components/features"
import Schedule from "../components/schedule"
import Coaches from "../components/coaches"
import Testimonials from "../components/testimonials"
import FAQS from "../components/faqs"

import { useSiteMetadata } from "../hooks/use-site-metadata"

export default () => {
  const { sections } = useSiteMetadata()
  const availableSections = {
    "hero": Hero,
    "features": Features,
    "schedule": Schedule,
    "coaches": Coaches,
    "testimonials": Testimonials,
    "faqs": FAQS,
  }

  return(
    <>
      <Layout>
        { sections.map(section => {
          let Tagname = availableSections[section]
          return <Tagname />
        }) }
      </Layout>
    </>
  )
}
