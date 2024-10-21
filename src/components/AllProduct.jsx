import { useState } from "react";
import SidebarCategories from "./SidebarCategories";
import Pagination from "./Pagination";
import CategoryContent from "./CategoryContent";

const AllProduct = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5; // Suponiendo que tienes 5 páginas de contenido.

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reinicia a la página 1 al cambiar de categoría
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };


  return (
    <div className="flex w-[85%] m-auto">
      <SidebarCategories
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategorySelect}
      />
      <div className="main-content">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPrevious={handlePreviousPage}
          onNext={handleNextPage}
        />

        {selectedCategory && (
          <CategoryContent selectedCategory={selectedCategory} />
        )}
      </div>
    </div>
  );
};

export default AllProduct;
