import ArrowButton from "../generic/button/arrowButton";
// import { isMobile } from "react-device-detect";
import img from "../../assets/images/hello.png";
import imgmob from "../../assets/images/hello-m.png";

import style from "./confia.module.scss";
import { GetSVG } from "../../assets/icons";

const Confia = () => {
  return (
    <div className={style.confia}>
      <div className={style.container}>
        <div className={style.left}>
          <h2>Confía en la experiencia Mobile</h2>
          <p>
            Detrás de Global Sales Partnership se encuentran{" "}
            <strong>HABITANT y Walmeric</strong>, dos de las empresas más
            innovadoras en Performance y Ventas Digitales.
          </p>

          <div className={style.logo}>
            {GetSVG({ name: "habitantWalmeria" })}
          </div>
          <ArrowButton
            textButton="Descubre quiénes somos"
            cssCustomClass="arrowRight"
          />
        </div>
        <div className={style.right}>
          <img className={style.desk} src={img} alt="vvvv" />
          <img className={style.mob} src={imgmob} alt="vvvv" />
        </div>
      </div>
    </div>
  );
};

export default Confia;
