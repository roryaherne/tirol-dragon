import React from "react"

import content from '../../content/contact.yaml'

export default () => (
  <section id="contact">
    <div className="row section-head">
      <div className="twelve columns">
        <h2>{content.title}</h2>
        <p>{content.body}</p>
      </div>
    </div>

    <div className="row">
      <div className="twelve columns">
        <div id="ContactUsForm">
          <form name="contact" method="POST" data-netlify="true" action="/thank-you" netlify-honeypot="bot-field">
            <p hidden>
              <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
            </p>

            <input
              type="text"
              defaultValue=""
              name="NAME"
              className="name"
              placeholder="name*"
              required
            />

            <input
              type="email"
              defaultValue=""
              name="EMAIL"
              className="email"
              placeholder="email address*"
              required
            />

            <textarea name="MESSAGE" className="message" placeholder="message"></textarea>

            <input
              type="submit"
              value="Register"
              name="Register"
              className="button"
            />

          </form>
        </div>

        <p><small>{content.small}</small></p>

      </div>

    </div>

  </section>
)
