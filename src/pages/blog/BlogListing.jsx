import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { blogData } from "../../data/blogsData";
import { NavLink } from "react-router-dom";

const BlogListing = () => {
  return (
    <div>
      <h1>This is blog listing page</h1>
      <Container>
        <Row>
          {blogData.map((blog) => {
            return (
              <Col key={blog.id} md={4} className="mb-3">
                <Card className="h-100">
                  <Card.Img src={blog.image} />
                  <Card.Body>
                    <h4>{blog.title}</h4>
                    {/* <NavLink to="#">Read more...</NavLink> */}
                    <NavLink to={`/blog-details/${blog.id}/${blog.slug}`}>
                      Blog details
                    </NavLink>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default BlogListing;
