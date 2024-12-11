// import Count from "./Count";
// import Product from "./Product";

import { useState } from "react";
import AllCards from "./component/AllCards";
import {data} from './utilis/data';
import './index.css'
import Form from "./component/Form";


// import Virtual from "./virtual";

const App = () => {

  const [val, setVal]=useState(""); 
  const [filterData, setFilterData]= useState(data)

  function FilterHandler(){
   let res = data.filter((item)=>item.name.toLowerCase().includes(val.toLowerCase()))
   setFilterData(res)
  }
  return (
    <>
      {/* <Product title="Nike shoes" price="990"/> */}
      {/* <Count/> */}
      {/* <Virtual/> */}
    {/* <div className="bg-green-300 text-center min-h-screen max-w-[100vw] overflow-x-hidden flex flex-col items-center">
    <h2 className="text-3xl py-4">Project 17</h2>
      <div className="mb-2 ">
        <input type="text" className="p-2 rounded focus:outline-none" placeholder="Search..." onChange={(e)=>setVal(e.target.value)}/>
        <button className="p-2 bg-red-300 text-white" onClick={FilterHandler}>Search</button>
      </div>

      <AllCards data={filterData}/>
    </div> */}

    <Form/>
   
    </>
  );
};

export default App;
