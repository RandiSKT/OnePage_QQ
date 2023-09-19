import { useState, useEffect } from "react";
import NavBar from "../../components/NavBar.js";
import ProgressBar from "../../components/ProgressBar.js";
import DownloadCsv from "../../components/DownloadCsv.js";
import "../../App.css";
import Select from "../../components/Select.js";
import Indicador from "../../components/Indicador.js";
import Papa from "papaparse";

const Cartao = () => {
  const [dadosFiltrados, setDadosFiltrados] = useState([]);
  const [dadosFiltrados2, setDadosFiltrados2] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("");
  const [metaReg, setMetaReg] = useState();
  const [realReg, setRealReg] = useState();
  const [opReg, setOpReg] = useState();
  const [metaFilial, setMetaFilial] = useState();
  const [realFilial, setRealFilial] = useState();
  const [opFilial, setOpFilial] = useState();

  useEffect(() => {
    const csvFileUrl = process.env.PUBLIC_URL + "/Ativacao.csv";
    const readCSVFile = async () => {
      try {
        const response = await fetch(csvFileUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const csvText = await response.text();
        // Parse the CSV text using PapaParse
        Papa.parse(csvText, {
          header: true, // Assuming the first row contains headers
          complete: function (result) {
            const data = result.data;
            // Filtrar as linhas em que a coluna 'região' é igual a 'Noroeste' e 'Filial' é igual a '3'
            const filtroReg = data.filter((linha) => {
              return linha.REGIÃO === selectedRegion;
            });
            setDadosFiltrados(filtroReg);
            const primeiraLinha = filtroReg[0]; // Obtém a primeira linha
            setMetaReg(primeiraLinha.MetaReg);
            setRealReg(primeiraLinha.RealizadoReg);
            const countOpReg = filtroReg.reduce((count, linha) => {
              return linha.Ativou === "Oportunidade" ? count + 1 : count;
            }, 0);
            setOpReg(countOpReg);
            // 'dadosFiltrados' agora contém apenas as linhas que atendem à condição
            console.log(dadosFiltrados);
          },
          error: function (error) {
            console.error("Error parsing CSV:", error);
          },
        });
      } catch (error) {
        console.error("Error:", error);
      }
    };
    readCSVFile();
  }, [selectedRegion, dadosFiltrados]);

  useEffect(() => {
    const csvFileUrl = process.env.PUBLIC_URL + "/Ativacao.csv";
    const readCSVFile = async () => {
      try {
        const response = await fetch(csvFileUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const csvText = await response.text();
        // Parse the CSV text using PapaParse
        Papa.parse(csvText, {
          header: true, // Assuming the first row contains headers
          complete: function (result) {
            const data = result.data;
            // Filtrar as linhas em que a coluna 'região' é igual a 'Noroeste' e 'Filial' é igual a '3'
            const filtroFilial = data.filter((linha) => {
              return linha.FILIAL === selectedBranch;
            });
            setDadosFiltrados2(filtroFilial);
            const primeiraLinha = filtroFilial[0]; // Obtém a primeira linha
            setMetaFilial(primeiraLinha['Meta']);
            setRealFilial(primeiraLinha.Realizado);
            const countOpFilial = filtroFilial.reduce((count, linha) => {
              return linha.Ativou === "Oportunidade" ? count + 1 : count;
            }, 0);
            setOpFilial(countOpFilial);
          },
          error: function (error) {
            console.error("Error parsing CSV:", error);
          },
        });
      } catch (error) {
        console.error("Error:", error);
      }
    };
    readCSVFile();
  }, [selectedBranch, dadosFiltrados2]);

  const handleRegionChange = (region) => {
    setSelectedRegion(region);
  };

  const handleBranchChange = (branch) => {
    setSelectedBranch(branch);
  };

  return (
    <div>
      <h1>Cartão</h1>
      <div className="dashboard">
        <NavBar></NavBar>
        <Indicador />
        <Select
          onRegionChange={handleRegionChange}
          onBranchChange={handleBranchChange}
        />
        <ProgressBar
          title="Meta de Ativações Filial"
          current={realFilial}
          goal={metaFilial}
          oportunities={opFilial}
        />
        <ProgressBar
          title="Meta de Ativações Região"
          current={realReg}
          goal={metaReg}
          oportunities={opReg}
        />
        <div className="center-horizontally">
          <DownloadCsv
            filteredData={dadosFiltrados}
            title="Baixar Oportunidades da Região"
          />
          <DownloadCsv
            title="Baixar Oportunidades da Filial"
            filteredData={dadosFiltrados2}
          />
        </div>
      </div>
    </div>
  );
};

export default Cartao;
