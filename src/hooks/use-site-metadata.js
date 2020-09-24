import { useStaticQuery, graphql } from "gatsby"
export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query MyQuery {
        site {
          siteMetadata {
            url
            title
            description
            author{
              name
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
            }
          }
        }
      }
    `
  )
  return site.siteMetadata
}
