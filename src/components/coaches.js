import React from "react"
import content from '../../content/coaches.yaml'

import "../styles/components/coaches.less"

export default () => (
  <section id="coaches" className='white-section'>
    <div className="row content">
      <div className="text-container">
        <div className="row section-head">
          <h2>{content.title}</h2>
        </div>
        <div className="twelve columns flex-container">
          {content.coaches.map((coach, index) =>
            <div className="coach">
              <h3>{coach.name}</h3>
              <div className="round-image">
                <img src={coach.image} alt="coach" />
              </div>
              <p>
                {coach.about}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  </section>
)
