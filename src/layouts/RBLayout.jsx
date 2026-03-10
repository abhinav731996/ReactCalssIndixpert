import React, { useEffect, useState } from "react";
import {
  Accordion,
  Badge,
  Card,
  Col,
  Container,
  ListGroup,
  Row,
} from "react-bootstrap";
import { ArrowRight, Moon, Sun } from "react-bootstrap-icons";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import {
  blogRoutsData,
  formData,
  interactiveRoutesData,
  nonInteractiveRoutesData,
} from "../data/routesData";
import ScrollToTop from "../components/ScrollToTop";

const RBLayout = () => {
  // ✅ Load initial mode from localStorage
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

   const location = useLocation();
    const { pathname } = location;
  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  // ✅ Apply theme + save to localStorage
  useEffect(() => {
    const htmlElement = document.documentElement;

    const theme = darkMode ? "dark" : "light";
    htmlElement.setAttribute("data-bs-theme", theme);

    localStorage.setItem("theme", theme);
  }, [darkMode]);

  return (
    <Container fluid>
      <Row>
        <Col className="d-flex justify-content-between">
          <h2>React BootStrap Component</h2>
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

                      {blogRoutsData.map((item, index) => {
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
              <ScrollToTop/>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RBLayout;
