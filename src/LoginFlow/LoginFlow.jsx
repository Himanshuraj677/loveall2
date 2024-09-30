import React from "react";
import loginFlow from "./login-flow.svg";
import "./style.css";

export const Box = () => {
  return (
    <div className="box">
      <img className="login-flow" alt="Login flow" src={loginFlow} />
    </div>
  );
};
