import ArrowButton from "../generic/button/arrowButton";
import img from "../../assets/images/hello.png";

import style from "./confia.module.scss";
import { GetSVG } from "../../assets/icons";

const Confia = () => {
  return (
    <div className={style.confia}>
      <div className={style.container}>
        <div className={style.left}>
          <h2>Confía en la experiencia</h2>
          <p>
            Detrás de Global Sales Partnership se encuentran{" "}
            <strong>HABITANT y Walmeric</strong>, dos de las empresas más
            innovadoras en Performance y Ventas Digitales.
          </p>

          <div className={style.logo}>
            {GetSVG({ name: "habitantWalmeria" })}
          </div>
          <ArrowButton textButton="Descubre quiénes somos" cssCustomClass="arrowRight"/>
        </div>
        <div className={style.right}>
          <img src={img} alt="vvvv" />
        </div>
      </div>
    </div>
  );
};

export default Confia;
