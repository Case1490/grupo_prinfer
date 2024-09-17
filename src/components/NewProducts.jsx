import ProductCard from "./ProductCard";
import Image from '../assets/productos_destacados/17118.png';

const NewProducts = () => {
  return (
    <div>
      <h1 className="text-4xl text-BlueDark font-bold">
        Nuevos Productos 2024
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

export default NewProducts;
