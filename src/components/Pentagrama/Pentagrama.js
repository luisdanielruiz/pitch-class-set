import React from "react";
import "./Pentagrama.scss";
import clave from "../../assets/images/clave.png";

const Pentagrama = () => {
  return (
    <article className="Pentagrama">
      <img src={clave} className="clave" alt="clave" />
      <div className="linea" />
      <div className="linea" />
      <div className="linea" />
      <div className="linea" />
      <div className="linea" />
    </article>
  );
};

export default Pentagrama;
