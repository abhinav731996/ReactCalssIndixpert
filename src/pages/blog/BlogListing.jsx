import React from 'react'
import { Card, Col, Container, Image, NavLink, Row } from 'react-bootstrap'
import { blogData } from '../../data/blogsData'

const BlogListing = () => {
  return (
    <div>
      <h1>This is blog listing page</h1>
      <Container>
        <Row>
            {blogData.map((blog)=>{
                return(
                    <Col key={blog.id} md={4} className='mb-3'>
                        <Card className='h-100'>
                        <Image src={blog.image}/>
                            <Card.Body>
                                <h4>{blog.title}</h4>
                                <NavLink to="#">Read more...</NavLink>
                            </Card.Body>
                        </Card>                    
                    </Col>
                )
            })}

        </Row>
      </Container>
    </div>
  )
}

export default BlogListing
