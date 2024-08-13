import Card from "../../componets/card/card";
import Hola from "../../audio/saludos/hola.mp3";
import BuenosDias from "../../audio/saludos/buenos-dias.mp3";
import BuenosNoches from "../../audio/saludos/buenas-noches.mp3";
import BuenosTardes from "../../audio/saludos/buenas-tardes.mp3";
const Saludossss = () => {
  return (
    <section>
      <h1 className="text-2xl mb-3 text-white">BETSATANTSI - SALUDOS</h1>
      <section>
        <div className="flex gap-2 flex-wrap justify-center">
          <Card
            title="KITAITERI"
            imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Morning%2C_just_after_sunrise%2C_Namibia.jpg/640px-Morning%2C_just_after_sunrise%2C_Namibia.jpg"
            audioSrc={BuenosDias}
            overlayText="Buenos días"
          />
          <Card
            title="Shabiniji"
            imageSrc="https://escribir.pro/wp-content/uploads/2022/05/mediodia-medio-dia.jpg"
            audioSrc={BuenosTardes}
            overlayText="Buenas tardes"
          />
          <Card
            title="Tsiteniri"
            imageSrc="https://youtalkonline.com/wp-content/uploads/18-expresiones-para-referirse-a-la-noche-en-ingle%CC%81s_.jpg"
            audioSrc={BuenosNoches}
            overlayText="Buenas noches"
          />

          <Card
            title="Ari"
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9bxZJ-_7Zucu1JsRNIOkr78C3iZOiqSTXaA&s"
            audioSrc={Hola}
            overlayText="Hola"
          />
        </div>
      </section>
    </section>
  );
};

export default Saludossss;
