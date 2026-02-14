import React from 'react'
import { Badge } from 'react-bootstrap'
import { VectorPen } from 'react-bootstrap-icons'

const RBBadges = () => {
  return (
    <div>
      React bootstrap badges page
      <h1>
        Example heading <Badge bg="secondary">New</Badge>
      </h1>
      <h2> <VectorPen size={50} style={{fill:"rgba(238, 144, 68, 0.93)"}}/>
        Example heading <Badge bg="primary" pill text='black'>New</Badge>
      </h2>
      <h3>
        Example heading <Badge bg="secondary">New</Badge>
      </h3>
      <h4>
        Example heading <Badge bg="secondary">New</Badge>
      </h4>
      <h5>
        Example heading <Badge bg="secondary">New</Badge>
      </h5>
      <h6>
        Example heading <Badge bg="secondary">New</Badge>
      </h6>
    </div>
  )
}

export default RBBadges
