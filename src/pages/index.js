import React from "react"

import Layout from "../components/layout"

import Hero from "../components/hero"
import Features from "../components/features"
import Schedule from "../components/schedule"
import CalltoAction from "../components/call-to-action"
import Testimonials from "../components/testimonials"
import Contact from "../components/contact"
import FAQS from "../components/faqs"

import { useSiteMetadata } from "../hooks/use-site-metadata"

export default () => {
  const { sections } = useSiteMetadata()
  const availableSections = {
    "hero": Hero,
    "features": Features,
    "schedule": Schedule,
    "call-to-action": CalltoAction,
    "testimonials": Testimonials,
    "faqs": FAQS,
    "contact": Contact
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
