import { Link } from "react-router-dom";
import style from "./footer.module.scss";
import { GetSVG } from "../../assets/icons";

import { v4 as uuidv4 } from "uuid";

const partnersLogos = [
  "googlePartner",
  "googleCert",
  "bing",
  "meta",
  "salesForcePartner",
  "linkedin",
];

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.container}>
        <div className={style.partners}>
          {partnersLogos.map((partner) => (
            <div key={uuidv4()}> {GetSVG({ name: partner })}</div>
          ))}
        </div>
        <div className={style.menu}>
          <ul>
            <li>
              <Link to="/" className={style.navLink}>
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/" className={style.navLink}>
                ¿Cómo lo hacemos?
              </Link>
            </li>

            <li>
              <Link to="/" className={style.navLink}>
                Casos de éxito
              </Link>
            </li>
            <li>
              <Link to="/" className={style.navLink}>
                Nuestro modelo
              </Link>
            </li>

            <li>
              <Link to="/" className={style.navLink}>
                Herramientas tecnológicas
              </Link>
            </li>
            <li>
              <Link to="/" className={style.navLink}>
                ¿Quiénes somos?
              </Link>
            </li>
          </ul>
        </div>
        <div className={style.mainLogoContaier}>
          <div className={style.logo}>
            <div className={style.desktopLogo}>
              {GetSVG({ name: "mainLogo" })}
            </div>
            <div className={style.mobileLogo}>
              {GetSVG({ name: "mainLogoMobile" })}
            </div>
          </div>
          <div className={style.terminos}>
            <ul>
              <li className={style.navItem}>
                <Link to="/">Términos y privacidad</Link>
              </li>
              <li className={style.navItem}>
                <Link to="/">Política de cookies</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={style.bottom}>
          <div className={style.copyRight}>
            GSP® | Cristóbal Bordiú, 13, Madrid
          </div>
          <button className={style.lang}>
            <span>
              <ul className={style.langList}>
                <li className={style.active}>ENG</li>
                <li>ESP</li>
                <li>FRA</li>
                <li>IT</li>
                <li>GER</li>
              </ul>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
