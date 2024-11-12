import { NavLink, useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { db } from "../firebase";
import Logo from "../assets/Logo_amarillo.png";
import IconPDF from "../assets/icon_pdf.png";
import { useEffect, useState, useRef } from "react";
import MenuIcon from "../icons/MenuIcon";
import CrossIcon from "../icons/CrossIcon";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();
  const storage = getStorage();
  const searchContainerRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  // Función para manejar la apertura y cierre del menú
  const toggleMenu = () => {
    console.log('estás abriendo el menu');
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-GrayMain z-[100] fixed w-full">
      <div className="w-[80%] m-auto py-4 flex items-center justify-between flex-col lg:flex-row">
        {/* Logo */}
        <div className="w-[250px] mb-4 lg:mb-0">
          <img src={Logo} alt="Prinfer" className="w-full" />
        </div>

        {/* Contenedor de búsqueda */}
        <div ref={searchContainerRef} className="w-full lg:w-auto">
          <div className="InputContainer">
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
            <div className="resultsContainer absolute bg-white w-full border-t-2 shadow-lg max-h-[300px] overflow-y-auto mt-2">
              {results.map((result) => (
                <div
                  key={result.id}
                  className="flex items-center p-2 hover:bg-gray-100 cursor-pointer w-full border-b-2"
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

        {/* Catálogo de productos */}
        <div className="flex items-center gap-2 mt-4 lg:mt-0">
          <div className="w-[30px]">
            <img src={IconPDF} alt="Catálogo de Productos" className="w-full" />
          </div>
          <p>Catálogo de Productos</p>
        </div>
      </div>

      <div className="bg-BlueDark text-white h-[44px] flex items-center">
        {/* Menú para pantallas grandes (lg) */}
        <div className="w-[80%] m-auto hidden lg:flex">
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

        {/* Menú para pantallas pequeñas (lg:hidden) */}
        <div className="lg:hidden w-[80%] m-auto flex justify-between items-center">
          <div onClick={toggleMenu} className=" cursor-pointer">
            {isMenuOpen ? <CrossIcon /> : <MenuIcon />}
          </div>

          {/* Ícono de menú que abre/cierra el menú */}
          {/* Menú desplegable */}
          {isMenuOpen && (
            <div className="absolute top-[242px] left-0 w-full bg-BlueDark text-white p-4 flex flex-col items-center space-y-4">
              <NavLink
                to="/"
                className="link w-full text-center rounded-full"
                onClick={toggleMenu}
              >
                INICIO
              </NavLink>
              <NavLink
                to="/productos"
                className="link w-full text-center rounded-full"
                onClick={toggleMenu}
              >
                PRODUCTOS
              </NavLink>
              <NavLink
                to="/novedades"
                className="link w-full text-center rounded-full"
                onClick={toggleMenu}
              >
                NOVEDADES
              </NavLink>
              <NavLink
                to="/nosotros"
                className="link w-full text-center rounded-full"
                onClick={toggleMenu}
              >
                SOBRE NOSOTROS
              </NavLink>
              <NavLink
                to="/contacto"
                className="link w-full text-center rounded-full"
                onClick={toggleMenu}
              >
                CONTACTO
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
