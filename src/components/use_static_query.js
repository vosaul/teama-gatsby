import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            subtitle
            author
            description
            suka {
              image
              info
            }
            social {
              link
              title
            }
          }
        }
      }
    `
  )
  return site.siteMetadata
}
