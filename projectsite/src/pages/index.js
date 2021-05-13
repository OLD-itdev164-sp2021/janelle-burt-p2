import React from "react"
import { Link, graphql} from "gatsby"
import {Box, Flex, Image, Card, Heading} from 'rebass'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
 
import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroImage from "../components/heroimage"

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <HeroImage/>
    
      {data.allContentfulBlogPost.edges.map(edge => (
        <Flex flexWrap='wrap' mx={-2}>
        <Box px={2} py={2} width={1/2}>
    <Card width={256}>
      
         <Image src={edge.node.heroImage.fluid.src} alt="hero image" />
      
          <Heading>
         <Link to={edge.node.slug} itemProp="url">
               <span itemProp="headline">{edge.node.title}</span>
                </Link>
        </Heading>
        <h3>{edge.node.description}</h3>
    </Card>
    </Box>
    </Flex>
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