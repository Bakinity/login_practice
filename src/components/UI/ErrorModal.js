import { React, Fragment } from "react";
import ReactDom from "react-dom";

import Card from "./Card";
import Button from "./Button";
import modules from "./ErrorModal.module.css";

const Backdrop = (props) => {
  return <div className={modules.backdrop} onClick={props.onConfirm}></div>;
};

const ModalOverlay = (props) => {
  return (
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
  );
};

const ErrorModal = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default ErrorModal;
