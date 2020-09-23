import React from "react"
import content from '../../content/faqs.yaml'

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';


export default () => {



  return (
    <section id="faqs">
      <div className="row content">
        <div className="text-container">
          <div className="row section-head">
            <h1>{content.title}</h1>
          </div>
          <div className="twelve columns flex-container">
            <p className="accordion-wrapper">
              <Accordion allowZeroExpanded="true">
                {content.faqs.map((faq, index) =>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <h5>{faq.question}</h5>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                    <p>
                    {faq.answer}
                    </p>
                </AccordionItemPanel>
                    </AccordionItem>
                      )}
            </Accordion>
            </p>
          </div>
        </div>
          </div>
    </section>
  )
}
