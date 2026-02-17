import React from "react";
import { Accordion, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
import { NavLink, Outlet } from "react-router-dom";
import { routesData } from "../data/routesData";

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
                      
                      {routesData.map((item, index) => {
                        return(

                        <ListGroup.Item 
                        as="li" key={index}> 
                        <ArrowRight/> 
                        <NavLink to={item.link}> {item.menuItem}</NavLink> 
                        </ListGroup.Item>
                        )
                        
                      })}


                      {/* simple & easy way but time consuming */}
                      {/* <ListGroup.Item as="li"> <ArrowRight/> <NavLink to="/rb-badges">Badges</NavLink> </ListGroup.Item>
                      <ListGroup.Item as="li"> <ArrowRight/> <NavLink to="/rb-breadcrumb">Breadcrumb</NavLink> </ListGroup.Item>
                      <ListGroup.Item as="li"> <ArrowRight/> <NavLink to="/rb-buttons">Buttons</NavLink> </ListGroup.Item>
                      <ListGroup.Item as="li"> <ArrowRight/> <NavLink to="/rb-button-group">Button-Group</NavLink> </ListGroup.Item>
                      <ListGroup.Item as="li"> <ArrowRight/> <NavLink to="/rb-card">Card</NavLink> </ListGroup.Item>
                      <ListGroup.Item as="li"> <ArrowRight/> <NavLink to="/rb-images">Images</NavLink> </ListGroup.Item>
                      <ListGroup.Item as="li"> <ArrowRight/> <NavLink to="/rb-listgroup">ListGroup</NavLink> </ListGroup.Item>
                      <ListGroup.Item as="li"> <ArrowRight/> <NavLink to="/rb-figure">Figure</NavLink> </ListGroup.Item>
                      <ListGroup.Item as="li"> <ArrowRight/>  </ListGroup.Item>
                      <ListGroup.Item as="li"> <ArrowRight/>  </ListGroup.Item> */}
                    </ListGroup>

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
