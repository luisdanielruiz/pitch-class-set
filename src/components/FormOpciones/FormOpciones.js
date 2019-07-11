import React, { useState } from "react";
import "./FormOpciones.scss";

const FormOpciones = props => {
  let [numNotas, setNumNotas] = useState(1);

  const renderOptions = () => {
    let arr = [];
    for (let i = 1; i <= 12; i++) {
      arr.push(i);
    }
    return arr.map(i => (
      <option key={i} value={i}>
        {i}
      </option>
    ));
  };

  const handleChangeNotas = e => {
    setNumNotas(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    let options = {};
    options.numNotas = numNotas;
    props.onSubmitOptions(options);
  };

  return (
    <form className="FormOpciones" onSubmit={handleSubmit}>
      <label htmlFor="cantidad">Cantidad de notas</label>
      <select id="cantidad" onChange={handleChangeNotas}>
        {renderOptions()}
      </select>
      <input type="submit" value="Generar" />
    </form>
  );
};

export default FormOpciones;
