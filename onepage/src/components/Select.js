import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import "./Select.css";

function Select({ onRegionChange, onBranchChange }) {
  const [regions, setRegions] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("Noroeste");
  const [branches, setBranches] = useState([]);
  const [filteredBranches, setFilteredBranches] = useState([]);
  const [selectedBranch, setSelectedBranch] = useState(3);


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
      setSelectedBranch(filtered[0].REGIAO); // Define a primeira filial como selecionada inicialmente
    }
  }, [selectedRegion, branches]);

  return (
    <div className="div">
      <label htmlFor="regionSelect">Região:</label>
      <select
        id="regionSelect"
        value={selectedRegion}
        onChange={(e) => {
          const newRegion = e.target.value;
          setSelectedRegion(newRegion);
          onRegionChange(newRegion); // Notifica o componente pai sobre a mudança de região

          // Obtém a primeira filial da região selecionada
          const firstBranchInRegion = branches.find(
            (branch) => branch.REGIAO === newRegion
          );

          if (firstBranchInRegion) {
            setSelectedBranch(firstBranchInRegion.FILIAL);
            onBranchChange(firstBranchInRegion.FILIAL); // Notifica o componente pai sobre a mudança de filial
          }
        }}
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
        onChange={(e) => {
          setSelectedBranch(e.target.value);
          onBranchChange(e.target.value); // Notifica o componente pai sobre a mudança de filial
        }}
      >
        {filteredBranches.map((branch, index) => (
          <option key={index} value={branch.FILIAL}>
            {branch.FILIAL}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
