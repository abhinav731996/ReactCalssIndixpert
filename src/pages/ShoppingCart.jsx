import React from "react";
import { Card, Col, Container, Image, NavLink, Row } from "react-bootstrap";
import { Cart, Trash } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

const ShoppingCart = () => {
  const cartState = useSelector((state) => state.cart);
  return (
    <div>
      <Container className="container py-5"> 
        <h3 className="mb-5 ">
          {" "}
          <Cart /> Your Shopping Cart
        </h3>
        <hr />
        <Row>
          <Col lg={8}>
            <Card mb={4}>
              <Card.Body className="card-body">
                {cartState?.cartItems?.map((item) => (
                  <React.Fragment key={item.id}>
                    <Row className="cart-item mb-3">
                      <div className="col-md-3">
                        <Image
                          src={item.thumbnail}
                          style={{ width: "100px" }}
                        />
                      </div>

                      <div className="col-md-5">
                        <Card.Title>{item.title}</Card.Title>
                        <p className="text-muted">Category: {item.category}</p>
                      </div>

                      <div className="col-md-2">
                        <div className="input-group">
                          <button className="btn btn-outline-secondary btn-sm">
                            -
                          </button>

                          <input
                            style={{ maxWidth: "100px" }}
                            type="text"
                            className="form-control text-center"
                            value={item.quantity || 1}
                            readOnly
                          />

                          <button className="btn btn-outline-secondary btn-sm">
                            +
                          </button>
                        </div>
                      </div>

                      <div className="col-md-2 text-end">
                        <p className="fw-bold">{item.price}</p>

                        <button className="btn btn-sm btn-outline-danger">
                          <Trash />
                        </button>
                      </div>
                    </Row>
                    <hr />
                  </React.Fragment>
                ))}
              </Card.Body>
            </Card>
            <div className="text-start mb-4">
              <NavLink href="/axios-api" className="btn btn-outline-primary">
                <i className="bi bi-arrow-left me-2"></i> Continue Shopping
              </NavLink>
            </div>
          </Col>
          <Col lg={4}>
            <Card className=" cart-summary">
              <Card.Body>
                <Card.Title className="mb-4">Order Summary</Card.Title>
                <div className="d-flex justify-content-between mb-3">
                  <span>Total Item</span>
                  <span>3 </span>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span>Subtotal</span>
                  <span>$199.97</span>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span>Shipping</span>
                  <span>$10.00</span>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span>Tax (18%)</span>
                  <span>$20.00</span>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span>
                    Discount (ABHI5){" "}
                    <Trash role="button" className="text-danger" />
                  </span>
                  <span>$20.00</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between mb-4">
                  <strong>Total</strong>
                  <strong>$229.97</strong>
                </div>
                <button className="btn btn-primary w-100">
                  Proceed to Checkout
                </button>
              </Card.Body>
            </Card>
            <Card mt={4}>
              <Card.Body className="card-body">
                <Card.Title className="card-title mb-3">
                  Apply Promo Code
                </Card.Title>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter promo code"
                  />
                  <button className="btn btn-outline-secondary" type="button">
                    Apply
                  </button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ShoppingCart;
