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
        <form name="contact" method="POST" data-netlify="true">
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
             {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
             <div style={{position: "absolute", left: "-5000px"}}>
               <input type="text" name="b_cdb7b577e41181934ed6a6a44_e65110b38d" defaultValue="" />
             </div>
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