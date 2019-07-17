import React from "react";
import "./Pentagrama.scss";
import clave from "../../assets/images/clave.png";
import Nota from "../Nota/Nota";

const Pentagrama = props => {
  const renderNotas = () => {
    return props.notas.map((nota, i) => (
      <Nota
        key={nota.nombre}
        className={nota.nombre.replace("#", "")}
        sostenido={nota.sostenido}
        audio={nota.nombre.replace("#", "Sostenido")}
        numero={i + 1}
      />
    ));
  };

  return (
    <article className="Pentagrama">
      <img src={clave} className="clave" alt="clave" />
      <div className="linea linea-5" />
      <div className="linea linea-4" />
      <div className="linea linea-3" />
      <div className="linea linea-2" />
      <div className="linea linea-1" />
      <div className="notas">{renderNotas()}</div>
    </article>
  );
};

export default Pentagrama;
