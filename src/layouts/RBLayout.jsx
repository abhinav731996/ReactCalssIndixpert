import React from "react";
import { Accordion, Card, Col, Container, Row } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";

const RBLayout = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <h3>React BootStrap Component</h3>
        </Col>
      </Row>
      <Row>
        <Col md={2}>
          <Card>
            <Card.Body>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Non-Interactive Components
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>
                        <NavLink to="/">Home</NavLink>
                      </li>
                      <li>
                        <NavLink to="/rb-badges">Badges</NavLink>
                      </li>
                      <li>
                        <NavLink to="/rb-breadcrumb">Breadcrumb</NavLink>
                      </li>
                      <li>
                        <NavLink to="/rb-buttons">Buttons</NavLink>
                      </li>
                      <li>
                        <NavLink to="/rb-button-group">Button-Group</NavLink>
                      </li>

                      <li>
                        <NavLink to="/rb-card">Card</NavLink>
                      </li>
                      <li>
                        <NavLink to="/rb-images">Images</NavLink>
                      </li>
                      <li>
                        <NavLink to="/rb-listgroup">ListGroup</NavLink>
                      </li>
                      <li>
                        <NavLink to="/rb-figure">Figure</NavLink>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Interactive Component</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quia, mollitia esse exercitationem, laboriosam maxime,
                      laborum cumque ab omnis cum voluptatum quasi non fugit
                      repudiandae obcaecati. Beatae ducimus dolor culpa
                      cupiditate.
                    </p>
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
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RBLayout;
