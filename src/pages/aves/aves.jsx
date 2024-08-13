import Card from "../../componets/card/card";
import Autukan from "../../audio/aves/tucan.mp3";
import Auperdiz from "../../audio/aves/perdiz.mp3";
import Aupava from "../../audio/aves/pava.mp3";
import Auloro from "../../audio/aves/loro.mp3";
import Aupikaflor from "../../audio/aves/picaflor.mp3";
import Aupaloma from "../../audio/aves/paloma.mp3";
import Aumorcielago from "../../audio/aves/morcielago.mp3";

import PAVAMONTE from "../../assets/images/aves/PAVA-MONTE.png";
import Perdiz from "../../assets/images/aves/Perdiz.png";
import loro from "../../assets/images/aves/loro.jpg";
import picaflor from "../../assets/images/aves/picaflor.jpg";
import tukan from "../../assets/images/aves/tukan.jpg";
import paloma from "../../assets/images/aves/paloma.jpg";
import morcielago from "../../assets/images/aves/morcielago.jpg";
const Aves = () => {
  return (
    <section>
      <h1 className="text-2xl mb-3 text-white">TSIMERIPE - AVES</h1>
      <section className="mb-3">
        <div className="flex gap-2 flex-wrap justify-center">
          <Card
            title="Chorito"
            imageSrc={loro}
            audioSrc={Auloro}
            overlayText="Loro"
          />
          <Card
            title="Tsonkiri"
            imageSrc={picaflor}
            audioSrc={Aupikaflor}
            overlayText="Picaflor"
          />
          <Card
            title="Opempe"
            imageSrc={tukan}
            audioSrc={Autukan}
            overlayText="Tucán"
          />
          <Card
            title="Sankati"
            imageSrc={PAVAMONTE}
            audioSrc={Aupava}
            overlayText="Pava del monte"
          />

          <Card
            title="Patsiri"
            imageSrc={Perdiz}
            audioSrc={Auperdiz}
            overlayText="Perdiz"
          />

          <Card
            title="Shironi"
            imageSrc={paloma}
            audioSrc={Aupaloma}
            overlayText="Paloma"
          />
        </div>
        <div className="">
          <h3 className="text-2xl my-3 text-center text-white">
            Mamiferos voladores
          </h3>
          <div className="flex justify-center">
            <Card
              title="Pijiri"
              imageSrc={morcielago}
              audioSrc={Aumorcielago}
              overlayText="Murciélago"
            />
          </div>
        </div>
      </section>
    </section>
  );
};
export default Aves;
