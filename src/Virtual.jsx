import { useState } from "react";


const Virtual = () => {
    const [data, setData]= useState(0);

function handleIncrease(){
    setData((preValue)=>preValue + 1); 
  
}
  return (
    <div>
      {data}
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}

export default Virtual;
