import React from "react"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import "../styles/components/card.less"

export default ({ coach, cols }) => (
    <div className={`coach card col-sm-${cols}`}>
        <div className="image-wrapper">
        <LazyLoadImage src={coach.image} alt="coach"/>
        </div>
        <div className="text-wrapper">
            <div className="outer-spacing">
                <div className="inner-spacing">
                    <h3>{coach.title}</h3>
                    <p>
                        {coach.about}
                    </p>
                </div>
            </div>
        </div>
    </div>
)