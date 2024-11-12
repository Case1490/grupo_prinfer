import { useEffect, useState, useRef } from "react";
import { collection, getDocs } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { db } from "../firebase";
import { useParams } from "react-router-dom";
import ButtonShop from "../helpers/ButtonShop";
import InputAmount from "../helpers/InputAmount";
import ProductRelated from "./ProductRelated";

const ProductDetailInfo = () => {
  const [product, setProduct] = useState(null);
  const storage = getStorage();
  const { idNews } = useParams();
  const imgRef = useRef(null);
  const zoomLensRef = useRef(null);
  const zoomResultRef = useRef(null);

  // Código para que nos lleve al inicio de la página
  useEffect(() => {
    window.scrollTo(0, 0); // Desplazarse hacia el inicio
  }, []);

  useEffect(() => {
    const fetchProductById = async () => {
      const productCollection = collection(db, "productos_del_mes");
      const productSnapshot = await getDocs(productCollection);
      const productDoc = productSnapshot.docs.find((doc) => doc.id === idNews);

      if (productDoc) {
        const data = productDoc.data();
        const imageRef = ref(storage, data.imagen);
        const imageUrl = await getDownloadURL(imageRef);

        setProduct({
          id: productDoc.id,
          ...data,
          imageUrl,
        });
      } else {
        setProduct(null);
      }
    };

    fetchProductById();
  }, [idNews, storage]);

  useEffect(() => {
    if (imgRef.current && zoomLensRef.current && zoomResultRef.current) {
      const image = imgRef.current;
      const lens = zoomLensRef.current;
      const result = zoomResultRef.current;

      const moveLens = (e) => {
        const pos = getCursorPos(e);
        const { x, y } = pos;

        // Ajustar la posición de la lente para centrarla en el cursor
        lens.style.left = `${x - lens.offsetWidth / 10}px`; // Centro de la lente en el eje X
        lens.style.top = `${y - lens.offsetHeight / 10}px`; // Centro de la lente en el eje Y

        result.style.backgroundImage = `url(${image.src})`;
        result.style.backgroundSize = `${image.width * 2}px ${
          image.height * 2
        }px`;
        result.style.backgroundPosition = `-${x * 2}px -${y * 2}px`;
        result.style.display = "block";
      };

      const getCursorPos = (e) => {
        const a = image.getBoundingClientRect();
        const x = e.pageX - a.left - window.pageXOffset;
        const y = e.pageY - a.top - window.pageYOffset;
        return { x, y };
      };

      lens.addEventListener("mousemove", moveLens);
      image.addEventListener("mousemove", moveLens);
      lens.addEventListener(
        "mouseleave",
        () => (result.style.display = "none")
      );
      image.addEventListener(
        "mouseleave",
        () => (result.style.display = "none")
      );

      return () => {
        lens.removeEventListener("mousemove", moveLens);
        image.removeEventListener("mousemove", moveLens);
        lens.removeEventListener(
          "mouseleave",
          () => (result.style.display = "none")
        );
        image.removeEventListener(
          "mouseleave",
          () => (result.style.display = "none")
        );
      };
    }
  }, [product]);

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen pt-[240px] lg:pt-[140px]">
      <div className="flex items-center justify-center w-[95%] sm:w-[80%] m-auto pt-10">
        <div className="flex flex-col items-center lg:flex-row w-full justify-around bg-white py-4 rounded-lg shadow-xl">
          <div className="flex justify-center items-center w-full lg:w-[50%] relative">
            <div
              ref={zoomLensRef}
              className="zoom-lens"
              style={{
                display: "none", // Ocultar inicialmente la lente
              }}
            />
            <img
              ref={imgRef}
              src={product.imageUrl}
              alt={product.nombre}
              className="h-auto object-contain"
              onMouseEnter={() => (zoomLensRef.current.style.display = "block")}
              onMouseLeave={() => (zoomLensRef.current.style.display = "none")}
            />
            <div
              ref={zoomResultRef}
              className="zoom-result"
              style={{
                backgroundImage: `url(${product.imageUrl})`,
              }}
            />
          </div>

          <div className=" w-full lg:w-[50%]">
            <h1 className="text-3xl font-bold text-left ml-2 sm:ml-0">
              {product.nombre}
            </h1>
            <hr />
            <p className="text-lg mx-2 sm:mx-0">{product.descripcion}</p>

            <div className="p-2">
              <div className="flex flex-col sm:flex-row gap-x-4 my-4 mr-2 space-y-2 sm:space-y-0">
                <div className="bg-BlueDark p-4 rounded-lg text-white w-full sm:w-[50%]">
                  <h1 className="font-bold text-xl mb-2">Especificaciones</h1>
                  {product.especificaciones?.length > 0 ? (
                    <ul className="list-disc list-inside">
                      {product.especificaciones.map((espec, index) => (
                        <li key={index}>{espec}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>No hay especificaciones disponibles.</p>
                  )}
                </div>

                <div className="bg-YellowMain p-4 rounded-lg text-white w-full sm:w-[50%]">
                  <h1 className="font-bold text-xl mb-2">Detalles</h1>
                  {product.detalles?.length > 0 ? (
                    <ul className="list-disc list-inside">
                      {product.detalles.map((detall, index) => (
                        <li key={index}>{detall}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>No hay detalles disponibles.</p>
                  )}
                </div>
              </div>

              <div className="bg-blue-600 my-4 rounded-lg py-2 text-white font-bold text-center">
                <p>
                  !Contamos con garantía asegurada y los productos son 100%
                  originales!
                </p>
              </div>

              <div className="flex flex-col sm:flex-row sm:space-y-0 space-y-2 gap-x-4">
                <InputAmount />
                <ButtonShop />
              </div>

              <div className="bg-red-600 my-4 rounded-lg py-2 text-white font-bold text-center">
                <p>!Envíos totalmente gratis a la puerta de tu hogar!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-white py-4 rounded-lg shadow-xl mt-10 mb-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2 ">Productos Relacionados</h1>
          <p className="text-xl text-gray-700">
            Lo que Nuestros clientes también buscaron
          </p>
        </div>

        <div className="w-[80%] m-auto mt-8">
          <ProductRelated productId={product.id} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailInfo;
