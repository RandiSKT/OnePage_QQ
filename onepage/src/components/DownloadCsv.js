import React from "react";
import "../App.css";

function DownloadCsv({ title, filteredData, indicador }) {
  const downloadFilteredCSV = () => {
    // Verifique se há dados filtrados
    if (filteredData.length === 0) {
      console.warn("Nenhum dado filtrado para baixar.");
      return;
    }
    var csvData = ""
    // Crie um CSV a partir dos dados filtrados
    if (indicador==="Ativações"){
      csvData = "FILIAL;DT_CADASTRO;CONTA;Ativou;Tempo;REGIÃO\n" + filteredData.map((linha) => `${linha.FILIAL};${linha.DT_CADASTRO};${linha.CONTA};${linha.Ativou};${linha.Tempo};${linha.REGIÃO}`).join("\n");
    } else {
      csvData = "ANOMES;CPF;DATA_RESUMIDO;FILIAL;REGIÃO\n" + filteredData.map((linha) => `${linha.ANOMES};${linha.CPF};${linha.DATA_RESUMIDO};${linha.FILIAL};${linha.REGIÃO};`).join("\n");
    }
  
    // Crie um objeto Blob para representar o arquivo CSV
    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });

    // Crie um URL temporário para o Blob
    const url = window.URL.createObjectURL(blob);

    // Crie um link de download
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "OportunidadesRegiao.csv");

    // Simule um clique no link para iniciar o download
    link.click();
  };

  return (
      <button onClick={downloadFilteredCSV} className="download-button">
        {title}
      </button>
  );
}

export default DownloadCsv;
