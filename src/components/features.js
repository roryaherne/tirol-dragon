import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ScrollAnimation from 'react-animate-on-scroll'

export default function() {

  const data = useStaticQuery(
    graphql`
    query FeaturesQuery {
      allFile(filter: {relativePath: {glob: "features/*"}}, sort: {fields: childMarkdownRemark___frontmatter___order}) {
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

  console.log(data)

  return(
  <section id='features' className='white-section'>
    {data.allFile.edges.map(({ node: {childMarkdownRemark: {frontmatter}} }, index) => {

      let pos, imagepos
      if (index % 2 === 0) {
        pos = "right"
        imagepos = "left"
      } else {
        pos = "left"
        imagepos = "right"
      }

      return (
        <div className={'row feature ' + frontmatter.name}>
          <div className={'six columns ' + pos}>
            <h3>{frontmatter.title}</h3>
            <p>{frontmatter.about}</p>
          </div>

          <ScrollAnimation
            animateIn="pulse"
            animateOnce={true}
            initiallyVisible={true}
            className={'six columns feature-media ' + imagepos}
          >
            <img src={frontmatter.image} alt="" />
          </ScrollAnimation>
        </div>
      )
    })}
  </section>
)

}
