import Card from "../../componets/card/card";
import Auperro from "../../audio/animales/perro.mp3";
import Augato from "../../audio/animales/gato.mp3";
import Auoso from "../../audio/animales/oso.mp3";
import Autigre from "../../audio/animales/tigre.mp3";
import Aumishasho from "../../audio/animales/mishasho.mp3";
import Ausapo from "../../audio/familia/sapo.mp3";
import Aucangrejo from "../../audio/familia/cangrejo.mp3";
import Aurana from "../../audio/familia/rana.mp3";

import IPerro from "../../assets/images/animales/perro.jpg";
import IGato from "../../assets/images/animales/gato.jpg";
import IOso from "../../assets/images/animales/eso.jpg";
import ITigre from "../../assets/images/animales/tigre.jpg";
import IMishasho from "../../assets/images/animales/mishasho.jpg";
import Icangrejo from "../../assets/images/animales/cangrejo.jpg";
import Isapo from "../../assets/images/animales/sapo.jpg";
import Irana from "../../assets/images/animales/rana.jpg";

const Animales = () => {
  return (
    <section>
      <h1 className="text-2xl mb-3 text-white">POTSOMENTOTSIPE - ANIMALES</h1>
      <section>
        <div className="flex gap-2 flex-wrap justify-center">
          <Card
            title="Otsiti"
            imageSrc={IPerro}
            audioSrc={Auperro}
            overlayText="Perro"
          />
          <Card
            title="Mishi"
            imageSrc={IGato}
            audioSrc={Augato}
            overlayText="Gato"
          />
          <Card
            title="Meni"
            imageSrc={IOso}
            audioSrc={Auoso}
            overlayText="Oso"
          />
          <Card
            title="Maniti"
            imageSrc={ITigre}
            audioSrc={Autigre}
            overlayText="Tigre"
          />
          <Card
            title="Kapeshi"
            imageSrc={IMishasho}
            audioSrc={Aumishasho}
            overlayText="Mishasho"
          />
        </div>
        <div>
          <h3 className="text-2xl my-3 text-center text-white">
            Anfibios y Crustáceos
          </h3>
          <div className="flex justify-center gap-2">
            <Card
              title="MASHERO"
              imageSrc={Isapo}
              audioSrc={Ausapo}
              overlayText="SAPO"
            />
            <Card
              title="OSHERO"
              imageSrc={Icangrejo}
              audioSrc={Aucangrejo}
              overlayText="CANGREJO"
            />
            <Card
              title="PIRINTO"
              imageSrc={Irana}
              audioSrc={Aurana}
              overlayText="RANA"
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Animales;
