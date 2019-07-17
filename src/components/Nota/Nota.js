import React, { useState, useEffect } from "react";
import Redonda from "../Redonda/Redonda";
import Sostenido from "../Sostenido/Sostenido";

import "./Nota.scss";

const Nota = props => {
  let [sonidoNota, setSonidoNota] = useState(null);
  let btnRef = React.createRef();
  useEffect(() => {
    import(`../../assets/sounds`).then(module =>
      setSonidoNota(module[props.audio])
    );
  }, [props.audio]);

  const audio = new Audio(sonidoNota);

  const handleNoteClick = () => {
    audio.currentTime = 0;
    audio.play();
    console.log(props.numero);
  };

  // setTimeout(() => {
  //   audio.play();
  // }, props.numero * 400);
  
  return (
    <button
      className={`Nota ${props.className}`}
      onClick={handleNoteClick}
      ref={btnRef}
    >
      {props.sostenido ? <Sostenido /> : null}
      <Redonda className="redonda" />
    </button>
  );
};

export default Nota;
