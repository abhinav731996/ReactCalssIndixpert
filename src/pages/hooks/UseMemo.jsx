import React, { useMemo, useState } from 'react'
import { Button } from 'react-bootstrap'

const UseMemo = () => {
    const [count, setCount] = useState(0);
    const [upto, setUpto] = useState(0);

    const sumUpToX = (x) => {
        console.log("SumUpToX..." + x);
        let sum = 0;
        for (let i = 1; i<=x; i++) sum = sum + i;
        return sum;
    }

    const sumUpTo10000 = useMemo(() => {
       return sumUpToX(10000);
    },[])
    const sumUpToXValue = useMemo(()=> {
       return sumUpToX(upto);
    },[])

  return (
    <div>
      This is useMemo Hook 
      <hr />
        Thve value of count is {count} {" "}
        <Button onClick={()=>setCount(count +1)}>+</Button>
        <hr />
        sumUpTo10000 = {sumUpTo10000}
        <hr />
        sumUpto {upto} = {sumUpToXValue}{" "}
        <Button onClick={()=>setUpto(upto + 10)}>upto X</Button>
    </div>
  )
}

export default UseMemo
