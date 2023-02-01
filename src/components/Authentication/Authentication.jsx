import React from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Authentication = () => {
  return (
    <div className="flex flex-row items-center justify-center shadow-md border h-auto w-96">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Authentication;
