import React from "react";
import style from "./card.module.scss";
import { GetSVG } from "../../../assets/icons/index";

const Card = ({ title, iconName, description }) => {
  return (
    <div className={style.card}>
      <div className={style.head}>
        <div className={style.icon}>{GetSVG({ name: iconName })}</div>
        <h2>{title}</h2>
      </div>
      <p>{description}</p>
      <button>Ver en detalle {GetSVG({ name: "pathRight" })}</button>
    </div>
  );
};

export default Card;
