
const Pagination = ({ currentPage, totalPages, onPrevious, onNext }) => {
  return (
    <div className="pagination">
      <button onClick={onPrevious} disabled={currentPage === 1}>
        Anterior
      </button>
      <span>
        Página {currentPage} de {totalPages}
      </span>
      <button onClick={onNext} disabled={currentPage === totalPages}>
        Siguiente
      </button>
    </div>
  );
};

export default Pagination;
