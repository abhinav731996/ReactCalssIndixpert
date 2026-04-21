import React, { useState, useCallback } from "react";

// const Child = React.memo(({ handleClick }) => {
//   console.log("Child Rendered");
//   return <button onClick={handleClick}>Click Me</button>;
// });

function User() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0)

  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []);

  return (
    <div>
      <h1>{count}</h1>
      <h2 className="bg-primary">abhi</h2>
      <h2>{num}</h2>
      <button onClick={() => setNum(num + 2)}>increment of 2</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {/* <Child handleClick={handleClick} /> */}
    </div>
  );
}

export default User
