import Card from "../../componets/card/card";
import padre from "../../assets/images/familia/padre.png";
import madre from "../../assets/images/familia/madre.png";
import hijo from "../../assets/images/familia/hijo.png";
import hija from "../../assets/images/familia/hija.png";
import abuelo from "../../assets/images/familia/abuelo.png";
import abuela from "../../assets/images/familia/abuela.png";
import tio from "../../assets/images/familia/tio.png";
import tia from "../../assets/images/familia/tia.png";
import primo from "../../assets/images/familia/primo.png";
import prima from "../../assets/images/familia/prima.png";
import suegro from "../../assets/images/familia/suegro.png";
import suegra from "../../assets/images/familia/suegra.png";

import Aupapa from "../../audio/familia/papa.mp3";
import Aumama from "../../audio/familia/mama.mp3";
import Auabuelo from "../../audio/familia/abuelo.mp3";
import AuSuegra from "../../audio/familia/suegra.mp3";
import AuSuegro from "../../audio/familia/suegro.mp3";
import AuHijo from "../../audio/familia/hijo.mp3";
import AuHija from "../../audio/familia/hija.mp3";
import Auabuela from "../../audio/familia/abuela.mp3";
import Autio from "../../audio/familia/tio.mp3";
import Autia from "../../audio/familia/tia.mp3";
import Auprimo from "../../audio/familia/primo.mp3";
import Auprima from "../../audio/familia/prima.mp3";

const Familia = () => {
  return (
    <section className="">
      <h1 className="text-2xl mb-3 text-white">NOSHANINKA - MI FAMILIA</h1>
      <section>
        <div className="flex gap-2 flex-wrap justify-center ">
          <Card
            title="APA"
            imageSrc="https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/05/11232704/ashaninkas-narcotrafico-invasiones-pandemia-5-768x512.jpg"
            audioSrc={Aupapa}
            overlayText="PAPÁ"
          />
          <Card
            title="INA"
            imageSrc="https://proactivo.com.pe/wp-content/uploads/2014/04/Ruth-Buend%C3%ADa.jpg"
            audioSrc={Aumama}
            overlayText="MAMÁ"
          />
          <Card
            title="NOTOMI"
            imageSrc={hijo}
            audioSrc={AuHijo}
            overlayText="HIJO"
          />
          <Card
            title="NOSHINTO"
            imageSrc={hija}
            audioSrc={AuHija}
            overlayText="HIJA"
          />
          <Card
            title="CHAINE"
            imageSrc={abuelo}
            audioSrc={Auabuelo}
            overlayText="ABUELO"
          />
          <Card
            title="ISHA"
            imageSrc={abuela}
            audioSrc={Auabuela}
            overlayText="ABUELA"
          />
          <Card
            title="APATSORI"
            imageSrc={tio}
            audioSrc={Autio}
            overlayText="TIO"
          />
          <Card
            title="INATSORI"
            imageSrc={tia}
            audioSrc={Autia}
            overlayText="TIA"
          />
          <Card
            title="NIRENTITSORI"
            imageSrc={primo}
            audioSrc={Auprimo}
            overlayText="PRIMO"
          />
          <Card
            title="NOTSIROTSORI"
            imageSrc="https://hytimes.pe/wp-content/uploads/2022/03/Ashaninkas-tejedoras-1024x683.jpg?x93906"
            audioSrc={Auprima}
            overlayText="PRIMA"
          />
          <Card
            title="KOKI"
            imageSrc="https://believe.earth/wp-content/uploads/2017/09/Foto-de-Benki-Piy%C3%A3ko-1024x941.jpg"
            audioSrc={AuSuegro}
            overlayText="SUEGRO"
          />
          <Card
            title="AIRONTSI"
            imageSrc="https://puntodevistaypropuesta.wordpress.com/wp-content/uploads/2014/10/mujer-ashc3a1ninka.jpg"
            audioSrc={AuSuegra}
            overlayText="SUEGRA"
          />
        </div>
      </section>
    </section>
  );
};

export default Familia;

/*

const Familia = () => {
  return (
    <section>
      <h1 className="text-2xl mb-3">ÑAKARONTSIPE- LOS NUMEROS</h1>
      <section>
        <div className="flex gap-2 flex-wrap justify-center">
          <Card title="" imageSrc="" audioSrc={""} overlayText="" />
        </div>
      </section>
    </section>
  );
};


*/
