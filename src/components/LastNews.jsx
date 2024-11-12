import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage"; // Importa Firebase Storage
import { db } from "../firebase";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const LastNews = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para manejar el loader
  const storage = getStorage(); // Inicializa Firebase Storage

  // Código para que nos lleve al inicio de la página
  useEffect(() => {
    window.scrollTo(0, 0); // Desplazarse hacia el inicio
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productCollection = collection(db, "productos_del_mes"); // Asegúrate de que el nombre de la colección es correcto
        const productSnapshot = await getDocs(productCollection);
        const productList = await Promise.all(
          productSnapshot.docs.map(async (doc) => {
            const data = doc.data();

            // Obtén la URL pública desde Firebase Storage
            const imageRef = ref(storage, data.imagen); // Aquí 'imagen' es el nombre o ruta en Firestore
            const imageUrl = await getDownloadURL(imageRef);

            return {
              id: doc.id,
              ...data,
              imageUrl, // Guarda la URL pública
            };
          })
        );
        setProducts(productList);
      } catch (error) {
        console.error("Error fetching products: ", error);
      } finally {
        setLoading(false); // Termina la carga
      }
    };

    fetchProducts();
  }, [storage]);

  // Mostrar loader mientras se cargan los productos
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="loader"></div> 
      </div>
    );
  }

  return (
    <div className="w-[80%] m-auto min-h-screen pt-[240px] lg:pt-[140px]">
      <h1 className="text-4xl font-bold text-center mt-10 mb-6">
        Ofertas del mes
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-6 my-6 mt-4">
        {products.map((product, index) => (
          <div key={index} style={{ padding: "0 10px" }}>
            <Link to={`/novedades/${product.id}`}>
              <ProductCard
                img={product.imageUrl} // Utiliza la URL pública obtenida
                title={product.nombre}
                price={product.precio}
                detail={product.descripcion}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LastNews;
