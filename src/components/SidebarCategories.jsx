// SidebarCategories.js
import React, { useEffect, useState } from "react";

const SidebarCategories = ({ selectedCategory, onSelectCategory }) => {
  const [openMenus, setOpenMenus] = useState({
    "Componentes Eléctricos": true,
    EPPS: false,
    "Herramientas Manuales y de Poder": false,
    "Limpieza Industrial": false,
  });

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

  const handleCategoryClick = (category) => {
    setOpenMenus((prevState) => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };

  // Código para que nos lleve al inicio de la página
  useEffect(() => {
    window.scrollTo(0, 0); // Desplazarse hacia el inicio
  }, []);

  return (
    <div className="w-full p-4">
      <h2 className="text-xl font-bold uppercase">Categorías</h2>
      <ul>
        {Object.keys(subcategories).map((category, index) => (
          <React.Fragment key={index}>
            <li
              className={openMenus[category] ? "open" : "font-bold"}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </li>
            {openMenus[category] && (
              <ul className="submenu pl-4">
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
