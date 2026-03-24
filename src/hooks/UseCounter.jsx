import React, { useState } from "react";

const UseCounter = () => {
  // main hook logics
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  return {
    // return elements, variable, method etc
    count,
    increment,
    decrement,
  };
};

export default UseCounter;
