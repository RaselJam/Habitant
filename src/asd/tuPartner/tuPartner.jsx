import ArrowButton from "../generic/button/arrowButton";
import img from "../../assets/images/hero-d.png";
import { GetSVG } from "../../assets/icons";
import style from "./tupartner.module.scss";
import TextButton from "../generic/textButton/textButton";

const TuPartner = () => {
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

          <TextButton>
            ¡Cuéntanos tu reto!
            {/* // TODO Sera mas Facil rotar de otra manera, pero asi es divertivo solo para demostrar opciones en esta prueba*/}
            <span
              style={{ "--rotateDeg": "180deg" }}
              className={style.cuentanos}>
              {GetSVG({ name: "pathDown", color: "#ffffff" })}
            </span>
          </TextButton>
        </div>
      </div>
    </div>
  );
};

export default TuPartner;
