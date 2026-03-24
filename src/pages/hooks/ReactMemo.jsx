import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

//child component
const ShowCounterValue = React.memo(({count})=> {
  console.log("showcountervalue child component rendered" + Math.random());
  
  return(
    <h1>the value of ShowCounertValue = {count}</h1>
  )
})

//Parent component
const ReactMemo = () => {
  const [count, setCount] = useState(0);
  const [countOthers, setCountOthers] = useState(0)

  return (
    <div>
      React Memo
      <hr />
      value of count = {count}
      <br />
      <Button onClick={()=> setCount((e)=> e+1)}>+</Button>{" "}
      <Button onClick={()=> setCount((e)=> e-1)}>-</Button>
      <hr />
      valur of countOthers = {countOthers}
      <br />
      <Button onClick={()=> setCountOthers((e)=> e+1)}>+</Button>{" "}
      <Button onClick={()=> setCountOthers((e)=> e-1)}>-</Button>
      <hr />
      <ShowCounterValue count ={count}/>
    </div>
  )
}

export default ReactMemo
