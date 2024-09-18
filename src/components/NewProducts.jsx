import { useState, useRef, useEffect } from "react";
import ProductCard from "./ProductCard";

import Image from "../assets/productos_destacados/14802.png";

const NewProducts = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleImages, setVisibleImages] = useState(4);
  const slideRef = useRef(null);

  const products = [
    { img: Image },
    { img: Image },
    { img: Image },
    { img: Image },
    { img: Image }, // Aquí está el quinto producto
  ];

  const moveSlide = (direction) => {
    let newSlide = currentSlide + direction;
    // Previene el movimiento si se está en el último slide visible
    if (direction > 0 && newSlide >= products.length - visibleImages + 1) {
      newSlide = products.length - visibleImages; // No se permite avanzar más allá del último elemento visible
    } else if (direction < 0 && newSlide < 0) {
      newSlide = 0; // No se permite retroceder antes del primer elemento
    }
    setCurrentSlide(newSlide);
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setVisibleImages(
        width <= 576 ? 1 : width <= 768 ? 2 : width <= 992 ? 3 : 4
      );
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Inicializa el tamaño al cargar

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (slideRef.current && slideRef.current.children.length > 0) {
      const slideWidth = slideRef.current.children[0].offsetWidth;
      slideRef.current.style.transform = `translateX(${
        -currentSlide * slideWidth
      }px)`;
    }
  }, [currentSlide, visibleImages]);

  return (
    <div>
      <h1 className="text-4xl font-bold text-BlueDark">Productos del Mes</h1>
      <hr />
      <div className="carousel-container my-6">
        {visibleImages < products.length && currentSlide > 0 && (
          <button className="arrow left" onClick={() => moveSlide(-1)}>
            &#10094;
          </button>
        )}
        <div className="carousel-slide" ref={slideRef}>
          {products.map((producto, index) => (
            <ProductCard key={index} img={producto.img} />
          ))}
        </div>
        {visibleImages < products.length &&
          currentSlide < products.length - visibleImages && (
            <button className="arrow right" onClick={() => moveSlide(1)}>
              &#10095;
            </button>
          )}
      </div>
    </div>
  );
};

export default NewProducts;
