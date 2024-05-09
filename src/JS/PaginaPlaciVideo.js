import gb4090 from "../pozici/poce_vc/4090GB.png";
import sup4070 from "../pozici/poce_vc/4070super.png";
import msi3060 from "../pozici/poce_vc/msi300.png";
import n4060 from "../pozici/poce_vc/4060n.png";
import gtx1650 from "../pozici/poce_vc/gtx 1650.png";
import r6 from "../pozici/poce_vc/radeon6600.png";
import ti70 from "../pozici/poce_vc/4070ti.png";
import s3080 from "../pozici/poce_vc/3080.png";
import arc from "../pozici/poce_vc/arc.png";

const VideoCard = () => {
  return (
    <div id="main2">
      <div id="main_fundal2">
        <div className="divpoze">
          <img src={gb4090} className="pozici_formatare" alt="NU EXIST"></img>
          <img src={sup4070} className="pozici_formatare" alt="NU EXIST"></img>
          <img src={msi3060} className="pozici_formatare" alt="NU EXIST"></img>
        </div>
        <div className="divpoze">
          <p id="gb4090text" className="baza_font_main1">
            GIGABYTE GeForce RTX 4090<br></br>
            Dimensiune memorie: 24 GB<br></br>
            HDMI: 1<br></br>
            Display port: 3<br></br>
            Pret: 10.092,79 RON
          </p>
          <p id="sup4070text" className="baza_font_main1">
            ASUS GeForce RTX 4070 SUPER ROG STRIX<br></br>
            Dimensiune memorie: 12 GB<br></br>
            HDMI: 2<br></br>
            Display port: 3<br></br>
            Pret: 4.799,99 RON
          </p>
          <p id="msi3060text" className="baza_font_main1">
            MSI GeForce RTX 3060<br></br>
            Dimensiune memorie: 12 GB<br></br>
            HDMI: 1<br></br>
            Display port: 3<br></br>
            Pret: 1.604,63 RON
          </p>
        </div>
        <div className="divpoze">
          <img src={n4060} className="pozici_formatare" alt="NU EXIST"></img>
          <img src={gtx1650} className="pozici_formatare" alt="NU EXIST"></img>
          <img src={r6} className="pozici_formatare" alt="NU EXIST"></img>
        </div>
        <div className="divpoze">
          <p id="n4060text" className="baza_font_main1">
            ASUS GeForce RTX 4060<br></br>
            Dimensiune memorie: 8 GB<br></br>
            HDMI: 1<br></br>
            Display port: 3<br></br>
            Pret: 1.729,99 RON
          </p>
          <p id="gtx1650text" className="baza_font_main1">
            MSI GeForce GTX 1650<br></br>
            Dimensiune memorie: 4 GB<br></br>
            HDMI: 1<br></br>
            Display port: 1<br></br>
            DVI: 1<br></br>
            Pret: 914,55 RON
          </p>
          <p id="r6text" className="baza_font_main1">
            ASRock Radeon RX 6600<br></br>
            Dimensiune memorie: 8 GB<br></br>
            HDMI: 1<br></br>
            Display port: 3<br></br>
            Pret: 1.824,65 RON
          </p>
        </div>
        <div className="divpoze">
          <img src={ti70} className="pozici_formatare" alt="NU EXIST"></img>
          <img src={s3080} className="pozici_formatare" alt="NU EXIST"></img>
          <img src={arc} className="pozici_formatare" alt="NU EXIST"></img>
        </div>
        <div className="divpoze">
          <p id="ti70text" className="baza_font_main1">
            GIGABYTE GeForce RTX 4070 Ti<br></br>
            Dimensiune memorie: 12 GB<br></br>
            HDMI: 1<br></br>
            Display port: 3<br></br>
            Pret: 5.164,71 RON
          </p>
          <p id="s3080text" className="baza_font_main1">
            MSI GeForce RTX 3080 SUPRIM<br></br>
            Dimensiune memorie: 12 GB<br></br>
            HDMI: 1<br></br>
            Display port: 3<br></br>
            Pret: 4.883,53 RON
          </p>
          <p id="arctext" className="baza_font_main1">
            Intel ARC A770 Phantom<br></br>
            Dimensiune memorie: 8 GB<br></br>
            HDMI: 1<br></br>
            Display port: 3<br></br>
            Pret: 2.016,72 RON
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
