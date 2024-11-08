import { useState } from "react";
import { WhatsAppIcon } from "../icons/WhatsappIcon";

const ProductCard = ({ img, title, price, detail }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => setIsExpanded(!isExpanded);

  const getTruncatedText = (text, wordLimit) => {
    if (typeof text === "string") {
      console.log("Texto recibido:", text); // Verifica el valor inicial
      const words = text.split(" ");
      if (words.length > wordLimit) {
        console.log(
          "Texto truncado:",
          words.slice(0, wordLimit).join(" ") + "..."
        );
        return words.slice(0, wordLimit).join(" ") + "...";
      }
      return text;
    }
    return ""; // Texto vacío si `detail` no es una cadena
  };

  const displayText = isExpanded ? detail : getTruncatedText(detail, 30);
  console.log("Texto a mostrar:", displayText); // Verificar que `detail` tiene valor

  return (
    <div className="rounded-lg p-2 border-2 border-gray shadow-xl product">
      <div
        className="image-container"
      >
        <img
          src={img}
          alt={title}
          className="product-image object-contain h-full w-full"
        />
      </div>

      <div className="p-2">
        <h1 className="text-xl text-center text-BlueDark italic">{title}</h1>
        <p className="my-2 text-center text-green-500 text-xl font-bold">
          S/ {price}
        </p>
        <p className="text-center">
          {displayText}
          {typeof detail === "string" &&
            detail.split(" ").length > 30 &&
            !isExpanded && (
              <button
                onClick={toggleText}
                className="text-blue-500 ml-1 hover:underline"
              >
                Leer más
              </button>
            )}
        </p>
      </div>

      <div className="mt-2">
        <a
          href=""
          className="bg-green-600 py-2 px-4 rounded-lg text-white font-bold uppercase flex items-center justify-center gap-x-2 text-center hover:bg-green-700"
        >
          <WhatsAppIcon />
          Comprar
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
