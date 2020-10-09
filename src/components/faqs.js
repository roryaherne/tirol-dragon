import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import FAQPage from './structured-data/faqPage'

import "../styles/components/faqs.less"

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';


export default () => {

  const data = useStaticQuery(
    graphql`
    query FaqsQuery {
      allFile(filter: {relativePath: {glob: "faqs/*"}}) {
        edges {
          node {
            childMarkdownRemark {
              frontmatter {
                title
                answer
              }
            }
          }
        }
      }
    }
    `)

  return (
    <section id="faqs">
      <div className="row content">
        <div className="text-container">
          <div className="section-head">
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="twelve columns flex-container">
            <div className="accordion-wrapper">
              <Accordion allowZeroExpanded="true">
              {data.allFile.edges.map(({ node: {childMarkdownRemark: {frontmatter}} }, index) => (
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <h3 className='heading'>{frontmatter.title}</h3>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        {frontmatter.answer}
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
      <FAQPage faqs={data.allFile.edges} />
    </section>
  )
}
