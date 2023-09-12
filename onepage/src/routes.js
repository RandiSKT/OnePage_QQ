import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cartao from "./pages/cartao/Cartao";
import Emprestimos from "./pages/ep/Emprestimos";
import Seguros from "./pages/seguros/Seguros";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cartao />}></Route>
        <Route path="/emprestimos" element={<Emprestimos />}></Route>
        <Route path="/seguros" element={<Seguros />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
