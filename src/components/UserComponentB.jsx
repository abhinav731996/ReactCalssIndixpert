import React, { useContext } from "react";
import UserComponentA from "./UserComponentA";
import { UserContext } from "../context/Context";

const UserComponentB = ({}) => {
    const {username} = useContext(UserContext)
  return (
    <div>
      user component B [username : {username}]
      <hr />
      {/* <UserComponentA /> */}
    </div>
  );
};

export default UserComponentB;
