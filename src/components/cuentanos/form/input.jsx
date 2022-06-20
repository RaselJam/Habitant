import React, { useState } from "react";
import { useEffect } from "react";
import style from "./input.module.scss";

function Input({ name, placeHolder, textArea = false, validatorRegex }) {
  const [focused, setFocused] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");

  // handlres
  const handleClick = () => {
    setHasError(false);
    setFocused(true);
  };
  const handleBlur = (e) => {
    const value = e.target.value;
    setFocused(value !== "" ? true : false);
    let isValid = true;
    if (validatorRegex) {
      console.log("validating with regex", { validatorRegex });

      isValid = validatorRegex.reg.test(value);
      if (!isValid) {
        const errorMessage = validatorRegex.message;
        setErrorMessage(errorMessage);
      }
    }
    setHasError(e.target.value === "" || !isValid);
  };
  // end of heanlres
  let cssClasses = [style.main];
  textArea && cssClasses.push(style.textare);
  if (focused) {
    cssClasses.push(style.focused);
  } else cssClasses = [...cssClasses.filter((c) => c !== style.focused)];
  if (hasError) {
    cssClasses.push(style.error);
  } else cssClasses = [...cssClasses.filter((c) => c !== style.error)];

  return (
    <div className={cssClasses.join(" ")}>
      <label htmlFor={name}>
        {placeHolder} {hasError && ErrorMessage}
      </label>
      {textArea ? (
        <textarea
          name={name}
          onClick={handleClick}
          onBlur={(e) => handleBlur(e)}
          id={name}></textarea>
      ) : (
        <input
          onClick={handleClick}
          onBlur={(e) => handleBlur(e)}
          name={name}
          type={"text"}
        />
      )}
    </div>
  );
}

export default Input;
