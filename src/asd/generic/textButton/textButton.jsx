import React from "react";
import style from "./textButton.module.scss";

const TextButton = ({ children, hasIcon = true }) => {
  const cssClass = [style.button];
  !hasIcon ? cssClass.push(style.noIcon) : cssClass.push("");

  return <button className={cssClass.join(" ")}>{children}</button>;
};

export default TextButton;
