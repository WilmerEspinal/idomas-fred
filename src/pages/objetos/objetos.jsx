import Card from "../../componets/card/card";

import bolsa from "../../assets/images/objetos/bolsa.webp";
import canasta from "../../assets/images/objetos/cansta.jpg";
import corona from "../../assets/images/objetos/corona.jpg";
import algodon from "../../assets/images/objetos/algodon.jpg";
import estera from "../../assets/images/objetos/estera.jpg";
import luna from "../../assets/images/objetos/luna.jpg";
import billete from "../../assets/images/objetos/billete.jpg";
import arco from "../../assets/images/objetos/arco.jpg";
import machete from "../../assets/images/objetos/machete.jpg";
import caramelo from "../../assets/images/objetos/caramelo.jpg";
import flecha from "../../assets/images/objetos/flecha.png";

import AuCorona from "../../audio/objetos/corona.mp3";
import AuAlgodon from "../../audio/objetos/algodon.mp3";
import AuEstera from "../../audio/objetos/esteraa.mp3";
import AuLuna from "../../audio/objetos/luna.mp3";

import Aubillete from "../../audio/familia/billete.mp3";
import Auarco from "../../audio/familia/arco.mp3";
import Aumachete from "../../audio/familia/machete.mp3";
import Auflecha from "../../audio/familia/flecha.mp3";
import Aucaramelo from "../../audio/familia/caramelo.mp3";

const Objetos = () => {
  return (
    <section>
      <h1 className="text-2xl mb-3 text-white">
        ######### - OBJETOS Y ENTRE OTROS
      </h1>
      <section>
        <div className="flex gap-2 flex-wrap justify-center">
          <Card
            title="tsarato"
            imageSrc={bolsa}
            audioSrc={""}
            overlayText="Bolsa"
          />
          <Card
            title="kantiri"
            imageSrc={canasta}
            audioSrc={""}
            overlayText="Canasta"
          />
          <Card
            title="amatserentsi"
            imageSrc={corona}
            audioSrc={AuCorona}
            overlayText="Corona"
          />
          <Card
            title="ampeji"
            imageSrc={algodon}
            audioSrc={AuAlgodon}
            overlayText="Algodón"
          />
          <Card
            title="shitashintsi"
            imageSrc={estera}
            audioSrc={AuEstera}
            overlayText="Estera"
          />
          <Card
            title="kashiri"
            imageSrc={luna}
            audioSrc={AuLuna}
            overlayText="Luna"
          />
          <Card
            title="Kireki"
            imageSrc={billete}
            audioSrc={Aubillete}
            overlayText="Billete"
          />
          <Card
            title="Bianentsi"
            imageSrc={arco}
            audioSrc={Auarco}
            overlayText="Arco"
          />
          <Card
            title="Sabiri"
            imageSrc={machete}
            audioSrc={Aumachete}
            overlayText="Machete"
          />
          <Card
            title="CHAKOPI"
            imageSrc={flecha}
            audioSrc={Auflecha}
            overlayText="FLECHA"
          />
          <Card
            title="Chochoki"
            imageSrc={caramelo}
            audioSrc={Aucaramelo}
            overlayText="Caramelo"
          />
        </div>
      </section>
    </section>
  );
};
export default Objetos;
