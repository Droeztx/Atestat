import cors from "../pozici/poze_ram/cors.png";
import fury from "../pozici/poze_ram/fury.png";
import ares from "../pozici/poze_ram/ares.png";
import adata from "../pozici/poze_ram/adata.png";
import king from "../pozici/poze_ram/king.png";
import cs from "../pozici/poze_ram/cs.png";
import gd from "../pozici/poze_ram/gd.png";
import crs from "../pozici/poze_ram/crs.png";
import fry from "../pozici/poze_ram/fry.png";

const Ram = () => {
  return (
    <div id="main4">
      <div id="main_fundal4">
        <div className="divpoze">
          <img src={cors} className="pozici_formatare" alt="NU EXIST"></img>
          <img src={fury} className="pozici_formatare" alt="NU EXIST"></img>
          <img src={ares} className="pozici_formatare" alt="NU EXIST"></img>
        </div>
        <div className="divpoze">
          <p id="cors" className="baza_font_main1">
            Corsair Vengeance Dual Channel Kit<br></br>
            Tip: DDR5<br></br>
            Capacitate: 32 GB<br></br>
            Frecventa: 5200 MHz<br></br>
            Kit Dual Channel: 2x 16 GB<br></br>
            Pret: 549,99 RON
          </p>
          <p id="fury" className="baza_font_main1">
            Kingston FURY Beast<br></br>
            Tip: DDR5<br></br>
            Capacitate: 32 GB<br></br>
            Frecventa: 4800 MHz<br></br>
            Kit Dual Channel: 2x 16 GB<br></br>
            Pret: 579,99 RON
          </p>
          <p id="ares" className="baza_font_main1">
            Lexar ARES RGB<br></br>
            Tip: DDR5<br></br>
            Capacitate: 64 GB<br></br>
            Frecventa: 6000 MHz<br></br>
            Kit Dual Channel: 2x 32 GB<br></br>
            Pret: 599,99 RON
          </p>
        </div>
        <div className="divpoze">
          <img src={adata} className="pozici_formatare" alt="NU EXIST"></img>
          <img src={king} className="pozici_formatare" alt="NU EXIST"></img>
          <img src={cs} className="pozici_formatare" alt="NU EXIST"></img>
        </div>
        <div className="divpoze">
          <p id="adata" className="baza_font_main1">
            ADATA XPG LANCER<br></br>
            Tip: DDR5<br></br>
            Capacitate: 32 GB<br></br>
            Frecventa: 5200 MHz<br></br>
            Kit Dual Channel: 2x 16 GB<br></br>
            Pret: 599,99 RON
          </p>
          <p id="king" className="baza_font_main1">
            Kingston FURY Beast White<br></br>
            Tip: DDR5<br></br>
            Capacitate: 32 GB<br></br>
            Frecventa: 5600 MHz<br></br>
            Pret: 569,99 RON
          </p>
          <p id="cs" className="baza_font_main1">
            Corsair Vengeance LPX Black<br></br>
            Tip: DDR4<br></br>
            Capacitate: 32 GB<br></br>
            Frecventa: 3200 MHz<br></br>
            Kit Dual Channel: 2x 16 GB<br></br>
            Pret: 389,99 RON
          </p>
        </div>
        <div className="divpoze">
          <img src={gd} className="pozici_formatare" alt="NU EXIST"></img>
          <img src={crs} className="pozici_formatare" alt="NU EXIST"></img>
          <img src={fry} className="pozici_formatare" alt="NU EXIST"></img>
        </div>
        <div className="divpoze">
          <p id="gd" className="baza_font_main1">
            GOODRAM IRDM<br></br>
            Tip: DDR4<br></br>
            Capacitate: 32 GB<br></br>
            Frecventa: 3200 MHz<br></br>
            Kit Dual Channel: 2x 16 GB<br></br>
            Pret: 349,99 RON
          </p>
          <p id="crs" className="baza_font_main1">
            Corsair Vengeance RGB PRO<br></br>
            Tip: DDR4<br></br>
            Capacitate: 32 GB<br></br>
            Frecventa: 3600 MHz<br></br>
            Kit Dual Channel: 2x 16 GB<br></br>
            Pret: 464,99 RON
          </p>
          <p id="fry" className="baza_font_main1">
            Kingston FURY Renegade Black<br></br>
            Tip: DDR4<br></br>
            Capacitate: 32 GB<br></br>
            Frecventa: 3600 MHz<br></br>
            Kit Dual Channel: 2x 16 GB<br></br>
            Pret: 459,99 RON
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ram;
