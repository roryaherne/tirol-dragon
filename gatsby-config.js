/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `TIROL DRAGON BRAZILIAN JIU JITSU`,
    author: {
      name: `Rory Aherne`,
    },
    description: `TIROL DRAGON BRAZILIAN JIU JITSU`,

    /* Choose and arrange the sections to be displayed on the landing page */
    sections: [
      `hero`,
      `features`,
      `schedule`,
      `call-to-action`,
      `screenshots`,
      `testimonials`,
      `contact`
    ],

    /* Configure the navigation menu */
    menuItems: [
      {path: 'features', label: 'about'},
      {path: 'schedule', label: 'schedule'},
      {path: 'call-to-action', label: 'news'},
      {path: 'screenshots', label: 'Screenshots'},
      {path: 'testimonials', label: 'Testimonials'},
      {path: 'contact', label: 'Contact'},
    ],

    /* Provide social media accounts. Remove or add new services. (The value 'fa' is the name of FontAwesome icon to display. Choose from here: https://fontawesome.com/cheatsheet/free/brands ) */
    social: [
      { service: `Facebook`,
        url : `https://www.facebook.com/BrasilienJiuJitsu/`,
        fa: `facebook` },
      { service: `Instagram`,
        url : `https://www.instagram.com/tiroldragonbjj/`,
        fa: `instagram` },
    ],

    /* Path to favicon and logo (located inside the 'static' folder) */
    favicon: `favicon.png`,
    logo: `/images/logo.svg`,

    /* Logo and text to show in footer */
    footer: {
      logo: `/images/logo.svg`,
      text: `This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.`,
    },

    /* Address and contact info to show in footer */
    address: {
      line1: `Valiergasse 61`,
      line2: `6020 Innsbruck`,
      line3: `Austria`,
    },
    contacts: [
      { text: `+43 660 5188005`, url: `tel:+436605188005` },
      { text: `+43 660 1116278`, url: `tel:+436601116278`},
      { text: `contact@tiroldragonbjj.com`, url: `mailto:contact@tiroldragonbjj.com`},
    ],
  },
  plugins: [ `gatsby-plugin-anchor-links`, `gatsby-plugin-smoothscroll`, `react-scrollspy` ],
}