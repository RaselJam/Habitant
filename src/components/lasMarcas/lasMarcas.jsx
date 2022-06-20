import style from "./lasMarcas.module.scss";
import { GetSVG } from "../../assets/icons";

import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";

// posibly comes from an API
const lasMarcasArrayMock = [
  "esic",
  "telco",
  "iberdrola",
  "bbva",
  "mapfre",
  "mutua",
  "verti",
  "orange",
  "santalucia",
  "movistar",
  "genesis",
  "nedgia",
  "repsol",
  "legalitas",
  "aegon",
  "unir",
];
const LasMarcas = () => {
  const pageSize = 8;
  const pagesCount = new Array(
    Math.floor(lasMarcasArrayMock.length / pageSize)
  );
  pagesCount.fill("0");
  const [currentPage, setCurrentPage] = useState(0);
  const [toRender, setToRender] = useState(
    lasMarcasArrayMock.slice(0, pageSize)
  );

  // handlers :
  const handleClick = (i) => {
    if (currentPage !== i) {
      setCurrentPage(i);
      console.log("<<< TODO : complete pagination Logic  >>>");
      //TODO Manage Pagination here
    }
  };

  
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
          {toRender.map((marca) => {
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
            {pagesCount.map((elm, index) => (
              <span
                key={uuidv4()}
                onClick={handleClick.bind(null, index)}
                className={index === currentPage ? style.active : ""}></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LasMarcas;
