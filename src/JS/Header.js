import poza from "../pozici/LOGO.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div id="main_dreptunhi">
      <div id="main_forma">
        <NavLink to="/">
          <img src={poza} id="poza_test" alt="404 not found"></img>
        </NavLink>
        <div id="dreptunghi_text">
          <NavLink to="/">
            <p id="ohoho" className="stil_text_drepthunghi_sus">
              MAIN
            </p>
          </NavLink>
          <NavLink to="/MB">
            <p id="placa_baza" className="stil_text_drepthunghi_sus">
              PLACI DE BAZA
            </p>
          </NavLink>
          <NavLink to="/VC">
            <p id="placa_video" className="stil_text_drepthunghi_sus">
              PLACI VIDEO
            </p>
          </NavLink>
          <NavLink to="/CPU">
            <p id="procesor" className="stil_text_drepthunghi_sus">
              PROCESOARE
            </p>
          </NavLink>
          <NavLink to="/RAM">
            <p id="placa_ram" className="stil_text_drepthunghi_sus">
              PLACUTE RAM
            </p>
          </NavLink>
          <NavLink to="/S&M">
            <p id="surse" className="stil_text_drepthunghi_sus">
              SURSE & MEMORIE
            </p>
          </NavLink>
          <NavLink to="/V&C">
            <p id="fanuri" className="stil_text_drepthunghi_sus">
              VENTILATOARE & CARCASE
            </p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
