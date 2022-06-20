import { Link } from "react-router-dom";
import ArrowButton from "../generic/button/arrowButton";
import img from "../../assets/images/ilustracionTec.png";

import style from "./tecnologia.module.scss";

const Tecnologia = () => {
  return (
    <div className={style.tecnologia}>
      <div className={style.container}>
        <div className={style.left}>
          <h2>Tecnología inteligente a tu servicio</h2>
          <p>
            Inteligencia artificial aplicada a la conversión y a la venta. Somos
            los creadores de la tecnología más implementada y avanzada en la
            gestión de Leads y cierre de ventas.
          </p>
          <ArrowButton textButton="Conócelas" cssCustomClass="arrowRight" />
        </div>
        <div className={style.right}>
          <img src={img} alt="vvvv" />
        </div>
      </div>
    </div>
  );
};

export default Tecnologia;
