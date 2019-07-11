import React, { useState } from "react";
import Pentagrama from "./components/Pentagrama/Pentagrama";
import FormOpciones from "./components/FormOpciones/FormOpciones";
import "./App.css";

const App = () => {
  let [notasGeneradas, setNotasGeneradas] = useState([]);

  const handleSubmit = ({ numNotas }) => {
    console.log(numNotas);
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
    console.log(arrNotas);
    return arrNotas;
  };

  const generarNumero = arr => {
    let numero = Math.floor(Math.random() * arr.length);
    return numero;
  };

  return (
    <section className="App">
      {notasGeneradas.join(" ")}
      <h1>Pitch Class Set</h1>
      <Pentagrama notas={5} />
      <FormOpciones onSubmitOptions={handleSubmit} />
    </section>
  );
};

export default App;
