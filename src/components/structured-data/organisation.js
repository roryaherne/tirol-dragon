import React from "react"
import { useSiteMetadata } from "../../hooks/use-site-metadata"
import { JSONLD, Generic } from 'react-structured-data';


export default function () {

    const { url, address, social, logo } = useSiteMetadata()

    function getSocialLinksArray(){
        return social.map((socialObj, index) =>
            socialObj.url
        );
    }

    function getOrganisationObject() {
        var obj = {
            name: "Tirol Dragon BJJ",
            legalName: "Tirol Dragon BJJ",
            url: url,
            logo: `${url}${logo}`,
            foundingDate: "2016",
            founders: [{
                "@type": "Person",
                name: "Victor Duarte"
            }
            ],
            address: {
                "@type": "PostalAddress",
                streetAddress: address.line1,
                addressLocality: address.city,
                addressRegion: address.state,
                postalCode: address.zip,
                addressCountry: address.country
            },
            contactPoint: {
                "@type": "ContactPoint",
                contactType: "enquiries",
                telephone: "[+43 660 5188005]",
                email: "contact@tiroldragonbjj.com"
            },
            sameAs: getSocialLinksArray()
        }

        return obj;
    }

    return (
        <JSONLD>
            <Generic type="Organization" jsonldtype="Organization" schema={getOrganisationObject()}>
            </Generic>
        </JSONLD>
    )
}
