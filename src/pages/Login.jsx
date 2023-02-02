import React from "react";

const Login = () => {
  return (
    <div className="flex flex-row justify-center items-center min-h-screen">
      <div className="p-2 flex flex-col gap-4 shadow-md rounded-sm border w-[350px] h-[500px] items-center justify-center">
        <h4>Logo and des</h4>
        <input
          type="text"
          placeholder="@username"
          className="outline-none border rounded-md p-1 w-full px-2"
        />
        <input
          type="password"
          placeholder="password"
          className="outline-none border rounded-md p-1 w-full px-2"
        />
        <button className="bg-sky-500 p-1 rounded-md w-52 font-semibold tracking-tight hover:ring-1">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
