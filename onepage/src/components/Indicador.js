import React, { useState } from "react";
import './NavBar.css'

const Indicador = ({ onIndicatorChange }) => {
  // Defina o estado inicial com "Cartões Novos" selecionados
  const [selectedIndicador, setSelectedIndicador] = useState("Cartões Novos");

  // Função para lidar com a mudança na seleção
  const handleIndicadorChange = (e) => {
    setSelectedIndicador(e.target.value);
    onIndicatorChange(e.target.value)
  };

  return (
    <div>
      <label htmlFor="indicador">Indicador:</label>
      <select
        id="indicador"
        value={selectedIndicador}
        onChange={handleIndicadorChange}
      >
        <option value="Cartões Novos">Cartões Novos</option>
        <option value="Ativações">Ativações</option>
      </select>
      </div>
  )}

  export default Indicador