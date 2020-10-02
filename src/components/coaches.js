import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Coach from "./coach";

import "../styles/components/coaches.less"

export default function Coaches() {

  const data = useStaticQuery(
    graphql`
    query CoachesQuery {
      allFile(filter: {relativePath: {glob: "coaches/*"}}, sort: {fields: childMarkdownRemark___frontmatter___order}) {
        edges {
          node {
            childMarkdownRemark {
              frontmatter {
                image
                title
                about
              }
            }
          }
        }
      }
    }
    `)

  const cols = Math.floor(12 / data.allFile.edges.length);

  return (

    <section id="coaches" className='white-section'>
      <div className="row content">
        <div className="text-container">
          <div className="section-head">
            <h2>Coaches</h2>
          </div>
          <div className="twelve columns grid">
            {data.allFile.edges.map(({ node: {childMarkdownRemark: {frontmatter}} }, index) => (
              <Coach coach={frontmatter} cols={cols}></Coach>
            ))}
          </div>
        </div>
      </div>
    </section >
  )

}
