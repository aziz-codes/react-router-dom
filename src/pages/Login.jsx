import { useRef, useState } from "react";
import { appStore } from "../Context/AppContext";
const Login = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const rememberRef = useRef();
  const { user, setUser } = appStore();
  const handleClick = () => {
    if (rememberRef.current.checked) {
      const user = {
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      };
      localStorage.setItem("user", JSON.stringify(user));
      setUser(true);
    } else {
      setUser(true);
    }
  };
  return (
    <div className="flex flex-row justify-center items-center min-h-screen">
      <div className="p-2 flex flex-col gap-4 shadow-md rounded-sm border w-[350px] h-[500px]  justify-center">
        <h4 className="text-center">Logo and des</h4>
        <input
          type="text"
          placeholder="@username"
          className="outline-none border rounded-md p-1 w-full px-2"
          ref={usernameRef}
        />
        <input
          type="password"
          placeholder="password"
          className="outline-none border rounded-md p-1 w-full px-2"
          ref={passwordRef}
        />
        <div className="flex flex-row gap-1">
          <input type="checkbox" ref={rememberRef} />
          <span className="text-xs text-slate-500">Remeber me</span>
        </div>
        <button
          className="bg-sky-500 p-1 rounded-md w-52 font-semibold tracking-tight hover:ring-1 mx-auto"
          onClick={handleClick}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
