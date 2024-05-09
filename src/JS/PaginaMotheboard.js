import b406eagle from "../pozici/poze_mb/b460Eagle.png";
import b550 from "../pozici/poze_mb/B550.png";
import b650 from "../pozici/poze_mb/B650-TUF.png";
import x670 from "../pozici/poze_mb/X670E.png";
import x670p from "../pozici/poze_mb/x670PRIME.png";
import z790 from "../pozici/poze_mb/Z790.png";
import b760g from "../pozici/poze_mb/b760G.png";
import b760m from "../pozici/poze_mb/B760M.png";
import z790Aqu from "../pozici/poze_mb/Z790Aquorus.png";
const Motherboard = () => {
  return (
    <div id="main1">
      <div id="main_fundal1">
        <div className="divpoze">
          <img src={b406eagle} id="b460eagle" alt="NU EXIST"></img>
          <img src={b550} id="b550" alt="NU EXIST"></img>
          <img src={b650} id="b650" alt="NU EXIST"></img>
        </div>
        <div className="divpoze">
          <p id="b460eagletext" className="baza_font_main1">
            GIGABYTE B650 EAGLE AX<br></br>
            Soclu procesor:AM5<br></br>
            Tip memorie: DDR5(4 sloturi)<br></br>
            Placa audio integrata: 7.1 Audio with Realtek<br></br>
            Numar SATA-III: 4<br></br>
            M.2: 3<br></br>
            Format: ATX<br></br>
            Pret: 879,99 RON
          </p>
          <p id="b550text" className="baza_font_main1">
            MSI MPG B550 GAMING PLUS<br></br>
            Soclu procesor: AM4<br></br>
            Tip memorie: DDR4(4 sloturi)<br></br>
            Placa audio integrata: 7.1 Audio with Realtek ALC892<br></br>
            Numar SATA-III: 6<br></br>
            M.2: 2<br></br>
            Format: ATX<br></br>
            Pret: 629,99 RON
          </p>
          <p id="b650text" className="baza_font_main1">
            ASUS TUF GAMING B650-PLUS<br></br>
            Soclu procesor: AM5<br></br>
            Tip memorie: DDR5(4 sloturi)<br></br>
            Placa audio integrata: 7.1 Audio with Realtek<br></br>
            Numar SATA-III: 4<br></br>
            M.2: 3<br></br>
            Format: ATX<br></br>
            Pret: 939,99 RON
          </p>
        </div>
        <div className="divpoze">
          <img src={x670} id="x670" alt="NU EXIST"></img>
          <img src={x670p} id="x670p" alt="NU EXIST"></img>
          <img src={z790} id="z790" alt="NU EXIST"></img>
        </div>
        <div className="divpoze">
          <p id="x670text" className="baza_font_main1">
            ASUS PROART X670E-CREATOR WIFI<br></br>
            Soclu procesor: AM5<br></br>
            Tip memorie: DDR5(4 sloturi)<br></br>
            Placa audio: integrata 7.1 Audio<br></br>
            Numar SATA-III: 4<br></br>
            M.2: 4<br></br>
            Format: ATX<br></br>
            Pret: 2.812,21 RON
          </p>
          <p id="x670ptext" className="baza_font_main1">
            ASUS PRIME X670-P<br></br>
            Soclu procesor: AM5<br></br>
            Tip memorie: DDR5(4 sloturi)<br></br>
            Placa audio integrata: 7.1 Audio<br></br>
            Numar SATA-III: 6<br></br>
            M.2: 3<br></br>
            Format: ATX<br></br>
            Pret: 1.042,26 RON
          </p>
          <p id="z790text" className="baza_font_main1">
            MSI MAG Z790 TOMAHAWK WIFI<br></br>
            Soclu procesor: 1700(intel)<br></br>
            Tip memorie: DDR5(4 sloturi)<br></br>
            Placa audio integrata: 7.1 Audio<br></br>
            Numar SATA-III: 7<br></br>
            M.2: 4<br></br>
            Format: ATX<br></br>
            Pret: 1.266,40 RON
          </p>
        </div>
        <div className="divpoze">
          <img src={b760g} id="b760g" alt="NU EXIST"></img>
          <img src={b760m} id="b760m" alt="NU EXIST"></img>
          <img src={z790Aqu} id="z790Aqu" alt="NU EXIST"></img>
        </div>
        <div className="divpoze">
          <p id="b760gtext" className="baza_font_main1">
            ASUS ROG STRIX B760-G GAMING WIFI DDR4<br></br>
            Soclu procesor: 1700(intel)<br></br>
            Tip memorie: DDR4(4 sloturi)<br></br>
            Placa audio integrata 7.1 Audio<br></br>
            Numar SATA-III: 4<br></br>
            M.2: 2<br></br>
            Format: mATX<br></br>
            Pret: 1.197,31 RON
          </p>
          <p id="b760mtext" className="baza_font_main1">
            ASUS TUF GAMING B760M-PLUS WIFI DDR4<br></br>
            Soclu procesor: 1700(intel)<br></br>
            Tip memorie: DDR4(4 sloturi)<br></br>
            Placa audio integrata 7.1 Audio<br></br>
            Numar SATA-III: 4<br></br>
            M.2: 2<br></br>
            Format: mATX<br></br>
            Pret: 1.082,61 RON
          </p>
          <p id="z790Aqutext" className="baza_font_main1">
            GIGABYTE Z790 AORUS TACHYON<br></br>
            Soclu procesor: 1700(intel)<br></br>
            Tip memorie: DDR5(2 sloturi)<br></br>
            Placa audio integrata 7.1 Audio<br></br>
            Numar SATA-III: 4<br></br>
            M.2: 4<br></br>
            Format eATX<br></br>
            Pret: 3.056,15 RON
          </p>
        </div>
      </div>
    </div>
  );
};

export default Motherboard;
