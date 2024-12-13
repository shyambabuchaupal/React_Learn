import { useRef } from "react";

const Uncontrolled = () => {
    let emailRef = useRef();
  function submitHandle(e) {
    e.preventDefault();
    console.log(emailRef.current.value)
  }

  return (
    <>
      <div className="w-[40%] my-4 m-auto shadow-sm border border-gray-100">
        <h2 className="text-lg font-bold text-center py-3">Uncontrolled</h2>
        <form className="m-auto p-3">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Email"
              className="rounded focus:outline-none shadow-lg w-[100%] px-3 py-2"
           ref={emailRef}
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="rounded focus:outline-none shadow-lg w-[100%] px-3 py-2"
            />
          </div>
          <div className="mb-4 text-center">
            <button
              className="bg-green-500 text-white w-[15%] rounded py-2"
              onClick={submitHandle}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Uncontrolled;
