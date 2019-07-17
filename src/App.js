import React, { useState } from "react";
import Pentagrama from "./components/Pentagrama/Pentagrama";
import FormOpciones from "./components/FormOpciones/FormOpciones";
import "./App.scss";

const App = () => {
  let [notasGeneradas, setNotasGeneradas] = useState([]);

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

  return (
    <section className="App">
      <h1>Pitch Class Set</h1>
      <Pentagrama notas={notasGeneradas} />
      {notasGeneradas.map(nota => nota.nombre + " ")}
      <FormOpciones onSubmitOptions={handleSubmit} />
    </section>
  );
};

export default App;
