import React from "react";
import NavBar from "../../components/NavBar.js";
import ProgressBar from "../../components/ProgressBar.js";
import DownloadCsv from "../../components/DownloadCsv.js";
import "../../App.css"
import Select from "../../components/Select.js";

const Cartao = () => {
  return (
    <div>
      <h1>Cartão</h1>
      <NavBar></NavBar>
      <Select />
      <ProgressBar title="Meta de Ativações" current={100} goal={100} />
      <ProgressBar title="Meta de Cartões Novos" current={150} goal={100} />
      <div className="center-horizontally">
      <DownloadCsv title="Baixar Oportunidades da Região"/>
      <DownloadCsv title="Baixar Oportunidades da Filial"/>
      </div>
    </div>
  );
};

export default Cartao;
