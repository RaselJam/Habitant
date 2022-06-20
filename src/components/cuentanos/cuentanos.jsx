import React from "react";
import Form from "./form/form";
import style from "./cuentanos.module.scss";

const Cuentanos = ({ customCssClass, isShowing, toggleShow }) => {
  return (
    <div
      className={`${style.cuentanos} ${customCssClass} ${
        isShowing ? style.show : ""
      }`}>
      <Form toggleShow={toggleShow} />
    </div>
  );
};

export default Cuentanos;
