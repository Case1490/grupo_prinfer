import { NavLink, useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { db } from "../firebase";
import Logo from "../assets/Logo_amarillo.png";
import IconPDF from "../assets/icon_pdf.png";
import { useEffect, useState, useRef } from "react";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();
  const storage = getStorage();
  const searchContainerRef = useRef(null);

  // Función para buscar productos
  const handleSearch = async (term) => {
    if (term === "") {
      setResults([]);
      return;
    }

    const fetchProducts = async (collectionName) => {
      const productCollection = collection(db, collectionName);
      const productSnapshot = await getDocs(productCollection);
      const products = await Promise.all(
        productSnapshot.docs.map(async (doc) => {
          const data = doc.data();
          const imageRef = ref(storage, data.imagen);
          const imageUrl = await getDownloadURL(imageRef);
          return { id: doc.id, ...data, imageUrl, collectionName };
        })
      );
      return products;
    };

    const [productosDelMes, productosPopulares] = await Promise.all([
      fetchProducts("productos_del_mes"),
      fetchProducts("productos_populares"),
    ]);

    const filteredResults = [...productosDelMes, ...productosPopulares].filter(
      (product) => product.nombre.toLowerCase().includes(term.toLowerCase())
    );
    setResults(filteredResults);
  };

  useEffect(() => {
    handleSearch(searchTerm);
  }, [searchTerm]);

  // Ocultar resultados al hacer clic fuera del contenedor de búsqueda
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target)
      ) {
        setResults([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-GrayMain z-[100] fixed w-full">
      <div className="w-[80%] m-auto py-4 flex items-center justify-between">
        <div className="w-[250px]">
          <img src={Logo} alt="Prinfer" className="w-full" />
        </div>

        <div ref={searchContainerRef}>
          <div className="InputContainer relative">
            <input
              placeholder="Buscar productos..."
              id="input"
              className="input"
              name="text"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <label className="labelforsearch" htmlFor="input">
              <svg className="searchIcon" viewBox="0 0 512 512">
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>
              </svg>
            </label>
          </div>

          {/* Mostrar resultados de búsqueda */}
          {results.length > 0 && (
            <div className="resultsContainer">
              {results.map((result) => (
                <div
                  key={result.id}
                  className="flex items-center p-2 hover:bg-gray-100 cursor-pointer bg-white w-[350px] border-b-2"
                  onClick={() => {
                    navigate(
                      `/${
                        result.collectionName === "productos_populares"
                          ? "populares"
                          : "novedades"
                      }/${result.id}`
                    );
                    setResults([]); // Oculta el cuadro de resultados
                    setSearchTerm("");
                  }}
                >
                  <img
                    src={result.imageUrl}
                    alt={result.nombre}
                    className="w-12 h-12 mr-2"
                  />
                  <div>
                    <p
                      className="font-bold"
                      dangerouslySetInnerHTML={{
                        __html: result.nombre.replace(
                          new RegExp(`(${searchTerm})`, "gi"),
                          (match) => `<span class="highlight">${match}</span>`
                        ),
                      }}
                    ></p>
                    <p className="text-sm text-gray-500">
                      {result.descripcion}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center gap-2">
          <div className="w-[30px]">
            <img src={IconPDF} alt="Catálogo de Productos" className="w-full" />
          </div>
          <p>Catálogo de Productos</p>
        </div>
      </div>
      <div className="bg-BlueDark text-white">
        <div className="w-[80%] m-auto flex">
          <NavLink to="/" className="link">
            INICIO
          </NavLink>
          <NavLink to="/productos" className="link">
            PRODUCTOS
          </NavLink>
          <NavLink to="/novedades" className="link">
            NOVEDADES
          </NavLink>
          <NavLink to="/nosotros" className="link">
            SOBRE NOSOTROS
          </NavLink>
          <NavLink to="/contacto" className="link">
            CONTACTO
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
