import { WhatsAppIcon } from "../icons/WhatsappIcon";

const CardProductoCategory = ({imageUrl, nombre}) => {
  return (
    <div className="rounded-lg p-2 border-2 border-gray shadow-xl product_category">
      <div className="image-container">
        <img src={imageUrl} alt={nombre} className="product-image" />
      </div>

      <h3 className="text-center uppercase font-bold">{nombre}</h3>
      <a
        href="https://wa.me/1234567890"
        className="bg-green-500 rounded-lg px-4 py-2 text-center text-white font-bold uppercase flex items-center justify-center space-x-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsAppIcon /> <span>Consultar</span>
      </a>
    </div>
  );
}

export default CardProductoCategory