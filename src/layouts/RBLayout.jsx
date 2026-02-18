import React from "react";
import { Accordion, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
import { NavLink, Outlet } from "react-router-dom";
import { interactiveRoutesData, nonInteractiveRoutesData } from "../data/routesData";

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
                    <ListGroup as="ul" variant="flush">

                      {/* calling though map function */}

                      {nonInteractiveRoutesData.map((item, index) => {
                        return(

                        <ListGroup.Item 
                        as="li" key={index}> 
                        <ArrowRight/> 
                        <NavLink to={item.link}> {item.menuItem}</NavLink> 
                        </ListGroup.Item>
                        )
                        
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
                        return(

                        <ListGroup.Item 
                        as="li" key={index}> 
                        <ArrowRight/> 
                        <NavLink to={item.link}> {item.menuItem}</NavLink> 
                        </ListGroup.Item>
                        )
                        
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
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RBLayout;
