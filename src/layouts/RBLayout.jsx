import React from 'react'
import { Accordion, Col, Container, Row } from 'react-bootstrap'
import { NavLink, Outlet } from 'react-router-dom'

const RBLayout = () => {
  return (
    
      <Container fluid>
        <Row>
          <Col><h3>React BootStrap Component</h3></Col>
        </Row>
        <Row>
            <Col md={2}>
              <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Non-Interactive Components</Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li><NavLink to="/rb-badges">Badges</NavLink></li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Interactive Component</Accordion.Header>
                  <Accordion.Body>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, mollitia esse exercitationem, laboriosam maxime, laborum cumque ab omnis cum voluptatum quasi non fugit repudiandae obcaecati. Beatae ducimus dolor culpa cupiditate.</p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

            </Col>


            <Col md={10}>
              <Outlet/>
            </Col>
        </Row>
      </Container>
    

  )
}

export default RBLayout
