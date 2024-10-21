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

const CategoryContent = ({ selectedCategory }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (selectedCategory) {
      const fetchProducts = async () => {
        setLoading(true);
        setError(null);
        setProducts([]);

        try {
          const db = getFirestore();
          const storage = getStorage();

          const productsRef = collection(db, "productos_electricos");
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
                const imagePath = productData.imagen; // Asegúrate de que esto es la ruta correcta

                console.log("Processing product:", productData); // Imprimir datos del producto

                // Comprobar si imagePath está definido
                if (!imagePath) {
                  console.error(
                    "Image path is not defined for product:",
                    productData
                  );
                  throw new Error("La ruta de la imagen no está definida.");
                }

                // Crear referencia no raíz
                const imageRef = ref(storage, imagePath);

                try {
                  const imageUrl = await getDownloadURL(imageRef);
                  console.log("Image URL:", imageUrl); // Imprimir URL de imagen
                  return {
                    id: doc.id,
                    ...productData,
                    imageUrl,
                  };
                } catch (fetchError) {
                  console.error(
                    "Error fetching image URL for product:",
                    productData,
                    fetchError
                  );
                  throw new Error("Error al obtener la URL de la imagen.");
                }
              })
            );

            setProducts(productsList);
          }
        } catch (error) {
          console.error("Error fetching products: ", error);
          setError(
            "Error al cargar los productos. Por favor, inténtalo más tarde."
          );
        }

        setLoading(false);
      };

      fetchProducts();
    }
  }, [selectedCategory]);

  return (
    <div className="content">
      <h2 className="text-xl uppercase text-center font-bold mb-10">
        {selectedCategory}
      </h2>
      {loading ? (
        <div className="loader"></div>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="product-grid grid grid-cols-3 gap-x-2 gap-y-6">
          {products.length > 0 ? (
            products.map((product) => (
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
