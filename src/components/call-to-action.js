import React from "react"
import content from "../../content/call-to-action.yaml"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAmbulance } from '@fortawesome/free-solid-svg-icons'

export default () => (
  <section id="call-to-action">
    <div className="row">
      <div className="two columns header-col">
        <h1><FontAwesomeIcon icon={faAmbulance} /><span>Covid News</span></h1>
      </div>
      <div className="seven columns">
        <h2><a href={ content.title.url }>{ content.title.text }</a></h2>
        <p
          dangerouslySetInnerHTML={{ __html: content.body }}
        />
      </div>
    </div>
  </section>
)
