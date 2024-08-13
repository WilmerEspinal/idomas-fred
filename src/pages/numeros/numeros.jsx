import Card from "../../componets/card/card";
import Cero from "../../assets/images/numeros/cero.png";
import Uno from "../../assets/images/numeros/uno.png";

import Dos from "../../assets/images/numeros/dos.png";
import Tres from "../../assets/images/numeros/tres.png";
import Cuatro from "../../assets/images/numeros/cuatro.png";
import Cinco from "../../assets/images/numeros/cinco.png";
import Seis from "../../assets/images/numeros/seis.png";
import Siete from "../../assets/images/numeros/siete.png";
import Ocho from "../../assets/images/numeros/ocho.png";
import Nueve from "../../assets/images/numeros/nueve.png";
import Diez from "../../assets/images/numeros/diez.png";

import cero from "../../audio/numero/cero.mp3";
import uno from "../../audio/numero/uno.mp3";
import dos from "../../audio/numero/dos.mp3";
import tres from "../../audio/numero/tres.mp3";
import cuatro from "../../audio/numero/cuatro.mp3";
import cinco from "../../audio/numero/cinco.mp3";
import seis from "../../audio/numero/seis.mp3";
import siete from "../../audio/numero/siete.mp3";
import ocho from "../../audio/numero/ocho.mp3";
import nueve from "../../audio/numero/nueve.mp3";
import diez from "../../audio/numero/diez.mp3";
const Numeros = () => {
  return (
    <section>
      <h1 className="text-2xl mb-3 text-white">ÑAKARONTSIPE- LOS NUMEROS</h1>
      <section>
        <div className="flex gap-2 flex-wrap justify-center">
          <Card
            title="Tekatsi"
            imageSrc={Cero}
            audioSrc={cero}
            overlayText="Cero"
          />
          <Card
            title=" Aparoni"
            imageSrc={Uno}
            audioSrc={uno}
            overlayText="Uno"
          />
          <Card
            title="Apite"
            imageSrc={Dos}
            audioSrc={dos}
            overlayText=" Dos"
          />
          <Card
            title="Maba"
            imageSrc={Tres}
            audioSrc={tres}
            overlayText="Tres"
          />
          <Card
            title="Otsi"
            imageSrc={Cuatro}
            audioSrc={cuatro}
            overlayText="Cuatro"
          />
          <Card
            title="Koni"
            imageSrc={Cinco}
            audioSrc={cinco}
            overlayText="Cinco"
          />
          <Card
            title="Iko"
            imageSrc={Seis}
            audioSrc={seis}
            overlayText="Seis"
          />
          <Card
            title="Tson"
            imageSrc={Siete}
            audioSrc={siete}
            overlayText="Siete"
          />
          <Card
            title="Soti"
            imageSrc={Ocho}
            audioSrc={ocho}
            overlayText="Ocho"
          />
          <Card
            title="Tin"
            imageSrc={Nueve}
            audioSrc={nueve}
            overlayText="Nueve"
          />
          <Card
            title="Tsa"
            imageSrc={Diez}
            audioSrc={diez}
            overlayText="Diez"
          />
        </div>
      </section>
    </section>
  );
};

export default Numeros;

/*

const Numeros = () => {
  return (
    <section>
      <h1 className="text-2xl mb-3">ÑAKARONTSIPE- LOS NUMEROS</h1>
      <section>
        <div className="flex gap-2"></div>
      </section>
    </section>
  );
};


*/
