import React from "react"
import { JSONLD, Generic } from 'react-structured-data';


export default function ({ faqs }) {


    function getFAQsArray() {
        var faqsArray = [];

        faqs.map((faq, index) => {
            var faqObj = {
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.answer
                }
            };
            faqsArray.push(faqObj);
        });
        return faqsArray;
    }


    return (
        <JSONLD>
            <Generic type="FAQPage" jsonldtype="FAQPage" schema={{ mainEntity: getFAQsArray() }}>
            </Generic>
        </JSONLD>
    )
}
