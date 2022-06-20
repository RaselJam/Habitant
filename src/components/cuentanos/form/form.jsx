import React from "react";
import Input from "./input";
import style from "./form.module.scss";
import { GetSVG } from "../../../assets/icons/index";
import TextButton from "../../generic/textButton/textButton";
import {emailRegex} from '../../../shared/regex.js'

const Form = ({ toggleShow }) => {
  //utilities,
  const getUpperIcon = (color = "#6C30EB") => {
    return (
      <>
        {GetSVG({ name: "close", color })}
        {GetSVG({ name: "pathRight", color })}
      </>
    );
  };

  // handlers
  const submitHandler = (e) => {
    e.preventDefault();
    toggleShow();
  };
  const hideHandler = () => {
    toggleShow();
  };

  return (
    <div className={style.formContainer}>
      <h3 onClick={hideHandler}>¡Cuéntanos tu reto! {getUpperIcon()}</h3>
      <form>
        <Input name="name" placeHolder="Nombre completo*" />
        <Input name="email" validatorRegex={emailRegex} placeHolder="Email*" />
        <Input name="empresa"  placeHolder="Empresa*" />
        <Input name="cargo" placeHolder="Cargo en la empresa*" />
        <Input textArea={true} name="mensaje" placeHolder="Mensaje*" />

        <p>*Este campo es obligatorio</p>

        <div className={style.terminos}>
          <label htmlFor="terminosA">
            <input id="terminosA" type="checkbox" />
            <span>
              Acepto que me envíen comunicaciones por parte de Global Sales
              Partnership*
            </span>
          </label>

          <label htmlFor="terminosB">
            <input id="terminosB" type="checkbox" />
            <span>He leído y acepto la política de privacidad*</span>
          </label>
        </div>
        <TextButton callBack={submitHandler}>
          Enviar{GetSVG({ name: "telegram" })}
        </TextButton>
      </form>
    </div>
  );
};

export default Form;
