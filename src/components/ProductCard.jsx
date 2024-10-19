const ProductCard = ({ img, title, price, detail }) => {
  return (
    <div className="rounded-lg p-2 border-2 border-gray shadow-xl product">
      <div className="image-container">
        <img src={img} alt={title} className="product-image" />
      </div>

      <div className="p-2">
        <h1 className="text-xl text-center text-BlueDark italic">{title}</h1>
        <p className="my-2 text-center text-green-500 text-xl font-bold">S/ {price}</p>
        <p className="text-center">{detail}</p>
      </div>

      <div className="flex items-center justify-between mt-2">
        <a
          href=""
          className="bg-BlueDark py-2 px-4 rounded-lg text-white font-bold uppercase"
        >
          Ver más
        </a>
        <a
          href=""
          className="bg-green-600 py-2 px-4 rounded-lg text-white font-bold uppercase"
        >
          Comprar
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
