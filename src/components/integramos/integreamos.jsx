import React from "react";
import Card from "./card/card";

import { v4 as uuidv4 } from "uuid";

import style from "./integramos.module.scss";

const integramosList = [
  {
    iconName: "definicion",
    title: "Definición estratégica",
    describtion:
      "Establecemos de forma conjunta objetivos, necesidades y procesos.",
  },
  {
    iconName: "canalesDigitale",
    title: "Canales digitales",
    describtion:
      "Sin intermediarios. Invertimos,  gestionamos y activamos las campañas.",
  },
  {
    iconName: "creatividad",
    title: "Creatividad",
    describtion: "Creamos conceptos y mensajes orientados a conversión.",
  },
  {
    iconName: "activos",
    title: "Activos de conversión",
    describtion:
      "Diseñamos y desarrollamos los activos digitales necesarios para pasar del clic al lead/venta.",
  },
  {
    iconName: "tecnologia",
    title: "Tecnología lead management",
    describtion:
      "Gestión completa del lead y trazabilidad del mismo hasta el cierre de la venta con una tecnología única.",
  },
];
const Integreamos = () => {
  return (
    <div className={style.integeramos}>
      <div className={style.container}>
        <div className={style.header}>
          <h2>Integramos todo lo necesario</h2>
          <p>
            Nuestra experiencia creando e integrando campañas, tecnología y
            activos digitales hace que seamos capaces de
            <strong>
              ofrecerte una estrategia óptima de captación end to end:
            </strong>
          </p>
        </div>
        <div className={style.cards}>
          {integramosList.map((elm) => (
            <Card
              key={uuidv4()}
              title={elm.title}
              description={elm.describtion}
              iconName={elm.iconName}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Integreamos;
