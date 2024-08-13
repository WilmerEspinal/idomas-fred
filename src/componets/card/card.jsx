import { useRef } from "react";

const Card = ({ imageSrc, audioSrc, title, overlayText }) => {
  const audioRef = useRef(null);

  const handlePlayAudio = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  return (
    <div className="bg-white w-60 p-3 rounded flex justify-end items-center flex-col shadow-lg relative">
      <div className="relative w-full h-48">
        <img src={imageSrc} alt="" className="object-cover w-full h-full" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <span className="text-white text-lg">{overlayText}</span>
        </div>
      </div>
      <h3 className="text-center text-xl my-1">{title}</h3>
      <button
        className="bg-custom-teal py-2 px-6 rounded text-white"
        onClick={handlePlayAudio}
      >
        Escuchar
      </button>
      <audio
        ref={audioRef}
        src={audioSrc}
        preload="auto"
        style={{ display: "none" }}
      />
    </div>
  );
};

export default Card;
