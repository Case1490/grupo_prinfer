import { WhatsAppIcon } from "../icons/WhatsappIcon";

const ButtonShop = () => {
  return (
    <a
      href=""
      className="flex-1"
    >
      <div className="flex justify-center bg-green-500 items-center h-full gap-x-2 py-2 text-lg text-white rounded-lg">
        <WhatsAppIcon />
        Comprar
      </div>
    </a>
  );
};

export default ButtonShop;
