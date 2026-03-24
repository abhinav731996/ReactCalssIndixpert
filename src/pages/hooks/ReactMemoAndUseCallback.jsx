import React, { useCallback, useState } from "react";
import { Button } from "react-bootstrap";

// A child component that only re-renders if its props change
const ChildComponent = React.memo(({ onIncrement }) => {
  console.log("ChildComponent rendered" + Math.random());
  return <button onClick={onIncrement}>Increment</button>;
});

//Parent component 
const ReactMemoAndUseCallback = () => {
  const [count, setCount] = useState(0);
  const [countOthers, setCountOthers] = useState(0);
  const increment = useCallback(() => {
    setCount((preVal) => preVal + 1);
  },[]); // Empty dependency array: function is created only once

  return (
    <div>
      React Memo And Usecallback hooks
      <hr />
      value of count = {count}
      <br />
      <Button onClick={() => setCount((e) => e + 1)}>+</Button>{" "}
      <Button onClick={() => setCount((e) => e - 1)}>-</Button>
      <br />
      <ChildComponent onIncrement={increment} />
      <hr />
      valur of countOthers = {countOthers}
      <br />
      <Button onClick={() => setCountOthers((e) => e + 1)}>+</Button>{" "}
      <Button onClick={() => setCountOthers((e) => e - 1)}>-</Button>
      <hr />
    </div>
  );
};

export default ReactMemoAndUseCallback;
