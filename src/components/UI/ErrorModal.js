import React from "react";

import Card from "./Card";
import Button from "./Button";
import modules from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={modules.backdrop} onClick={props.onConfirm}></div>
      <Card className={modules.modal}>
        <header className={modules.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={modules.content}>
          <p>{props.message}</p>
        </div>
        <footer className={modules.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
