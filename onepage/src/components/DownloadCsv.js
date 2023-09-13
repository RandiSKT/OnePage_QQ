import React from "react";
import "../App.css";

function DownloadCsv({ title }) {
  const downloadCSV = () => {
    // Criar os dados CSV (substitua isso com os dados da sua base)
    const csvData = "Nome,Idade\nJoão,30\nMaria,25\nCarlos,40";

    // Criar um objeto Blob para representar o arquivo CSV
    const blob = new Blob([csvData], { type: "text/csv" });

    // Criar um URL temporário para o Blob
    const url = window.URL.createObjectURL(blob);

    // Criar um link de download
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "dados.csv");

    // Simular um clique no link para iniciar o download
    link.click();
  };

  return (
      <button onClick={downloadCSV} className="download-button">
        {title}
      </button>
  );
}

export default DownloadCsv;
