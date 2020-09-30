import { useStaticQuery, graphql } from "gatsby"
export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query MyQuery {
        site {
          siteMetadata {
            siteUrl
            title
            description
            author{
              name
            }
            siteVerification{
              google
              bing
            }
            sections
            favicon
            logo
            menuItems{
              path
              label
            }
            social{
              service
              url
              fa
            }
            keywords
            footer{
              text
              logo
            }
            address{
              line1
              zip
              city
              state
              country
            }
            contacts {
              text
              url
              icon
            }
          }
        }
      }
    `
  )
  return site.siteMetadata
}
