import React from "react"

import "../styles/components/schedule-day.less"

export default ({ edges }) => (
    <div className="column no-padding">
        <div className="day-block">
            <h3 className="day">
                {edges[0].node.childMarkdownRemark.frontmatter.day}
            </h3>
            {edges.map(({ node: {childMarkdownRemark: {frontmatter}} }) => (
                <React.Fragment>
                    <p className="plan-time">
                        <span>{frontmatter.startTime} - {frontmatter.endTime}</span>
                    </p>
                    <footer className="plan-label">
                        {frontmatter.classLabel}
                    </footer>
                </React.Fragment>
            ))}
        </div>
    </div>
)