import style from "./lasMarcas.module.scss";
import { GetSVG } from "../../assets/icons";

import { v4 as uuidv4 } from "uuid";

// posibly comes from an API
const lasMarcas = [
  "esic",
  "telco",
  "iberdrola",
  "bbva",
  "mapfre",
  "mutua",
  "verti",
  "orange",
  // "santalucia",
  // "movistar",
  // "genesis",
  // "nedgia",
  // "repsol",
  // "legalitas",
  // "aegon",
  // "unir",
];
const LasMarcas = () => {
  return (
    <div className={style.lasMarcas}>
      <div className={style.container}>
        <div className={style.top}>
          <h2>Las marcas más destacadas confían en nosotros</h2>
          <p>
            <strong>Llevamos años ayudando a grandes empresas</strong> a
            maximizar su impacto gracias a este modelo de Digital Marketing
            basado en performance.
          </p>
        </div>
        <div className={style.bottom}>
          {/* <img src={img} alt="vvvv" /> */}
          {lasMarcas.map((marca) => {
            return (
              <div className={style.logo} key={uuidv4()}>
                {GetSVG({ name: marca })}
              </div>
            );
          })}
        </div>
        <div className={style.control}>
          {/* TODO  extract a generic Component from this  */}
          <div className={style.dots}>
            <span className={style.active}></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LasMarcas;
