import { WhatsAppIcon } from "../icons/WhatsappIcon";

const ButtonShop = ({nombre}) => {

  const mensaje = `Hola, estoy interesado en ${nombre}`;

  return (
    <a
      href={`https://wa.me/917279856?text=${mensaje}`}
      className="flex-1"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex justify-center bg-green-500 items-center h-full gap-x-2 py-2 text-lg text-white rounded-lg">
        <WhatsAppIcon />
        Comprar
      </div>
    </a>
  );
};

export default ButtonShop;
