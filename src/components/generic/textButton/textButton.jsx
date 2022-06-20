import React from "react";
import style from "./textButton.module.scss";

const TextButton = ({ children, hasIcon = true, callBack = () => {} }) => {
  const classses = [style.button];
  !hasIcon ? classses.push(style.noIcon) : classses.push("");

  return (
    <button onClick={callBack} className={classses.join(" ")}>
      {children}
    </button>
  );
};

export default TextButton;
