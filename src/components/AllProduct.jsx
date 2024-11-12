import { useEffect, useState } from "react";
import SidebarCategories from "./SidebarCategories";
import CategoryContent from "./CategoryContent";

const AllProduct = () => {
  const [selectedSubcategory, setSelectedSubcategory] = useState(
    "Conductores Eléctricos - Cables"
  );
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const subcategories = {
    "Componentes Eléctricos": [
      "Conductores Eléctricos - Cables",
      "Automatización y Control",
      "Iluminación Industrial",
      "Distribución de Baja y Media Tensión",
      "Materiales Aislantes",
      "Telecomunicaciones y Seguridad Electrónica",
    ],
    EPPS: ["Protección Personal", "Protección Auditiva", "Protección Visual"],
    "Herramientas Manuales y de Poder": [
      "Herramientas de Mano",
      "Herramientas Eléctricas",
      "Accesorios para Herramientas",
    ],
    "Limpieza Industrial": [
      "Productos Químicos",
      "Equipos de Limpieza",
      "Suministros de Limpieza",
    ],
  };

  const collectionMapping = {
    "Componentes Eléctricos": "productos_electricos",
    EPPS: "productos_epps",
    "Herramientas Manuales y de Poder": "productos_herramientas",
    "Limpieza Industrial": "productos_limpieza",
  };

  const handleCategorySelect = (subcategory) => {
    setSelectedSubcategory(subcategory);
    setIsSidebarOpen(false); // Cerrar el sidebar después de seleccionar una categoría en pantallas pequeñas
  };

  const getCollectionForSelectedSubcategory = (subcategory) => {
    for (const [category, subs] of Object.entries(subcategories)) {
      if (subs.includes(subcategory)) {
        return collectionMapping[category] || "productos_electricos";
      }
    }
    return "productos_electricos";
  };

  const collectionToUse =
    getCollectionForSelectedSubcategory(selectedSubcategory);

  // Código para que nos lleve al inicio de la página
  useEffect(() => {
    window.scrollTo(0, 0); // Desplazarse hacia el inicio
  }, []);

  return (
    <div className="w-[85%] m-auto relative pt-[240px] lg:pt-[140px]">
      {/* Botón para abrir/cerrar el sidebar en pantallas pequeñas */}
      <button
        className="block md:hidden my-4 p-2 bg-gray-200 text-gray-800 rounded mt-[60px]"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? "Cerrar Categorías" : "Ver Categorías"}
      </button>

      {/* Fondo oscuro detrás del sidebar */}
      {isSidebarOpen && (
        <div
          className="overlay inset-0 bg-black bg-opacity-50"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      <div className="flex">
        {/* Sidebar en pantallas grandes y menú desplegable en pantallas pequeñas */}
        <div
          className={`sidebar md:block ${
            isSidebarOpen
              ? "block absolute top-0 left-0 shadow-md transition-all delay-100 ease-out"
              : "hidden"
          } md:w-1/4 md:static md:p-4`}
        >
          <button
            className="close-btn md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          >
            ×
          </button>
          <SidebarCategories
            selectedCategory={selectedSubcategory}
            onSelectCategory={handleCategorySelect}
          />
        </div>

        {/* Contenido principal */}
        <div className="main-content flex-1">
          {selectedSubcategory && (
            <CategoryContent
              selectedCategory={selectedSubcategory}
              collectionName={collectionToUse}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
