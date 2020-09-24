import React from "react"
import content from '../../content/faqs.yaml'
import FAQPage from './structured-data/faqPage'

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
            <h2>{content.title}</h2>
          </div>
          <div className="twelve columns flex-container">
            <p className="accordion-wrapper">
              <Accordion allowZeroExpanded="true">
                {content.faqs.map((faq, index) =>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <h3 className='heading'>{faq.question}</h3>
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
      <FAQPage faqs={content.faqs} />
    </section>
  )
}
