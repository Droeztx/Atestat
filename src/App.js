import "./App.css";
import Header from "./JS/Header.js";
import Main from "./JS/Pagina_main.js";
import Motherboard from "./JS/PaginaMotheboard.js";
import Videocard from "./JS/PaginaPlaciVideo.js";
import Cpu from "./JS/CPU.js";
import Ram from "./JS/Ram.js";
import Sume from "./JS/SUME.js";
import VentCarc from "./JS/VENTCARC.js";

import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/MB" element={<Motherboard />} />
          <Route path="/VC" element={<Videocard />} />
          <Route path="/CPU" element={<Cpu />} />
          <Route path="/RAM" element={<Ram />} />
          <Route path="/S&M" element={<Sume />} />
          <Route path="/V&C" element={<VentCarc />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
