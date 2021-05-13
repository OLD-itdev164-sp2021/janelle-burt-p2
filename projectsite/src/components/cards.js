/* import Img from "gatsby-plugin-image"
import PropTypes from 'prop-types'
import React from "react"
import {useStaticQuery, graphql} from 'gatsby'
import {Box, Card, Heading} from 'rebass'

const Cards = props => {
    const {name, image} = props

 
return(
<Box width={256}>
    <Card
      sx={{
        p: 1,
        borderRadius: 2,
        boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
      }}>
      <Img src={image} />
      <Box px={2}>
        <Heading as='h3'>
          {name}
        </Heading>
      </Box>
    </Card>
  </Box>
)
    }

    Cards.PropTypes = {
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
    }
   
    export default Cards

    export const pageQuery = graphql`
    query GalleryQuery {
        allContentfulGalleryImage {
          edges {
            node {
              id
              image {
                fluid {
                  src
                }
              }
              name
            }
          }
        }
      }
      
      
`

 */