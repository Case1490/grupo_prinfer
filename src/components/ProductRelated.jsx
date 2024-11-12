import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db, storage } from "../firebase";
import { ref, getDownloadURL } from "firebase/storage";
import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // Importar el módulo de navegación de Swiper
import "swiper/css";
import "swiper/css/navigation"; // Estilos de navegación
import { Link } from "react-router-dom";

const ProductRelated = ({ productId }) => {
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      const productCollection = collection(db, "productos_del_mes");
      const productSnapshot = await getDocs(productCollection);
      const allProducts = productSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const filteredProducts = allProducts.filter(
        (product) => product.id !== productId
      );

      const randomProducts = [];
      while (randomProducts.length < 4 && filteredProducts.length > 0) {
        const randomIndex = Math.floor(Math.random() * filteredProducts.length);
        const randomProduct = filteredProducts[randomIndex];
        if (!randomProducts.includes(randomProduct)) {
          randomProducts.push(randomProduct);
        }
      }

      const productsWithImages = await Promise.all(
        randomProducts.map(async (product) => {
          const imageRef = ref(storage, product.imagen);
          const imageUrl = await getDownloadURL(imageRef);
          return {
            ...product,
            imageUrl: imageUrl,
          };
        })
      );

      setRelatedProducts(productsWithImages);
    };

    fetchRelatedProducts();
  }, [productId]);

  return (
    <div>
      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        navigation={true} // Habilitar flechas de navegación
        modules={[Navigation]} // Incluir el módulo de navegación
        breakpoints={{
          1024: { slidesPerView: 4 },
          768: { slidesPerView: 2 },
          370: { slidesPerView: 1 },
        }}
      >
        {relatedProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <Link to={`/novedades/${product.id}`}>
              <ProductCard
                img={product.imageUrl}
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

export default ProductRelated;
