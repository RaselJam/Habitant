import style from "./hablamos.module.scss";
import { GetSVG } from "../../assets/icons";

import { v4 as uuidv4 } from "uuid";
import TextButton from "../generic/textButton/textButton";

// posibly comes from an API

const Hablamos = () => {
  return (
    <div className={style.hablamos}>
      <div className={style.container}>
        <div className={style.svg}>{GetSVG({ name: "email" })}</div>
        <h2>¡Hablamos!</h2>
        <p>
          <strong>¿Tienes un reto</strong> en el que quieres que te acompañemos?
        </p>

        <TextButton>¡Cuéntanos más! {GetSVG({ name: "telegram" })}</TextButton>
        <p className={style.d}>
          O si prefieres, <strong>envíanos un mail</strong> y te contestaremos
          lo antes posible.
        </p>
        <p className={style.email}>business@globalsalespartnership.com</p>
      </div>
    </div>
  );
};

export default Hablamos;
