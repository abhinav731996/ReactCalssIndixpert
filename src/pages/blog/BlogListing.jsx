import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { blogData } from "../../data/blogsData";
import { NavLink, useNavigate } from "react-router-dom";

const BlogListing = () => {
  const navigate = useNavigate();
  const handleButtonClick = ()=> {
    navigate("/blog-details/3/dave-watched-as-the-forest-burned-up-on-the-hill")
  }
  return (
    <div>
      <h1>This is blog listing page</h1>
      <hr />
      <Button onClick={()=> navigate(1)} >Next Page</Button>{" "}
      <Button onClick={handleButtonClick} >Navigate tpo blog 3</Button>
      
      <hr />
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
