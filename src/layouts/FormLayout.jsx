import React from 'react'
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import { formData } from '../data/routesData';
import { ArrowRight } from 'react-bootstrap-icons';
import { NavLink, Outlet } from 'react-router-dom';

const FormLayout = () => {
  return (
    <div>
      <Container>
        <Row>
            <Col>
            <ListGroup as="ul" variant="flush" className="xyz">
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
            </Col>
            <Col>
            <Outlet/>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default FormLayout
