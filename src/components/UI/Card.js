import React from "react";
import modules from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={`${modules.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
