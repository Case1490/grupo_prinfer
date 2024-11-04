import { useState } from "react";
import SidebarCategories from "./SidebarCategories";
import Pagination from "./Pagination";
import CategoryContent from "./CategoryContent";

const AllProduct = () => {
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5; // Suponiendo que tienes 5 páginas de contenido.

  // Definir las subcategorías
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
    setCurrentPage(1);
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  // Si se encontró una colección, úsala; de lo contrario, usa "productos_electricos"

  // Buscar la colección asociada a la subcategoría seleccionada
  const getCollectionForSelectedSubcategory = (subcategory) => {
    for (const [category, subs] of Object.entries(subcategories)) {
      if (subs.includes(subcategory)) {
        return collectionMapping[category] || "productos_electricos"; // Valor predeterminado si no se encuentra
      }
    }
    return "productos_electricos"; // Valor predeterminado si no se encuentra ninguna coincidencia
  };

  const collectionToUse =
    getCollectionForSelectedSubcategory(selectedSubcategory);

  console.log(collectionToUse);

  return (
    <div className="flex w-[85%] m-auto">
      <SidebarCategories
        selectedCategory={selectedSubcategory}
        onSelectCategory={handleCategorySelect}
      />
      <div className="main-content">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPrevious={handlePreviousPage}
          onNext={handleNextPage}
        />

        {selectedSubcategory && (
          <CategoryContent
            selectedCategory={selectedSubcategory}
            collectionName={collectionToUse}
          />
        )}
      </div>
    </div>
  );
};

export default AllProduct;
