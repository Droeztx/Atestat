import i7 from "../pozici/poze_cpu/i7.png";
import i9 from "../pozici/poze_cpu/i9.png";
import i914 from "../pozici/poze_cpu/i914.png";
import i5 from "../pozici/poze_cpu/i5.png";
import i3 from "../pozici/poze_cpu/i3.png";
import i514 from "../pozici/poze_cpu/i514.png";
import am5 from "../pozici/poze_cpu/am5.png";
import am7 from "../pozici/poze_cpu/am7.png";
import am9 from "../pozici/poze_cpu/am9.png";

const Cpu = () => {
  return (
    <div id="main3">
      <div id="main_fundal3">
        <div className="divpoze">
          <img src={i7} className="pozici_formatare" alt="NU EXIST"></img>
          <img src={i9} className="pozici_formatare" alt="NU EXIST"></img>
          <img src={i914} className="pozici_formatare" alt="NU EXIST"></img>
        </div>
        <div className="divpoze">
          <p id="i71" className="baza_font_main1">
            Core i7 12700K 3.6GHz box<br></br>
            Socket: 1700 <br></br>
            Numar nuclee: 12<br></br>
            Numar thread-uri: 20<br></br>
            Frecventa: 3600 Mhz<br></br>
            Frecventa turbo: 5000 Mhz<br></br>
            Pret: 1.515,08 RON
          </p>
          <p id="i91" className="baza_font_main1">
            Core i9 13900K 3.0GHz box<br></br>
            Socket: 1700<br></br>
            Numar nuclee: 24<br></br>
            Numar thread-uri: 32<br></br>
            Frecventa: 3000 Mhz<br></br>
            Frecventa turbo: 5800 Mhz<br></br>
            Pret: 3.149,99 RON
          </p>
          <p id="i9114" className="baza_font_main1">
            Core i9 14900KF 3.2GHz box<br></br>
            Socket: 1700<br></br>
            Numar nuclee: 24<br></br>
            Numar thread-uri: 32<br></br>
            Frecventa: 3200 Mhz<br></br>
            Frecventa turbo: 6000 Mhz<br></br>
            Pret: 2.989,99 RON
          </p>
        </div>
        <div className="divpoze">
          <img src={i5} className="pozici_formatare" alt="NU EXIST"></img>
          <img src={i3} className="pozici_formatare" alt="NU EXIST"></img>
          <img src={i514} className="pozici_formatare" alt="NU EXIST"></img>
        </div>
        <div className="divpoze">
          <p id="i5" className="baza_font_main1">
            Core i5 13600K 3.5GHz box<br></br>
            Socket: 1700<br></br>
            Numar nuclee: 14<br></br>
            Numar thread-uri: 20<br></br>
            Frecventa: 3500 Mhz<br></br>
            Frecventa turbo: 5100 Mhz<br></br>
            Pret: 1.729,99 RON
          </p>
          <p id="i3" className="baza_font_main1">
            Core i3 12100F 3.3GHz box<br></br>
            Socket: 1700<br></br>
            Numar nuclee: 4<br></br>
            Numar thread-uri: 8<br></br>
            Frecventa: 3300 Mhz<br></br>
            Frecventa turbo: 4300 Mhz<br></br>
            Pret: 465,49 RON
          </p>
          <p id="i514" className="baza_font_main1">
            Core i5 14400 2.5GHz box<br></br>
            Socket: 1700<br></br>
            Numar nuclee: 10<br></br>
            Numar thread-uri: 16<br></br>
            Frecventa: 2400 Mhz<br></br>
            Frecventa turbo: 4700 Mhz<br></br>
            Pret: 1.249,99 RON
          </p>
        </div>
        <div className="divpoze">
          <img src={am5} className="pozici_formatare" alt="NU EXIST"></img>
          <img src={am7} className="pozici_formatare" alt="NU EXIST"></img>
          <img src={am9} className="pozici_formatare" alt="NU EXIST"></img>
        </div>
        <div className="divpoze">
          <p id="am5" className="baza_font_main1">
            AMD Ryzen 5 7600 3.8GHz box<br></br>
            Socket: AM5<br></br>
            Numar nuclee: 6<br></br>
            Numar thread-uri: 12<br></br>
            Frecventa: 3800 Mhz<br></br>
            Frecventa turbo: 5100 Mhz<br></br>
            Pret: 1.034,99 RON
          </p>
          <p id="am7" className="baza_font_main1">
            AMD Ryzen 7 7700X 4.5GHz box<br></br>
            Socket: AM5<br></br>
            Numar nuclee: 8<br></br>
            Numar thread-uri: 16<br></br>
            Frecventa: 4500 Mhz<br></br>
            Frecventa turbo: 5400 Mhz<br></br>
            Pret: 1.816,76 RON
          </p>
          <p id="am9" className="baza_font_main1">
            AMD Ryzen 9 7900X3D 4.4GHz box<br></br>
            Socket: AM5<br></br>
            Numar nuclee: 12<br></br>
            Numar thread-uri: 24<br></br>
            Frecventa: 4400 Mhz<br></br>
            Frecventa turbo: 5600 Mhz<br></br>
            Pret: 2.369,99 RON
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cpu;
