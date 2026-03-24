import React, { useCallback, useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const UseCallback = () => {
  const [count, setCount] = useState(0);
  const [userName, setUserName] = useState("");
  const [isValid, setIsValid] = useState(false);

  // useCallback(
  //     () => {
  //         callback
  //     },
  //     [input]
  // )

  const validateUserName = useCallback(() => {
    console.log("Validating user..." + Math.random());
    setIsValid(userName.length >= 5);
  }, [userName]);

  useEffect(() => {
    validateUserName();
  }, [validateUserName]);

  return (
    <div>
      This is use callback hook
      <hr />
      User validation tasks....
      <br />
      <input
        type="text"
        placeholder="Enter your name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <p>{isValid ? "Valid username" : "Min. 5 charaters required"}</p>
      <Button onClick={validateUserName}>Check Validation</Button>
      <hr />
       Lets do some other tasks....
      <br />
      current count is {count}
      <br />
      <Button onClick={() => setCount(count + 1)}>+</Button>
    </div>
  );
};

export default UseCallback;
