import { Link } from "react-router-dom";
import { GetSVG } from "../../assets/icons";

import style from "./unmodelo.module.scss";

const UnModelo = () => {
  const tickSVG = GetSVG({ name: "tick" });
  return (
    <div className={style.unModelo}>
      <div className={style.container}>
        <div className={style.left}>
          <h2>Un modelo de Ventas Digitales 100% a éxito</h2>
          <p>
            Creemos tanto en nuestra forma de trabajar que nuestra remuneración
            es <strong>100% variable</strong> poniendo a tu disposición un
            proceso de adquisición completo:{" "}
            <strong>desde la captación hasta el cierre de la venta.</strong>
          </p>
        </div>
        <div className={style.right}>
          <h2>Algunas ventajas:</h2>
          <ul>
            <li>
              <div>{tickSVG}</div>
              <div>Un único proveedor, todos los servicios.</div>
            </li>
            <li>
              <div>{tickSVG}</div>
              <div>
                Posibilidad de convivencia con tus actuales estrategias de
                tráfico y adquisición.
              </div>
            </li>
            <li>
              <div>{tickSVG}</div>
              <div>Paga solamente por los objetivos conseguidos.</div>
            </li>
          </ul>
          <div className={style.links}>
            <div>
              Ver todas las ventajas
              {GetSVG({ name: "pathRight", color: "#ffffff" })}
            </div>
            <div>
              ¿Hablamos? {GetSVG({ name: "pathRight", color: "#ffffff" })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnModelo;
