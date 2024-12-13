import { useState } from "react";
const AnotherLogicFormSubmit = () => {
   const [data, setData] = useState({email:"", password:""});
    function submitHandle(e){
        console.log(e)
        e.preventDefault();
   
    
    }
    console.log(data)
    function emailHandler(e){
     setData((preData)=>({...preData, email: e.target.value}))
    }
    function passwordHandler(e){
        setData((preData)=>({...preData, password: e.target.value}))
    }
  return (
    <>
     <div className="w-[40%] my-4 m-auto shadow-sm border border-gray-100">
        <h2 className="text-lg font-bold text-center py-3">Another Logic Form Submit</h2>
        <form className="m-auto p-3">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Email"
              className="rounded focus:outline-none shadow-lg w-[100%] px-3 py-2"
              onChange={emailHandler}
              value={data.email}
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="rounded focus:outline-none shadow-lg w-[100%] px-3 py-2"
              onChange={passwordHandler}
              value={data.password}
            />
          </div>
          <div className="mb-4 text-center">
            <button className="bg-green-500 text-white w-[15%] rounded py-2" onClick={submitHandle}>
              Submit
            </button>
          </div>
        </form>
      </div>
    
    </>
  );
}

export default AnotherLogicFormSubmit;
