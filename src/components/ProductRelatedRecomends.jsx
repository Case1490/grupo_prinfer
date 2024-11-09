import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db, storage } from "../firebase"; // Importar el storage
import { ref, getDownloadURL } from "firebase/storage"; // Importar ref y getDownloadURL
import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Estilos de Swiper
import { Link } from "react-router-dom";

const ProductRelatedRecomends = ({ productId }) => {
  const [relatedProducts, setRelatedProducts] = useState([]);

  // Código para que nos lleve al inicio de la página
  useEffect(() => {
    window.scrollTo(0, 0); // Desplazarse hacia el inicio
  }, [productId]);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      const productCollection = collection(db, "productos_populares");
      const productSnapshot = await getDocs(productCollection);
      const allProducts = productSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Filtrar productos que no sean el actual
      const filteredProducts = allProducts.filter(
        (product) => product.id !== productId
      );

      // Seleccionar 4 productos aleatorios
      const randomProducts = [];
      while (randomProducts.length < 4 && filteredProducts.length > 0) {
        const randomIndex = Math.floor(Math.random() * filteredProducts.length);
        const randomProduct = filteredProducts[randomIndex];

        // Añadir el producto si no está ya en el array
        if (!randomProducts.includes(randomProduct)) {
          randomProducts.push(randomProduct);
        }
      }

      // Obtener la URL de las imágenes desde Firebase Storage
      const productsWithImages = await Promise.all(
        randomProducts.map(async (product) => {
          const imageRef = ref(storage, product.imagen); // Crear referencia al archivo en Storage
          const imageUrl = await getDownloadURL(imageRef); // Obtener la URL pública
          return {
            ...product,
            imageUrl: imageUrl, // Asignar la URL obtenida al producto
          };
        })
      );

      setRelatedProducts(productsWithImages); // Actualizar el estado con productos y sus imágenes
    };

    fetchRelatedProducts();
  }, [productId]);

  // Condición para mostrar las flechas de navegación
  const showNavigation = relatedProducts.length < 4;

  return (
    <div>
      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        navigation={showNavigation} // Activar navegación solo si hay menos de 4 productos
        breakpoints={{
          1024: { slidesPerView: 4 },
          768: { slidesPerView: 2 },
          480: { slidesPerView: 1 },
        }}
      >
        {relatedProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <Link to={`/populares/${product.id}`}>
              <ProductCard
                img={product.imageUrl} // Mostrar la imagen obtenida
                title={product.nombre}
                price={product.precio}
                detail={product.descripcion}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductRelatedRecomends;
