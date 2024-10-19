import { useEffect, useState, useRef } from "react";
import { collection, getDocs } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { db } from "../firebase";
import { useParams } from "react-router-dom";
import ButtonShop from "../helpers/ButtonShop";
import InputAmount from "../helpers/InputAmount";

const ProductDetailInfo = () => {
  const [product, setProduct] = useState(null);
  const storage = getStorage();
  const { idNews } = useParams();
  const imgRef = useRef(null);
  const zoomLensRef = useRef(null);
  const zoomResultRef = useRef(null);

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
    <div className="bg-gray-100">
      <div className="flex items-center justify-center w-[80%] m-auto min-h-screen">
        <div className="flex w-full justify-around bg-white py-4 rounded-lg shadow-xl">
          <div className="flex justify-center items-center w-[50%] relative">
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

          <div className="w-[50%]">
            <h1 className="text-3xl font-bold text-center">{product.nombre}</h1>
            <hr />
            <p className="text-lg">
              <span className="font-bold">Descripción: </span>
              {product.descripcion}
            </p>

            <div className="flex gap-x-4 my-4 mr-2">
              <div className="bg-BlueDark p-4 rounded-lg text-white w-[50%]">
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

              <div className="bg-YellowMain p-4 rounded-lg text-white w-[50%]">
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

            <div className="flex gap-x-4">
              <InputAmount />
              <ButtonShop />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailInfo;
