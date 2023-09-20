import React from "react";
import { NavLink } from "react-router-dom";
import $ from "jquery"; // Importe o jQuery
import "./NavBar.css"; // Certifique-se de que o caminho corresponde ao local do arquivo CSS.
import { useEffect } from "react";

function NavBar() {
  useEffect(() => {
    $(".drop").on('mouseover', function () {
      $(".dropdown").show(300);
    });

    $(".drop").on('mouseleave', function () {
      $(".dropdown").hide(300);
    });
  }, []);

  return (
    <div>
      <nav className="nav">
        <ul>
          <li className="drop">
            <NavLink exact to="/" activeClassName="active">
              Cartão
            </NavLink>
            <ul className="dropdown">
              <li>
                <NavLink>Oportunidades</NavLink>
              </li>
              <li>
                <NavLink>Capturas Externas</NavLink>
              </li>
              <li>
                <NavLink>Embossing</NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="/emprestimos" activeClassName="active">
              EP
            </NavLink>
          </li>
          <li>
            <NavLink to="/seguros" activeClassName="active">
              Seguros
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
