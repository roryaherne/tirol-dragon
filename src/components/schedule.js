import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import ScheduleDay from "./schedule-day"

export default function () {

    const data = useStaticQuery(
        graphql`
        query ScheduleQuery2 {
            allFile(filter: {relativePath: {glob: "schedule/*"}}) {
              group(field: childMarkdownRemark___frontmatter___day) {
                edges {
                node {
                  childMarkdownRemark {
                    frontmatter {
                      endTime
                      startTime
                      day
                      classLabel
                    }
                  }
                }
              }
              }
            }
          }
    `)

    return (
        <section id="schedule">
            <div className="section-head">
                <h2>Schedule</h2>
                <p>Class times are as follows</p>
            </div>

            <div className="row">
                <div className="schedule-tables bgrid-fifths s-bgrid-halves">
                    {data.allFile.group.map(({ edges }, index) => (
                        <ScheduleDay edges={edges}></ScheduleDay>
                    ))}
                </div>
            </div>
        </section>
    )
}

