import { useState, useEffect } from "react";
import NavBar from "../../components/NavBar.js";
import ProgressBar from "../../components/ProgressBar.js";
import DownloadCsv from "../../components/DownloadCsv.js";
import "../../App.css";
import Select from "../../components/Select.js";
import Indicador from "../../components/Indicador.js";
import Papa from "papaparse";

const Cartao = () => {
  const [dados, setDados] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("Noroeste");
  const [selectedBranch, setSelectedBranch] = useState("3");
  const [metaReg, setMetaReg] = useState();
  const [realReg, setRealReg] = useState();
  const [opReg, setOpReg] = useState();
  const [metaFilial, setMetaFilial] = useState();
  const [realFilial, setRealFilial] = useState();
  const [opFilial, setOpFilial] = useState();
  const [indicador, setIndicator] = useState("Cartões Novos");
  const [file, setFile] = useState("CN.csv");

  useEffect(() => {
    const csvFileUrl = process.env.PUBLIC_URL + file;
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
            setDados(data);
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
  }, [file]);

  useEffect(() => {
    // Filtrar os dados conforme a região e a filial selecionada
    const filtroReg = dados.filter((linha) => {
      return linha.REGIÃO === selectedRegion;
    });

    const filtroFilial = dados.filter((linha) => {
      return linha.FILIAL === selectedBranch;
    });

    // Atualizar os estados com os resultados
    if (filtroReg.length > 0) {
      const primeiraLinhaReg = filtroReg[0];
      setMetaReg(primeiraLinhaReg.MetaReg);
      setRealReg(primeiraLinhaReg.RealizadoReg);
      if (indicador === "Ativações") {
        const countOpReg = filtroReg.reduce((count, linha) => {
          return linha.Ativou === "Oportunidade" ? count + 1 : count;
        }, 0);
        setOpReg(countOpReg);
      } else {
        const countOpReg = filtroReg.length;
        setOpReg(countOpReg);
      }
    } else {
      // Define os estados como vazios se não houver dados para a região selecionada
      setMetaReg("");
      setRealReg("");
      setOpReg(0);
    }

    if (filtroFilial.length > 0) {
      const primeiraLinhaFilial = filtroFilial[0];
      setMetaFilial(primeiraLinhaFilial["Meta"]);
      setRealFilial(primeiraLinhaFilial.Realizado);
      if (indicador === "Ativações") {
        const countOpFilial = filtroFilial.reduce((count, linha) => {
          return linha.Ativou === "Oportunidade" ? count + 1 : count;
        }, 0);
        setOpFilial(countOpFilial);
      } else {
        const countOpFilial = filtroFilial.length;
        setOpFilial(countOpFilial);
      }
    } else {
      // Define os estados como vazios se não houver dados para a filial selecionada
      setMetaFilial("");
      setRealFilial("");
      setOpFilial(0);
    }
  }, [selectedRegion, selectedBranch, dados, indicador]);

  const handleRegionChange = (region) => {
    setSelectedRegion(region);
  };

  const handleBranchChange = (branch) => {
    setSelectedBranch(branch);
  };

  const handleIndicatorChange = (ind) => {
    setIndicator(ind);
    if (ind === "Ativações") {
      setFile("Ativacao.csv");
    } else {
      setFile("CN.csv");
    }
  };

  return (
    <div>
      <h1>Cartão</h1>
      <div className="dashboard">
        <NavBar></NavBar>
        <Indicador onIndicatorChange={handleIndicatorChange} />
        <Select
          onRegionChange={handleRegionChange}
          onBranchChange={handleBranchChange}
        />
        <ProgressBar
          title={"Meta de " + indicador + " Filial: " + selectedBranch}
          current={realFilial}
          goal={metaFilial}
          oportunities={opFilial}
        />
        <ProgressBar
          title={"Meta de " + indicador + " Região: " + selectedRegion}
          current={realReg}
          goal={metaReg}
          oportunities={opReg}
        />
        <div className="center-horizontally">
          <DownloadCsv
            indicador={indicador}
            filteredData={dados.filter(
              (linha) => linha.REGIÃO === selectedRegion
            )}
            title="Baixar Oportunidades da Região"
          />
          <DownloadCsv
            indicador={indicador}
            title="Baixar Oportunidades da Filial"
            filteredData={dados.filter(
              (linha) => linha.FILIAL === selectedBranch
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default Cartao;
