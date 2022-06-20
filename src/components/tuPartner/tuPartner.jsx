import ArrowButton from "../generic/button/arrowButton";
import img from "../../assets/images/hero-d.png";
import { GetSVG } from "../../assets/icons";
import style from "./tupartner.module.scss";
import TextButton from "../generic/textButton/textButton";
import Cuentanos from "../cuentanos/cuentanos";
import { useState } from "react";

const TuPartner = () => {
  const [isShowing, setIsShowing] = useState(false);
  // handlers :
  const toggleShow = () => {
    setIsShowing((prev) => !prev);
  };
  return (
    <div className={style.tuPartner}>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.left}>
            <h1>
              Tu partner para conseguir más leads, más ventas, más revenue
            </h1>
            <p>
              Un modelo de trabajo end to end que integra
              <strong>tecnología, medios y creatividad.</strong>
            </p>
            {GetSVG({ name: "habitantPowerdBy" })}
          </div>
          <div className={style.right}>
            <img src={img} alt="vvvv" />
          </div>
        </div>

        <div className={style.control}>
          <ArrowButton />

          <div className={style.cuentanosSlide}>
            <TextButton callBack={toggleShow}>
              ¡Cuéntanos tu reto!
              <span>{GetSVG({ name: "pathUp" })}</span>
            </TextButton>
            <Cuentanos
              isShowing={isShowing}
              toggleShow={toggleShow}
              customCssClass={style.formDiv}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TuPartner;
