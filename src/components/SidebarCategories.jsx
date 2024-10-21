import React, { useState } from "react";

const SidebarCategories = ({ selectedCategory, onSelectCategory }) => {
  const [openMenus, setOpenMenus] = useState({
    "Componentes Eléctricos": false,
    EPPS: false,
    "Herramientas Manuales y de Poder": false,
    "Limpieza Industrial": false,
  });

  // Definir las subcategorías para todos los títulos
  const subcategories = {
    "Componentes Eléctricos": [
      "Conductores Eléctricos - Cables",
      "Automatización y Control",
      "Iluminación Industrial",
      "Distribución de Baja y Media Tensión",
      "Materiales Aislantes",
      "Telecomunicaciones y Seguridad Electrónica",
    ],
    "EPPS": ["Protección Personal", "Protección Auditiva", "Protección Visual"],
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

  // Función para manejar el clic en los títulos
  const handleCategoryClick = (category) => {
    setOpenMenus((prevState) => ({
      ...prevState,
      [category]: !prevState[category], // Cambia el estado solo del menú seleccionado
    }));
  };

  return (
    <div className="sidebar">
      <h2 className="text-xl font-bold uppercase">Categorías</h2>
      <ul>
        {/* Mapeamos sobre las categorías principales */}
        {Object.keys(subcategories).map((category, index) => (
          <React.Fragment key={index}>
            <li
              className={openMenus[category] ? "open" : "font-bold"}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </li>
            {/* Mostramos el submenú si el estado del menú correspondiente es true */}
            {openMenus[category] && (
              <ul className="submenu">
                {subcategories[category].map((subcategory, subIndex) => (
                  <li
                    key={subIndex}
                    className={
                      selectedCategory === subcategory ? "selected" : ""
                    }
                    onClick={() => onSelectCategory(subcategory)}
                  >
                    {subcategory}
                  </li>
                ))}
              </ul>
            )}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default SidebarCategories;
