// Importa estilos de slick-carousel (asegúrate de haberlos importado en tu CSS global)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import ProductCard from "./ProductCard";

// IMPORTANDO IMAGENES DE PROMOCIONES

import ALPU200 from "../assets/promociones/ALPU-200.png";
import BOAP_260 from "../assets/promociones/BOAP_260.png";
import COMPO_20LP_260 from "../assets/promociones/COMPO-20LP-260.png";
import DESI_36_2 from "../assets/promociones/DESI-36-2.png";
import EBA_5P_2 from "../assets/promociones/EBA-5P-2.png";
import ERGO_4580_2 from "../assets/promociones/ERGO-4580-2.png";
import GAPRO_35PB from "../assets/promociones/GAPRO-3.5PB.png";
import GAT_20 from "../assets/promociones/GAT-20.png";
import LIRO_5A_2 from "../assets/promociones/LIRO-5A-2.png";
import MOTB_4 from "../assets/promociones/MOTB-4.png";

const NewProducts = () => {
  const products = [
    {
      img: ALPU200,
      title: "Alambre de púas",
      price: "38.00",
      details:
        "Utilizado en cercos ganaderos, agrícolas, industriales y de seguridad.",
    },
    {
      img: BOAP_260,
      title: "Bomba periférica, 1/2 HP",
      price: "141.30",
      details: "Profundidad máxima de succión: 8m",
    },
    {
      img: COMPO_20LP_260,
      title: "Compresora Lubricada 20L",
      price: "365.40",
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
    {
      img: GAPRO_35PB,
      title: "Gatas tipo lagarto profesionales",
      price: "775.80",
      details: "Ruedas taseras giratorias para fácil manejo",
    },
    {
      img: GAT_20,
      title: "Gatas de botella, 21 a 2 toneladas",
      price: "175.50",
      details:
        "Con dispositivo de extensión (tornillo) que incrementa la altura máxima",
    },
    {
      img: LIRO_5A_2,
      title: `Lijadora roto-orbital 5", 260W`,
      price: "117.90",
      details:
        "Ideal para carpintería, preparación de superficie y repintado automotriz",
    },
    {
      img: MOTB_4,
      title: `Motobombas Ø 4", 3" y 2", con motor a gasolina`,
      price: "1,237.50",
      details: "Sensor de nivel bajo de aceite",
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
      <h1 className="text-4xl font-bold text-BlueDark">Ofertas Exclusivas</h1>
      <hr />
      <div className="carousel-container my-6">
        <Slider {...settings}>
          {products.map((products, index) => (
            <div key={index} style={{ padding: "0 10px" }}>
              <ProductCard img={products.img} title={products.title} price={products.price} detail={products.details}/>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default NewProducts;
