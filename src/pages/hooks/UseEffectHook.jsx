import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';

const UseEffectHook = () => {

  const [count, setCount] = useState(0);
  const [temp, setTemp] = useState(0);
  const [temp2, setTemp2] = useState(0);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setCount((prev) => prev + 1)
    }, 1000)
  
    return () => {
      clearTimeout(timerId)
    }
  }, [temp, temp2])     // with dependencey 
  // }, [])   // blank dependency i.e. it will move by once 
  //})        // no dependency i.e. it will go to infinite 
  

  // ************ for fetching data from api only one time ************
  useEffect(() => {
    return () => {
      fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then((data)=> setProducts(data));
    };
  }, [])

  return (
    <div>
      Useeffect Hook 
      <br />
      The value of count is <span className='text-primary fw-bold'>{count}</span>
      <hr />
      <Button onClick={()=>setTemp((prev) => prev + 1)} >Update temp</Button> <br />
      The value of temp count is <span className='text-primary fw-bold'>{temp}</span>
      <hr />
      <Button onClick={()=>setTemp2((prev) => prev + 1)} >Update temp2</Button> <br />
      The value of temp2 count is <span className='text-primary fw-bold'>{temp2}</span>
      <hr />

      List of Products 
      <pre>{JSON.stringify(products, null, 2)}</pre>

    </div>
  )
}

export default UseEffectHook
