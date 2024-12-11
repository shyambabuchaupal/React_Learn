import { useState } from "react";

const Count = () => {
  let [data, setData] = useState(0)
    

    function increseval(){
      setData(data++)
     
    }

    function decreseval(){
     setData(data--)
    }
  return (
    <>
      <div style={{display:'flex', justifyContent:'space-between',width:'10%',margin:'auto'}}>
      <button onClick={increseval}>+</button>
      <h2>{data}</h2>
      <button onClick={decreseval}>-</button>
      </div>
    </>
  );
}

export default Count;
