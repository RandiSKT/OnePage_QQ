import React from "react";
import {Link} from "react-router-dom"

const NavBar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Cartão</Link>
          </li>
          <li>
            <Link to="/emprestimos">EP</Link>
          </li>
          <li>
            <Link to="/seguros">Seguros</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
