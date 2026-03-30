import React, { Fragment, useEffect, useState } from "react";
import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";

const FetchAPI = () => {
  const [products, setProducts] = useState([]); // FIX
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // better practice

  const getProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      if (!response.ok) {
        throw new Error("Server or Network response issues.");
      }
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      setError(error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  useEffect(() => {
    setLoading(true);
    getProducts();
    // setTimeout(() => {
    //   setLoading(false);
    // }, 1000);

    // fetch("https://dummyjson.com/products")
    //   .then((response) => response.json())
    //   .then((data) => setProducts(data.products))
    //   .catch((error) => setError(error))
    //   .finally(() => {
    //     setTimeout(() => {
    //       setLoading(false);
    //     }, 1000);
    //   });
  }, []); // FIX: runs only once

  return (
    <div>
      <h4 className="text-center mt-3">This is Fetch API</h4>

      <Container>
        <Row>
          {loading ? (
            <Col className="text-center">
              {" "}
              <Spinner animation="border" /> Products are loading....
            </Col>
          ) : error ? (
            <Col className="text-danger text-center">Something went wrong!</Col>
          ) : (
            <Fragment>
              {products.map((product) => {
                return (
                  <Col md={3} key={product.id} className="mb-3">
                    <Card>
                      <Card.Img src={product.thumbnail} />
                      <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                      </Card.Body>
                      <Card.Footer className="d-flex justify-content-between bg-white">
                        <Button size='sm' variant='outline-primary'>
                          Add to Cart
                        </Button>
                        
                        <Button size='sm' variant='outline-success'>
                          Add to Cart
                        </Button>

                      </Card.Footer>
                    </Card>
                  </Col>
                );
              })}
            </Fragment>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default FetchAPI;
