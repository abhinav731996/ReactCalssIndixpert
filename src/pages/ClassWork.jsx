import React from 'react'
import { Accordion, Button } from 'react-bootstrap'

const ClassWork = () => {
  return (
    <div>
      This is for daily class work
    <hr />
        <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Day-1</Accordion.Header>
        <Accordion.Body>
          <h2>Setting up the React router(Data Mode)</h2>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Day-2</Accordion.Header>
        <Accordion.Body>
            <h2>Setting up the buttons using react bootstrap</h2>
            <hr />
            <Button variant="primary">Primary</Button>{" "}
            <Button variant="secondary">Secondary</Button>{" "}
            <Button variant="success">Success</Button>{" "}
            <Button variant="warning">Warning</Button>{" "}
            <Button variant="danger">Danger</Button>{" "}
            <Button variant="info">Info</Button>{" "}
            <Button variant="light">Light</Button>{" "}
            <Button variant="dark">Dark</Button>{" "}
            <Button variant="link">Link</Button>{" "}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Day-3</Accordion.Header>
        <Accordion.Body>
            <h2></h2>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Day-4</Accordion.Header>
        <Accordion.Body>
            <h2></h2>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    <hr />

    

    </div>
  )
}

export default ClassWork
