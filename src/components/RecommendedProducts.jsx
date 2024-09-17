import ProductCard from "./ProductCard";
import Image from "../assets/productos_destacados/14802.png";

const RecommendedProducts = () => {
  return (
    <div>
      <h1 className="text-4xl text-BlueDark font-bold">
        Productos Más Vendidos
      </h1>
      <hr />

      <div className="flex items-center justify-center gap-x-4 my-6">
        <ProductCard img={Image} />
        <ProductCard img={Image} />
        <ProductCard img={Image} />
        <ProductCard img={Image} />
      </div>
    </div>
  );
};

export default RecommendedProducts;
