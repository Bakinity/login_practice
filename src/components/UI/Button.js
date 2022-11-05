import React from "react";
import modules from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={modules.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
