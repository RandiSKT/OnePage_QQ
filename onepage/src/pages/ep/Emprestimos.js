import React from "react";
import NavBar from "../../components/NavBar.js";


const Emprestimos = () => {
  return (
    <div>
      <h1>Empréstimos</h1>
      <NavBar></NavBar>
      <div className="powerbi">
      <iframe title="Relatório Ativações" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=e0e16073-59b6-44ac-ab95-8356bf3c95db&autoAuth=true&ctid=29afa5b0-23fb-403f-a03e-2ade4de931af" frameborder="0" allowFullScreen="true"></iframe>
      </div>
    </div>
  );
};

export default Emprestimos;
