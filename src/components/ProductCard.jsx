

const ProductCard = ({img}) => {
  return (
    <div className=" rounded-lg p-2 border-2 border-gray  shadow-xl">
      <div>
        <img src={img} alt="" />
      </div>

      <div className="p-2">
        <h1 className="text-xl text-center text-BlueDark italic">
          Motobomba autocebante 4 x 4 a gasolina 9 HP, TRUPER
        </h1>
        <p className="my-2 text-center text-gray-600">S/ 1,237.50</p>
        <p className="text-center">
          Ideal para sistemas de riego, bombeo de pozos, agricultura y
          construcción
        </p>
      </div>

      <div className="flex items-center justify-between mt-2">
        <a
          href=""
          className="bg-YellowMain py-2 px-4 rounded-lg text-white font-bold uppercase"
        >
          Ver más
        </a>
        <a
          href=""
          className="bg-green-500 py-2 px-4 rounded-lg text-white font-bold uppercase"
        >
          Comprar
        </a>
      </div>
    </div>
  );
}

export default ProductCard