import React from 'react'
import UseCounter from '../../hooks/UseCounter'
import { Button } from 'react-bootstrap'

const CustomHook = () => {
  const{ count, increment, decrement } = UseCounter(0)
  return (
    <div>
      <h2>This is custom hook</h2>
      <br />
      Current Count = {count}
      <br />
      <Button onClick={increment}>+</Button>{" "}
      <Button onClick={decrement}>-</Button>
    </div>
  )
}

export default CustomHook
