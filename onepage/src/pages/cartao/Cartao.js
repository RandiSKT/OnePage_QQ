import React from "react";
import NavBar from "../../components/NavBar.js";
import "./cartao.css";

const Cartao = () => {
  // Dados de exemplo para as caixas de seleção
  const regioes = ["Região 1", "Região 2", "Região 3"];
  const filiais = ["Filial A", "Filial B", "Filial C"];

  return (
    <div>
      <NavBar></NavBar>
      <div className="dashboard">
        <div className="filter-container">
          <select>
            <option value="">Selecione a Região</option>
            {regioes.map((regiao, index) => (
              <option key={index} value={regiao}>
                {regiao}
              </option>
            ))}
          </select>
          <select>
            <option value="">Selecione a Filial</option>
            {filiais.map((filial, index) => (
              <option key={index} value={filial}>
                {filial}
              </option>
            ))}
          </select>
        </div>

        <div className="progress-container">
          <div className="progress">
            <div className="progress-bar" style={{ width: "70%" }}></div>
          </div>
          <span>Atingimento Meta Região: 70%</span>
        </div>

        <div className="progress-container">
          <div className="progress">
            <div className="progress-bar" style={{ width: "45%" }}></div>
          </div>
          <span>Atingimento Meta Filial: 45%</span>
        </div>

        <div className="download-buttons">
          <button>Download Oportunidades da Região</button>
          <button>Download Oportunidades da Filial</button>
        </div>
      </div>
    </div>
  );
};

export default Cartao;
