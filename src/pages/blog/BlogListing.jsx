import React, { useState } from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import { blogData } from "../../data/blogsData";
import { NavLink, useNavigate } from "react-router-dom";

const BlogListing = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const filteredBlogs = blogData.filter(
    (blog) =>
      blog.title.toLowerCase().includes(search.toLowerCase()) ||
      blog.body.toLowerCase().includes(search.toLowerCase()) ||
      blog.id.toString().includes(search),
  );

  return (
    <div>
      <h1>This is blog listing page</h1>
      <hr />

      <Form.Control
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <hr />

      <Container>
        <Row>
          {filteredBlogs.map((blog) => (
            <Col key={blog.id} md={4} className="mb-3">
              <Card className="h-100">
                <Card.Img src={blog.image} />
                <Card.Body>
                  <h4>{blog.title}</h4>

                  <NavLink to={`/blog-details/${blog.id}`}>
                    Blog details
                  </NavLink>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default BlogListing;
