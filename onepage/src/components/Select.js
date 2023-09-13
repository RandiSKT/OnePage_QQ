import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import "./Select.css"
function Select() {
  const [regions, setRegions] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [branches, setBranches] = useState([]);
  const [filteredBranches, setFilteredBranches] = useState([]);
  const [selectedBranch, setSelectedBranch] = useState("");

  useEffect(() => {
    // Leitura do arquivo CSV das regiões e filiais
    Papa.parse("/filiais_regiao.csv", {
      header: true,
      download: true,
      complete: function (results) {
        const data = results.data;
        // Separa os dados em regiões e filiais
        const uniqueRegions = [...new Set(data.map((item) => item.REGIAO))];

        setRegions(uniqueRegions);
        if (uniqueRegions.length > 0) {
          setSelectedRegion(uniqueRegions[0]); // Define a primeira região como selecionada inicialmente
        }

        setBranches(data);
      },
    });
  }, []);

  useEffect(() => {
    // Filtra as filiais com base na região selecionada
    const filtered = branches.filter(
      (branch) => branch.REGIAO === selectedRegion
    );
    setFilteredBranches(filtered);
    if (filtered.length > 0) {
      setSelectedBranch(
        filtered[0].REGIAO + "-" + filtered[0].NOME_FILIAL
      ); // Define a primeira filial como selecionada inicialmente
    }
  }, [selectedRegion, branches]);

  return (
    <div className="div">
      <label htmlFor="regionSelect">Região:</label>
      <select
        id="regionSelect"
        value={selectedRegion}
        onChange={(e) => setSelectedRegion(e.target.value)}
      >
        {regions.map((region, index) => (
          <option key={index} value={region}>
            {region}
          </option>
        ))}
      </select>

      <label htmlFor="branchSelect">Filial:</label>
      <select
        id="branchSelect"
        value={selectedBranch}
        onChange={(e) => setSelectedBranch(e.target.value)}
      >
        {filteredBranches.map((branch, index) => (
          <option
            key={index}
            value={branch.FILIAL + "-" + branch.NOME_FILIAL}
          >
            {branch.FILIAL + "-" + branch.NOME_FILIAL}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
