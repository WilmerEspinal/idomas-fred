import Card from "../../componets/card/card";
import Izapallo from "../../assets/images/alimentos/zapallo.jpg";
import Imani from "../../assets/images/alimentos/mani.jpg";
import Ipapaya from "../../assets/images/alimentos/papaya.jpg";
import Iplatano from "../../assets/images/alimentos/platano.jpg";
import Icacao from "../../assets/images/alimentos/cacao.jpg";
import Ikafe from "../../assets/images/alimentos/kafe.jpg";
import yuca from "../../assets/images/objetos/yuca.jpg";
import camote from "../../assets/images/objetos/camote.jpg";

import AuCamote from "../../audio/objetos/camote.mp3";
import Auzapallo from "../../audio/familia/zapallo.mp3";
import Aumani from "../../audio/familia/mani.mp3";
import Aupapaya from "../../audio/familia/papaya.mp3";
import Auplatano from "../../audio/familia/platano.mp3";
import Aucacao from "../../audio/familia/cacao.mp3";

import Aucafe from "../../audio/familia/cafe.mp3";

const Alimentos = () => {
  return (
    <section>
      <h1 className="text-2xl mb-3 text-white">############ - ALIMENTOS</h1>
      <section>
        <div className="flex gap-2 flex-wrap justify-center">
          <Card
            title="Kemi"
            imageSrc={Izapallo}
            audioSrc={Auzapallo}
            overlayText="Zapallo"
          />
          <Card
            title="INKI"
            imageSrc={Imani}
            audioSrc={Aumani}
            overlayText="MANI"
          />
          <Card
            title="MAPOCHA"
            imageSrc={Ipapaya}
            audioSrc={Aupapaya}
            overlayText="PAPAYA"
          />
          <Card
            title="PARENTI"
            imageSrc={Iplatano}
            audioSrc={Auplatano}
            overlayText="PLÁTANO"
          />
          <Card
            title="KEMITO"
            imageSrc={Icacao}
            audioSrc={Aucacao}
            overlayText="CACAO"
          />
          <Card
            title="kaniri"
            imageSrc={yuca}
            audioSrc={""}
            overlayText="yuca"
          />
          <Card
            title="koricha"
            imageSrc={camote}
            audioSrc={AuCamote}
            overlayText="Camote"
          />
          <Card
            title="KAJE"
            imageSrc={Ikafe}
            audioSrc={Aucafe}
            overlayText="CAFÉ"
          />
        </div>
      </section>
    </section>
  );
};

export default Alimentos;
