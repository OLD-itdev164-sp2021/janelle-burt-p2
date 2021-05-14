import React from "react"
import {graphql} from "gatsby"
import { Image, Card, Heading} from 'rebass'
import {Box, Flex} from '@rebass/grid'

 
import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroText from "../components/herotext"

 
const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <HeroText/>
    
      {data.allContentfulBlogPost.edges.map(edge => (
     <Box sx={{
      display: 'inline',
      gridGap: 3,
         
       }}> 
     <Flex flexWrap='wrap'  style={{ maxWidth: "1200px", margin: "0 auto" }} >
   <Box  mx={6} width={1/2} px={2} >
<Card>
         <Image src={edge.node.heroImage.fluid.src} alt="gallery art" />
      
          <Heading>
        {edge.node.title}
        </Heading>
        <h3>{edge.node.description}</h3>
    </Card>
    </Box>
  </Flex>
    </Box>
    ))
    }
    
  </Layout>
)


export default IndexPage

export const query = graphql`
  {
    allContentfulBlogPost {
      edges {
        node {
          id
          title
          slug
          heroImage {
            fluid(maxWidth: 600) {
              src
            }
          }
          body {
            childMarkdownRemark {
              excerpt
            }
          }
        }
      }
    }
  }
`