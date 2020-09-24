/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    siteUrl: `https://www.tiroldragonbjj.com`,
    title: `Tirol Dragon BJJ - Brazilian Jiu Jitsu and Fitness Training`,
    author: {
      name: `Rory Aherne`,
    },
    description: `A club for Brazilian Jiu Jitsu BJJ and HiiT fitness training for all levels, ages and abilities`,

    /* Choose and arrange the sections to be displayed on the landing page */
    sections: [
      `hero`,
      `features`,
      `schedule`,
      `call-to-action`,
      `screenshots`,
      `testimonials`,
      `faqs`,
      `contact`
    ],

    keywords: ['bjj', 'brazilian jiu jitsu', 'fitness', 'Hiit'],

    siteVerification: {
      google: '',
      bing: ''
    },

    /* Configure the navigation menu */
    menuItems: [
      { path: 'features', label: 'about' },
      { path: 'schedule', label: 'schedule' },
      { path: 'call-to-action', label: 'news' },
      { path: 'screenshots', label: 'Screenshots' },
      { path: 'testimonials', label: 'Testimonials' },
      { path: 'faqs', label: 'faqs' },
      { path: 'contact', label: 'Contact' },
    ],

    /* Provide social media accounts. Remove or add new services. (The value 'fa' is the name of FontAwesome icon to display. Choose from here: https://fontawesome.com/cheatsheet/free/brands ) */
    social: [
      {
        service: `Facebook`,
        url: `https://www.facebook.com/BrasilienJiuJitsu/`,
        fa: `facebook`
      },
      {
        service: `Instagram`,
        url: `https://www.instagram.com/tiroldragonbjj/`,
        fa: `instagram`
      },
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
      zip: `6020`,
      city: `Innsbruck`,
      state: `Tirol`,
      country: `Austria`,
    },
    contacts: [
      { text: `+43 660 5188005`, url: `tel:+436605188005` },
      { text: `+43 660 1116278`, url: `tel:+436601116278` },
      { text: `contact@tiroldragonbjj.com`, url: `mailto:contact@tiroldragonbjj.com` },
    ],
  },
  plugins: [`gatsby-plugin-anchor-links`, `gatsby-plugin-smoothscroll`, `react-scrollspy`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [`/robots`, `/sitemap`]
      }
    }
  ],
}
