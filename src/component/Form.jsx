import { useState } from "react";

const Form = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    function submitHandle(e){
        console.log(e)
        e.preventDefault();
      console.log({email , password})
    
    }
    function emailHandler(e){
     setEmail(e.target.value)
    }
    function passwordHandler(e){
        setPassword(e.target.value)
    }
  return (
    <>
      <div className="w-[40%] my-4 m-auto shadow-sm border border-gray-100">
        <h2 className="text-lg font-bold text-center py-3">Login</h2>
        <form className="m-auto p-3">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Email"
              className="rounded focus:outline-none shadow-lg w-[100%] px-3 py-2"
              onChange={emailHandler}
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="rounded focus:outline-none shadow-lg w-[100%] px-3 py-2"
              onChange={passwordHandler}
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
};

export default Form;
