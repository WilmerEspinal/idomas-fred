import Card from "../../componets/card/card";

import Aublanco from "../../audio/color/blanco.mp3";
import Aunegro from "../../audio/color/negro.mp3";
import Auverde from "../../audio/color/verde.mp3";
import Aurojo from "../../audio/color/rojo.mp3";
import Auamarillo from "../../audio/color/amarillo.mp3";
import Aumarron from "../../audio/color/marron.mp3";

import iblanco from "../../assets/images/colores/blanco.jpeg";
import inegro from "../../assets/images/colores//negr0.jpg";
import iverde from "../../assets/images/colores/verde.jpg";
import irojo from "../../assets/images/colores/rojo.jpg";
import iamarillo from "../../assets/images/colores/amarillo.jpg";
import imarron from "../../assets/images/colores/marron.jpg";

const Colores = () => {
  return (
    <section>
      <h1 className="text-2xl mb-3 text-white">
        POTSOMENTOTSIPE - LOS COLORES
      </h1>
      <section>
        <div className="flex gap-2 flex-wrap justify-center">
          <Card
            title="Kitamarori"
            imageSrc={iblanco}
            audioSrc={Aublanco}
            overlayText="Blanco"
          />
          <Card
            title="Kisari"
            imageSrc={inegro}
            audioSrc={Aunegro}
            overlayText="Negro"
          />
          <Card
            title="Kenashiri"
            imageSrc={iverde}
            audioSrc={Auverde}
            overlayText="Verde"
          />
          <Card
            title="Kityonkari"
            imageSrc={irojo}
            audioSrc={Aurojo}
            overlayText="Rojo"
          />
          <Card
            title="Kiteriri"
            imageSrc={iamarillo}
            audioSrc={Auamarillo}
            overlayText="Amarillo"
          />
          <Card
            title="Kamarari"
            imageSrc={imarron}
            audioSrc={Aumarron}
            overlayText="Marrón"
          />
        </div>
      </section>
    </section>
  );
};

export default Colores;
