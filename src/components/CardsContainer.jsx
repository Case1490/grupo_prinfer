
//Importando iconos
import Support from '../icons/SupportIcon';
import Tools from '../icons/ToolsIcon';
import Shop from '../icons/ShoppIcon';
import Price from '../icons/PriceIcon';
import Delivery from '../icons/DeliveryIcon';

const CardInfo = () => {
  return (
    <div className="flex items-center justify-center gap-x-6 font-bold">
      <div className="flex items-center gap-2 bg-GrayMain p-2 rounded-lg justify-center h-[70px]">
        <Support />
        <h4 className="uppercase text-sm">soporte técnico</h4>
      </div>

      <div className="flex items-center gap-2 bg-GrayMain p-4 rounded-lg justify-center h-[70px]">
        <Tools />
        <h4 className="uppercase text-sm">Equipos de ultima generación</h4>
      </div>

      <div className="flex items-center gap-2 bg-BlueDark text-white p-4 rounded-lg flex-1 justify-center h-[70px] w-[400px]">
        <Shop/>
        <h4 className="uppercase text-sm">tienda</h4>
      </div>

      <div className="flex items-center gap-2 bg-GrayMain p-4 rounded-lg justify-center h-[70px]">
        <Price/>
        <h4 className="uppercase text-sm">Precios competitivos</h4>
      </div>

      <div className="flex items-center gap-2 bg-GrayMain p-4 rounded-lg justify-center h-[70px]">
        <Delivery/>
        <h4 className="uppercase text-sm">Envios rápidos y seguros</h4>
      </div>
    </div>
  );
}

export default CardInfo

