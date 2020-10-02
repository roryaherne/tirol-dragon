import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import scrollTo from "gatsby-plugin-smoothscroll"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faMapMarkerAlt, faUsers, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import "../styles/components/footer.less"

export default () => {
    const { social, footer, address, contacts } = useSiteMetadata()
    return (
        <footer className="footer">
            <div className="row">
                <div className="six columns info">

                    <div className="footer-logo">
                        <AnchorLink to="/">
                            <img src={footer.logo} alt="" />
                        </AnchorLink>
                    </div>

                    <p>{footer.text}</p>

                </div>

                <div className="six columns right-cols">
                    <div className="row">
                        <div className="columns">
                            <a href={`https://www.google.com/maps/search/?api=1&query=${address.line1},+${address.zip}+${address.city}`} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                                <h3 className="address">Come Visit</h3>
                                <p>
                                    {address.line1}<br />
                                    {address.zip} {address.city}<br />
                                    {address.country}
                                </p>
                            </a>
                        </div>

                        <div className="columns">
                            <FontAwesomeIcon icon={faUsers} />
                            <h3 className="social">socialize</h3>
                            <ul>
                                {social.map(mySocial =>
                                    <li key={mySocial.service}>
                                        <a href={mySocial.url} target="_blank" rel="noopener noreferrer">
                                            {mySocial.service}
                                        </a></li>
                                )}
                            </ul>
                        </div>

                        <div className="columns last">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <h3 className="contact">Contact Us</h3>
                            <ul>
                                {contacts.map((contact, index) =>
                                    <li key={index}>
                                        <a href={contact.url}><FontAwesomeIcon icon={contact.icon} /> {contact.text}</a>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>

                <p className="copyright">&copy; 2020 Rory Aherne</p>

                <div id="go-top">
                    <button title="Back to Top" onClick={() => scrollTo('#top')}>
                        <FontAwesomeIcon icon={faChevronUp} />
                    </button>
                </div>
            </div>
        </footer>

    )
}
