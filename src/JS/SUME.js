import rm750 from "../pozici/poze_sxm/rm750.png";
import rogalb from "../pozici/poze_sxm/rogalb.png";
import rogn from "../pozici/poze_sxm/rogn.png";
import rognn from "../pozici/poze_sxm/rognn.png";
import njoy from "../pozici/poze_sxm/njoy.png";
import smsg from "../pozici/poze_sxm/smsg.png";
import cs from "../pozici/poze_sxm/cs.png";
import hdd from "../pozici/poze_sxm/hdd.png";
import ssd from "../pozici/poze_sxm/ssd.png";

const Sume = () => {
  return (
    <div id="main5">
      <div id="main_fundal5">
        <div className="divpoze">
          <img src={rm750} className="pozici_formatare" alt="NU EXIST"></img>
          <img src={rogalb} className="pozici_formatare" alt="NU EXIST"></img>
          <img src={rogn} className="pozici_formatare" alt="NU EXIST"></img>
        </div>
        <div className="divpoze">
          <p id="rm750" className="baza_font_main1">
            Sursa Corsair RM750<br></br>
            Tip: ATX 2.4<br></br>
            Putere: 750 W<br></br>
            Eficienta: 90 %<br></br>
            Certificare: 80+ Gold<br></br>
            Modulara: Da, Full Modulara<br></br>
            Dimensiuni: 160 x 150 x 86 mm <br></br>
            Pret: 719,55 RON
          </p>
          <p id="rogalb" className="baza_font_main1">
            ASUS ROG THOR 1600T<br></br>
            Tip: ATX<br></br>
            Putere: 1600 W<br></br>
            Eficienta: 95 %<br></br>
            Certificare: 80+ Titanium<br></br>
            Modulara: Da, Full Modulara<br></br>
            Dimensiuni: 190 x 150 x 86 mm <br></br>
            Pret: 4.913,91 RON
          </p>
          <p id="rogn" className="baza_font_main1">
            ASUS ROG Thor Platinum<br></br>
            Tip: ATX<br></br>
            Putere: 1200 W<br></br>
            Eficienta: 92 %<br></br>
            Certificare: 80+ Platinum<br></br>
            Modulara: Da, Full Modulara<br></br>
            Dimensiuni: 190 x 150 x 86 mm <br></br>
            Pret: 1.890,13 RON
          </p>
        </div>
        <div className="divpoze">
          <img src={rognn} className="pozici_formatare" alt="NU EXIST"></img>
          <img src={njoy} className="pozici_formatare" alt="NU EXIST"></img>
          <img src={smsg} className="pozici_formatare" alt="NU EXIST"></img>
        </div>
        <div className="divpoze">
          <p id="rognn" className="baza_font_main1">
            ASUS ROG Strix<br></br>
            Tip: ATX 12V<br></br>
            Putere: 650 W<br></br>
            Eficienta: 90 %<br></br>
            Certificare: 80+ Gold<br></br>
            Modulara: Da, Full Modulara<br></br>
            Dimensiuni: 160 x 150 x 86 mm <br></br>
            Pret: 659,02 RON
          </p>
          <p id="njoy" className="baza_font_main1">
            nJoy Theta 750<br></br>
            Tip: ATX 12V v2.3<br></br>
            Putere: 750 W<br></br>
            Eficienta: 85 %<br></br>
            Certificare: 80+ Bronze<br></br>
            Modulara: Da, Semi Modulara<br></br>
            Dimensiuni: 150 x 140 x 86 mm <br></br>
            <br></br>
          </p>
          <p id="smsg" className="baza_font_main1">
            SSD Samsung 980 PRO<br></br>
            Capacitate: 1 TB<br></br>
            Citire max: 7000 MB/s <br></br>
            Scriere max: 5000 MB/s<br></br>
            Lungime M.2 slot: 80 mm<br></br>
            Rezistenta la soc: 1500G<br></br>
            Interfata: PCI Express 4.0 x4<br></br>
            Pret: 539,99 RON
          </p>
        </div>
        <div className="divpoze">
          <img src={cs} className="pozici_formatare" alt="NU EXIST"></img>
          <img src={hdd} className="pozici_formatare" alt="NU EXIST"></img>
          <img src={ssd} className="pozici_formatare" alt="NU EXIST"></img>
        </div>
        <div className="divpoze">
          <p id="cs1" className="baza_font_main1">
            SSD Corsair MP600 ELITE<br></br>
            Capacitate: 1 TB<br></br>
            Citire max: 7000 MB/s <br></br>
            Scriere max: 6200 MB/s<br></br>
            Lungime M.2 slot: 80 mm<br></br>
            Rezistenta la soc: 1500G<br></br>
            Interfata: PCI Express 4.0 x4<br></br>
            Pret: 519,99 RON
          </p>
          <p id="hdd" className="baza_font_main1">
            Hard disk Seagate BarraCuda<br></br>
            Interfata: SATA-III<br></br>
            Capacitate: 2 TB<br></br>
            Buffer: 256 MB<br></br>
            Viteza: 7200 RPM<br></br>
            Pret: 329,99 RON
          </p>
          <p id="ssd" className="baza_font_main1">
            SSD Samsung 870 EVO<br></br>
            Interfata: SATA-III<br></br>
            Capacitate: 4 TB<br></br>
            Citire max: 560 MB/s<br></br>
            Scriere max: 530 MB/s<br></br>
            Rezistenta la soc: 1500G<br></br>
            Dimensiuni: 100 x 69.85 x 6.8 mm<br></br>
            Pret: 1.699,99 RON
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sume;
