import React from "react"
import content from "../../content/schedule.yaml"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

export default () => {

  library.add(fas)



  return (
    <section id="schedule">
      <div className="section-head">
        <h2>{content.title}</h2>
        <p>{content.body}</p>
      </div>

      <div className="row">
        <div className="schedule-tables bgrid-fifths s-bgrid-halves">
          {content.days.map((day, index) =>
            <div className="column no-padding">
              <div className="day-block">
                <h3 className="day">
                  {day.name}
                </h3>
                {day.classes.map((unit, index) =>
                  <React.Fragment>
                  <p className="plan-time">
                    <span>{unit.start} - {unit.end}</span>
                  </p>
                  <footer className="plan-label">
                    {unit.label}
                  </footer>
                  </React.Fragment>
                )
                }
              </div>
            </div>
          )
          }
        </div>
      </div>
    </section>
  )
}
