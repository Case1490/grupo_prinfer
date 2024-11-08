import { useEffect, useState } from "react";
import { db, storage } from "../firebase"; // Asegúrate de importar correctamente db y storage
import { collection, getDocs } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProductCard from "./ProductCard";

// Configura Swiper con los módulos necesarios
const RecommendedProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para manejar el loader

  // Obtener datos de Firestore y URLs de las imágenes de Storage
  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "productos_populares"));
      const productsData = await Promise.all(
        querySnapshot.docs.map(async (doc) => {
          const productData = doc.data();
          const imgRef = ref(storage, productData.imagen); // imgPath debe contener el path de la imagen en Storage, por ejemplo 'promocion_mes/ALPU-200.png'

          try {
            const imgUrl = await getDownloadURL(imgRef);
            return { id: doc.id, ...productData, imgUrl }; // Añadimos la URL completa de la imagen al objeto del producto
          } catch (error) {
            console.error("Error al obtener URL de imagen:", error);
            return { id: doc.id, ...productData, imgUrl: "" }; // Si hay un error, se asigna una URL vacía o una imagen de placeholder
          } finally {
            setLoading(false); // Termina la carga
          }
        })
      );

      setProducts(productsData);
    };

    fetchProducts();
  }, []);

  // Mostrar loader mientras se cargan los productos
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-4xl font-bold text-BlueDark">Productos Populares</h1>
      <hr />
      <div className="carousel-container my-6">
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          navigation={true} // Habilitar navegación
          pagination={{ clickable: true }} // Habilitar paginación
          modules={[Navigation, Pagination]} // Añadir Navigation y Pagination
          breakpoints={{
            1020: { slidesPerView: 4 },
            992: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            370: { slidesPerView: 1 },
          }}
          className="custom-swiper"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
                <ProductCard
                  img={product.imgUrl}
                  title={product.nombre}
                  price={product.precio}
                  detail={product.descripcion}
                />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RecommendedProducts;
