import React from "react"
import ScrollAnimation from 'react-animate-on-scroll'

import content from '../../content/contact.yaml'

export default () => (
  <section id="contact">
    <div className="row section-head">
      <div className="twelve columns">
        <h1>{ content.title }</h1>
        <p>{ content.body }</p>
    </div>
  </div>

  <div className="row">
    <div className="twelve columns">
      <div id="mc_embed_signup">
        <form name="contact" method="POST" data-netlify="true" action="thank-you" netlify-honeypot="bot-field">
        <p class="hidden" style="display: none;">
          <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
        </p>
          <ScrollAnimation animateIn="fadeInLeftBig" animateOnce={true}>
            <input
              type="email"
              defaultValue=""
              name="EMAIL"
              className="email"
              id="mce-EMAIL"
              placeholder="email address"
              required
            />
          </ScrollAnimation>
             <div className="clear">
               <ScrollAnimation
                 animateIn="fadeInRightBig"
                 animateOnce={true}
               >
                 <input
                   type="submit"
                   value="Register"
                   name="Register"
                   id="mc-embedded-subscribe"
                   className="button"
                 />
               </ScrollAnimation>
             </div>

           </form>
         </div>

         <p><small>{ content.small }</small></p>

       </div>

     </div>

   </section>
)
