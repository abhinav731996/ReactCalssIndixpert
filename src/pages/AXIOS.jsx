import axios from "axios";

import React, { Fragment, useContext, useEffect, useState } from "react";
import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { api, fetchProducts } from "../api/Services";
import { WishlistContext } from "../context/Context";

const AXIOS = () => {

  // for add to cart
  const {wishlistState, wishlistDispatch} = useContext(WishlistContext)

  const [products, setProducts] = useState([]); // FIX
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // better practice

  const getProducts = async () => {
    try {
      //   const response = await axios.get("https://dummyjson.com/products");

      //    const response = await api.get("/products");
      //   setProducts(response.data.products);

      const response = await fetchProducts();
      setProducts(response.products);
    } catch (error) {
      setError(error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  //   const getProducts = async () => {
  //     const response = await axios.get("https://dummyjson.com/products")
  //     setProducts(response.data.products)
  //   }
  useEffect(() => {
    setLoading(true);
    getProducts();
    // setTimeout(() => {
    //     setLoading(false)
    // }, 1000);

    // axios.get("https://dummyjson.com/products")
    // .then(response => setProducts(response.data.products))
    // .catch(error => setError(error))
    // .finally(setTimeout(() => {
    //     setLoading(false)
    // }, 1000))
  }, []);

  // // add to wishlist component
  const AddToWishlist = ({product})=>{
    return(
      <Button size="sm" variant="outline-success"
                        onClick={()=> wishlistDispatch(
                          {
                            type:"ADD_TO_WISHLIST",
                            payload: product,
                          }
                        )}>
                          Add to Wishlist 
                        </Button>
    )
  }
  return (
    <div>
      This is api call using axios
      <Container>
        <Row>
          {/* <pre>{JSON.stringify(products, null, 2)}</pre> */}
          {loading ? (
            <Col className="text-center">
              {" "}
              <Spinner animation="border" /> Products are loading.....
            </Col>
          ) : error ? (
            <Col className="text-danger text-center">Something went wrong!</Col>
          ) : (
            <Fragment>
              {products?.map((product) => {
                return (
                  <Col md={3} key={product.id} className="mb-3">
                    <Card>
                      <Card.Img src={product.thumbnail} />
                      <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                      </Card.Body>
                      <Card.Footer className="d-flex justify-content-between bg-white">
                        <Button size="sm" variant="outline-primary"                        >
                          Add to Cart
                        </Button>

                        <AddToWishlist product={product}/>
                        {/* <Button size="sm" variant="outline-success"
                        onClick={()=> wishlistDispatch(
                          {
                            type:"ADD_TO_WISHLIST",
                            payload: product,
                          }
                        )}>
                          Add to Wishlist 
                        </Button> */}
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

export default AXIOS;
