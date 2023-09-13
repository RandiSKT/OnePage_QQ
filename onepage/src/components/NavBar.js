import React from "react";
import {NavLink} from "react-router-dom"
import './NavBar.css'; // Certifique-se de que o caminho corresponde ao local do arquivo CSS.



function NavBar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active">Cartão</NavLink>
          </li>
          <li>
            <NavLink to="/emprestimos" activeClassName="active">EP</NavLink>
          </li>
          <li>
            <NavLink to="/seguros" activeClassName="active">Seguros</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
