import React, { useState } from "react";
import "./formulario.css";

function Formulario() {
  const [enviadas, setEnviadas] = useState([]);
  const [noEnviadas, setNoEnviadas] = useState([]);

  const handleGuardar = () => {
    console.log("Referencias enviadas con éxito guardadas");
  };

  const handleRegresar = () => {
    console.log("Volviendo a la pantalla principal");
  };

  const handleGuardarNoEnviadas = () => {
    console.log("Referencias no enviadas con éxito guardadas");
  };

  return (
    <div className="grid-container">
      <div className="grid-izquierdo" style={{ backgroundColor: "#a3f7bf" }}>
        <h2>Referencias enviadas con éxito</h2>
        {enviadas.length === 0 && <p>No hay referencias enviadas con éxito</p>}
        {enviadas.map((ref) => (
          <p key={ref}>{ref}</p>
        ))}
        <button className="guardar-button" onClick={handleGuardar}>
          Guardar
        </button>
      </div>
      <div className="grid-derecho" style={{ backgroundColor: "#f7a3a3" }}>
        <h2>Referencias no enviadas con éxito</h2>
        {noEnviadas.length === 0 && (
          <p>No hay referencias no enviadas con éxito</p>
        )}
        {noEnviadas.map((ref) => (
          <p key={ref}>{ref}</p>
        ))}
        <div className="button-container">
          <button className="regresar-button" onClick={handleRegresar}>
            Regresar
          </button>
          <button className="guardar-button" onClick={handleGuardarNoEnviadas}>
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Formulario;