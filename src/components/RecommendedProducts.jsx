// Importa estilos de slick-carousel (asegúrate de haberlos importado en tu CSS global)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import ProductCard from "./ProductCard";

// IMPORTANDO IMAGENES DE PROMOCIONES

import CARRETILLA5FT from "../assets/destacados/carretillas_5ft3.png";
import LAMPA_ESPAÑOL from "../assets/destacados/Lampa_español.png";
import LAMPA_SANITARIA from "../assets/destacados/Lampa_sanitaria.png";
import DESI_36_2 from "../assets/promociones/DESI-36-2.png";
import EBA_5P_2 from "../assets/promociones/EBA-5P-2.png";
import ERGO_4580_2 from "../assets/promociones/ERGO-4580-2.png";

const RecommendedProducts = () => {
  const products = [
    {
      img: CARRETILLA5FT,
      title: "Carretilla 5.5 ft3, súper reforzada",
      price: "231.00",
      details:
        "Utilizado en cercos ganaderos, agrícolas, industriales y de seguridad.",
    },
    {
      img: LAMPA_ESPAÑOL,
      title: `Lampa modelo español, puño "Y"`,
      price: "29.00",
      details: "Profundidad máxima de succión: 8m",
    },
    {
      img: LAMPA_SANITARIA,
      title: `Lampa sanitaria, puño "Y"`,
      price: "53.00",
      details: "Motor con bobinas de aluminio",
    },
    {
      img: DESI_36_2,
      title: "Destornillador inalámbrico, 3.6V",
      price: "50.40",
      details: "Luz LED para iluminar área de trabajo",
    },
    {
      img: EBA_5P_2,
      title: `Amoladora de banco Ø 5", 1/6 HP, 120 W`,
      price: "118.80",
      details: "Motor con bobinas de aluminio",
    },
    {
      img: ERGO_4580_2,
      title: `Amoladora 4 1/2", 850W`,
      price: "97.02",
      details: "Mango ajustable a 3 posiciones",
    },
  ];

  // Configuración de React Slick
  const settings = {
    dots: true, // Mostrar indicadores debajo del carrusel
    infinite: false, // Hacer que el carrusel sea infinito
    speed: 500, // Velocidad del deslizamiento
    slidesToShow: 4, // Número de cards visibles en escritorio
    slidesToScroll: 1, // Avanzar de una card a la vez
    arrows: true,
    responsive: [
      {
        breakpoint: 992, // Hasta 992px mostrar 3 cards
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Hasta 768px mostrar 2 cards
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576, // Hasta 576px mostrar 1 card
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-BlueDark">Productos Más Pedidos</h1>
      <hr />
      <div className="carousel-container my-6">
        <Slider {...settings}>
          {products.map((products, index) => (
            <div key={index} style={{ padding: "0 10px" }}>
              <ProductCard
                img={products.img}
                title={products.title}
                price={products.price}
                detail={products.details}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default RecommendedProducts;
