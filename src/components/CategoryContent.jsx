// CategoryContent.js
import { useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import CardProductoCategory from "./CardProductoCategory";

const CategoryContent = ({ selectedCategory, collectionName }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); // Nuevo estado para el término de búsqueda

  useEffect(() => {
    if (selectedCategory && collectionName) {
      const fetchProducts = async () => {
        setLoading(true);
        setError(null);
        setProducts([]);

        try {
          const db = getFirestore();
          const storage = getStorage();
          const productsRef = collection(db, collectionName);
          const q = query(
            productsRef,
            where("categoria", "==", selectedCategory)
          );
          const querySnapshot = await getDocs(q);

          if (querySnapshot.empty) {
            setError(`No hay productos en la categoría: ${selectedCategory}`);
          } else {
            const productsList = await Promise.all(
              querySnapshot.docs.map(async (doc) => {
                const productData = doc.data();
                const imagePath = productData.imagen;

                if (!imagePath)
                  throw new Error("La ruta de la imagen no está definida.");

                const imageRef = ref(storage, imagePath);
                const imageUrl = await getDownloadURL(imageRef);
                return { id: doc.id, ...productData, imageUrl };
              })
            );

            setProducts(productsList);
          }
        } catch (error) {
          setError(
            "Error al cargar los productos. Por favor, inténtalo más tarde.",
            error
          );
        }

        setLoading(false);
      };

      fetchProducts();
    }
  }, [selectedCategory, collectionName]);

  // Filtrar los productos en base al término de búsqueda
  const filteredProducts = products.filter((product) =>
    product.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Código para que nos lleve al inicio de la página
  useEffect(() => {
    window.scrollTo(0, 0); // Desplazarse hacia el inicio
  }, []);

  return (
    <div className="p-2">
      <div className="flex items-center justify-between">
        <h2 className="text-xl uppercase font-bold mb-6 mt-3">
          {selectedCategory}
        </h2>

        {/* Campo de búsqueda */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Buscar productos..."
            className="w-full p-2 border-2 rounded-full outline-none border-black placeholder:text-black"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {loading ? (
        <div className="loader"></div>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="product-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <CardProductoCategory
                  imageUrl={product.imageUrl}
                  nombre={product.nombre}
                />
              </div>
            ))
          ) : (
            <p>No hay productos disponibles para esta categoría.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default CategoryContent;
