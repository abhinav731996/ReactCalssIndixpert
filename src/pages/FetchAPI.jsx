import React, { useEffect } from "react";

const FetchAPI = () => {
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then(data = );
  });
  return <div>This is fetch api</div>;
};

export default FetchAPI;
