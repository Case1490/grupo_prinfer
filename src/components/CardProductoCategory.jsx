import { WhatsAppIcon } from "../icons/WhatsappIcon";

const CardProductoCategory = ({ imageUrl, nombre }) => {
  // Codificamos el nombre del producto para la URL
  const mensaje = `Hola, estoy interesado en ${encodeURIComponent(nombre)}`;

  return (
    <div className="rounded-lg p-2 border-2 border-gray shadow-xl product_category">
      <div className="image-container">
        <img src={imageUrl} alt={nombre} className="w-[70%]" />
      </div>

      <h1 className="text-center text-xl text-black uppercase font-bold">{nombre}</h1>
      <a
        href={`https://wa.me/917279856?text=${mensaje}`} // Usamos el mensaje dinámico aquí
        className="bg-green-500 rounded-lg px-4 py-2 text-center text-white font-bold uppercase flex items-center justify-center space-x-2 hover:bg-green-700"
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsAppIcon /> <span>Consultar</span>
      </a>
    </div>
  );
};

export default CardProductoCategory;
