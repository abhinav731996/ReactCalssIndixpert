import React, { useContext, useEffect, useState } from "react";
import {
  Accordion,
  Badge,
  Button,
  Card,
  Col,
  Container,
  ListGroup,
  Row,
} from "react-bootstrap";
import { ArrowRight, Moon, Sun } from "react-bootstrap-icons";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  APIRoutesData,
  blogRoutesData,
  ContextAPIRoutesData,
  formData,
  hooksRoutesData,
  interactiveRoutesData,
  nonInteractiveRoutesData,
} from "../data/routesData";
import ScrollToTop from "../components/ScrollToTop";
import { UserContext, WishlistContext } from "../context/Context";
import { useSelector } from "react-redux";

const RBLayout = () => {

  // // Here is the code of context api states.....
  // const { username } = useContext(UserContext);
  // const { wishlistState } = useContext(WishlistContext);

  // // Redux to read wishlist item
    const wishlistState = useSelector((state)=> state.wishlist)
    const username  = "";
    
    // // Redux to read cart item
    const cartState = useSelector((state)=> state.cart)


  //  Load initial mode from localStorage
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  const location = useLocation();
  const { pathname } = location;
  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  //  Apply theme + save to localStorage
  useEffect(() => {
    const htmlElement = document.documentElement;

    const theme = darkMode ? "dark" : "light";
    htmlElement.setAttribute("data-bs-theme", theme);

    localStorage.setItem("theme", theme);
  }, [darkMode]);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.setItem("login", false);
    navigate("/auth/signin");
  };

  return (
    <Container fluid>
      <Row>
        <Col className="d-flex justify-content-between">
          <h2>React BootStrap Component</h2>
          <div>
            Welcome : {username}{" "}
            {/* <pre>{JSON.stringify(wishlistState.wishlistitem, null, 2)}</pre> */}
            <NavLink to="/wishlist" variant="link">Wishlist <Badge>{wishlistState?.wishlistItems?.length}</Badge></NavLink>{" "}
            <NavLink to="/shopping-cart" variant="link">Cart <Badge>{cartState?.cartItems?.length}</Badge></NavLink>{" "}
            <Button onClick={handleLogout} className="me-2">
              Logout
            </Button>
            <Badge
              onClick={() => setDarkMode(!darkMode)}
              className="me-2 rounded-5 p-3"
              bg={darkMode ? "light" : "dark"}
              text={darkMode ? "dark" : "light"}
              role="button"
              style={{ cursor: "pointer" }}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </Badge>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={2}>
          <Card>
            <Card.Body>
              <Accordion defaultActiveKey="">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Non-Interactive Components
                  </Accordion.Header>
                  <Accordion.Body>
                    <ListGroup as="ul" variant="flush">
                      {/* calling though map function */}

                      {nonInteractiveRoutesData.map((item, index) => {
                        return (
                          <ListGroup.Item as="li" key={index}>
                            <ArrowRight />
                            <NavLink to={item.link}> {item.menuItem}</NavLink>
                          </ListGroup.Item>
                        );
                      })}
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Interactive Component</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup as="ul" variant="flush">
                      {/* calling though map function */}

                      {interactiveRoutesData.map((item, index) => {
                        return (
                          <ListGroup.Item as="li" key={index}>
                            <ArrowRight />
                            <NavLink to={item.link}> {item.menuItem}</NavLink>
                          </ListGroup.Item>
                        );
                      })}
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>Form</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup as="ul" variant="flush">
                      {/* calling though map function */}

                      {formData.map((item, index) => {
                        return (
                          <ListGroup.Item as="li" key={index}>
                            <ArrowRight />
                            <NavLink to={item.link}> {item.menuItem}</NavLink>
                          </ListGroup.Item>
                        );
                      })}
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                  <Accordion.Header>Blog</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup as="ul" variant="flush">
                      {/* calling though map function */}

                      {blogRoutesData.map((item, index) => {
                        return (
                          <ListGroup.Item as="li" key={index}>
                            <ArrowRight />
                            <NavLink to={item.link}> {item.menuItem}</NavLink>
                          </ListGroup.Item>
                        );
                      })}
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                  <Accordion.Header>Hooks</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup as="ul" variant="flush">
                      {/* calling though map function */}

                      {hooksRoutesData.map((item, index) => {
                        return (
                          <ListGroup.Item as="li" key={index}>
                            <ArrowRight />
                            <NavLink to={item.link}> {item.menuItem}</NavLink>
                          </ListGroup.Item>
                        );
                      })}
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5">
                  <Accordion.Header>API</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup as="ul" variant="flush">
                      {/* calling though map function */}

                      {APIRoutesData.map((item, index) => {
                        return (
                          <ListGroup.Item as="li" key={index}>
                            <ArrowRight />
                            <NavLink to={item.link}> {item.menuItem}</NavLink>
                          </ListGroup.Item>
                        );
                      })}
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="6">
                  <Accordion.Header>ContextAPI</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup as="ul" variant="flush">
                      {/* calling though map function */}

                      {ContextAPIRoutesData.map((item, index) => {
                        return (
                          <ListGroup.Item as="li" key={index}>
                            <ArrowRight />
                            <NavLink to={item.link}> {item.menuItem}</NavLink>
                          </ListGroup.Item>
                        );
                      })}
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Body>
          </Card>
        </Col>

        <Col md={10}>
          <Card>
            <Card.Body>
              <Outlet />
              <ScrollToTop />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RBLayout;

