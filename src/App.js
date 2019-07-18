import React, { useState } from "react";
import Pentagrama from "./components/Pentagrama/Pentagrama";
import FormOpciones from "./components/FormOpciones/FormOpciones";
import "./App.scss";

const App = () => {
  let [notasGeneradas, setNotasGeneradas] = useState([]);
  let [playing, setPlaying] = useState(false);

  const handleSubmit = ({ numNotas }) => {
    setNotasGeneradas(generarNotas(numNotas));
  };

  const generarNotas = num => {
    let notasDisponibles = [
      "C",
      "C#",
      "D",
      "D#",
      "E",
      "F",
      "F#",
      "G",
      "G#",
      "A",
      "A#",
      "B"
    ];
    let arrNotas = [];
    for (let i = 0; i < num; i++) {
      let randomNum = generarNumero(notasDisponibles);
      arrNotas.push(notasDisponibles[randomNum]);
      notasDisponibles.splice(randomNum, 1);
    }
    let arrObjNotas = arrNotas.map(nota => ({
      nombre: nota,
      sostenido: nota.indexOf("#") !== -1
    }));
    return arrObjNotas;
  };

  const generarNumero = arr => {
    let numero = Math.floor(Math.random() * arr.length);
    return numero;
  };

  const renderPlayButton = () => {
    if (notasGeneradas.length !== 0) {
      return <button onClick={handlePlayClick}>Play</button>;
    }
  };

  const handlePlayClick = () => {
    setPlaying(true);
  };

  return (
    <section className="App">
      <h1>Pitch Class Set</h1>
      <Pentagrama notas={notasGeneradas} play={playing} />
      {notasGeneradas.map(nota => nota.nombre + " ")}
      <FormOpciones onSubmitOptions={handleSubmit} />
      {renderPlayButton()}
    </section>
  );
};

export default App;
