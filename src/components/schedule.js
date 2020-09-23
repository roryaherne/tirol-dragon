import React from "react"
import content from "../../content/schedule.yaml"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

export default () => {

  library.add(fas)

  return (
    <section id="schedule">
      <div className="row section-head">
        <h1>{ content.title }</h1>
        <p>{ content.body }</p>
      </div>

      <div className="row">
        <div className="schedule-tables bgrid-sixths s-bgrid-halves">
          { content.classes.map((plan, index) =>
            <div className="column">
              <div className="price-block">
                <h3 className="plan-title">
                  { plan.day }
                </h3>
                <p className="plan-price">
                  <span>{ plan.start } - { plan.end }</span>
                </p>
                <footer className="plan-sign-up">
                { plan.label }
                </footer>
              </div>
            </div>
          )
          }
        </div>
      </div>
    </section>
  )
}
