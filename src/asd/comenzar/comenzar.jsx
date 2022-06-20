import ArrowButton from "../generic/button/arrowButton";
import img from "../../assets/images/wave4.jpg";

import style from "./comenzar.module.scss";

const Comenzar = () => {
  return (
    <div className={style.comenzar}>
      <div className={style.container}>
        <div className={style.left}>
          <h2>Comenzar es sencillo y ágil:</h2>
          <p>
            Recuerda, nuestra facturación se va realizando a medida que vamos
            logrando las ventas. Si no vendemos, no cobramos.
          </p>
          <ArrowButton
            textButton="¿Nos cuentas tu proyecto?"
            cssCustomClass="arrowRight"
          />
        </div>
        <div className={style.right}>
          <div className={style.head}>
            <div className={style.texblock}>
              <span>1</span>
              <h2>Cuéntanos tu necesidad</h2>
            </div>
            <img src={img} alt="vvvv" />
          </div>
         {/* TODO  extract a generic Component from this  */}
          <div className={style.dots}>
            <span className={style.active}></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comenzar;
