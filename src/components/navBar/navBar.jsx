import { useState } from "react";
import { Link } from "react-router-dom";
import TextButton from "../generic/textButton/textButton";
import "./navBar.scss";

import { GetSVG } from "../../assets/icons";

const suportedLanguages = ["ENG", "ESP"];
const NavBar = () => {
  const [opened, setOpened] = useState(false);
  const [langSelected, setLangSelected] = useState(suportedLanguages[0]);
  //handlers :
  const handleLanguageChange = (lang) => {
    // TODO do lange chnage Logic from here
    setLangSelected(lang);
  };
  const handleClick = () => setOpened(!opened);
  const Close = () => setOpened(false);

  return (
    <div className="navBar">
      <div
        className={opened ? "container-opened" : ""}
        onClick={() => Close()}
      />
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <Link to="/" className={opened ? "nav-logo active " : "nav-logo"}>
            {GetSVG({ name: opened ? "mainLogoMobileMenu" : "mainLogo" })}
          </Link>
          <ul className={opened ? "nav-menu active " : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={opened ? handleClick : null}>
                <div
                  className={
                    opened ? "nav-links-wrapper active " : "nav-links-wrapper"
                  }>
                  <p>Inicio</p>

                  <p></p>
                </div>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={opened ? handleClick : null}>
                <div
                  className={
                    opened ? "nav-links-wrapper active " : "nav-links-wrapper"
                  }>
                  <p>Nuestro modelo</p>

                  <p>Descubre las ventajas de Global Sales Partnership</p>
                </div>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={opened ? handleClick : null}>
                <div
                  className={
                    opened ? "nav-links-wrapper active " : "nav-links-wrapper"
                  }>
                  <p>¿Cómo lo hacemos?</p>

                  <p>Recursos y metodología adaptada a tus objetivos</p>
                </div>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={opened ? handleClick : null}>
                <div
                  className={
                    opened ? "nav-links-wrapper active " : "nav-links-wrapper"
                  }>
                  <p>Tecnologías</p>

                  <p>Inteligencia de negocio a tu servicio</p>
                </div>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={opened ? handleClick : null}>
                <div
                  className={
                    opened ? "nav-links-wrapper active " : "nav-links-wrapper"
                  }>
                  <p>Casos de éxito</p>

                  <p>Así hemos ayudado a otras empresas</p>
                </div>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={opened ? handleClick : null}>
                <div
                  className={
                    opened ? "nav-links-wrapper active " : "nav-links-wrapper"
                  }>
                  <p>¿Quiénes somos?</p>

                  <p>HABITANT y Walmeric. La experiencia nos avala</p>
                </div>
              </Link>
            </li>
            {opened && (
              <div className="descrption">
                <TextButton hasIcon={false}>Contáctanos</TextButton>
                <p>¿Prefieres escribirnos directamente?</p>
                <p>
                  <strong>business@globalsalespartnership.com</strong>
                </p>
                <div className="lang-openned">
                  <button className="lang">
                    <span>
                      <ul className="langList">
                        {suportedLanguages.map((lang) => (
                          <li
                            onClick={handleLanguageChange.bind(null, lang)}
                            key={lang}
                            className={langSelected === lang ? "active" : ""}>
                            {lang}
                          </li>
                        ))}
                      </ul>
                    </span>
                  </button>
                </div>
              </div>
            )}
          </ul>

          <div className={opened ? "nav-lang openned " : "nav-lang"}>
            <button className="lang">
              <span>
                <ul className="langList">
                  <li className="active">ENG</li>
                  <li>ESP</li>
                </ul>
              </span>
            </button>
          </div>
          <div className="nav-icon" onClick={handleClick}>
            {GetSVG({ name: opened ? "close" : "hamburger" })}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
