import React from "react"
import Layout from "../components/layout"


import content from "../../content/404.yaml"

export default () => {
 

  return(
    <>
      <Layout>
        <section id="404">
          <h1>{content.title}</h1>
          <p>
            {content.body}
          </p>
        </section>
      </Layout>
    </>
  )
}
