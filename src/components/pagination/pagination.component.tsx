import IconFirstPage from "../icons/iconFirstPage";
import IconLastPage from "../icons/iconLastPage";
import IconNext from "../icons/iconNext";
import IconPrev from "../icons/iconPrev";
import "./pagination.style.css";
interface PaginationComponentProps {
  currentPage: number;
  onPageChange: any;
  totalRows: number;
  onRowsPerPageChange: any;
  totalPages: number;
  totalRowPerPage: number;
}
const PaginationComponent: React.FC<PaginationComponentProps> = ({
  currentPage,
  onPageChange,
  totalRows,
  onRowsPerPageChange,
  totalPages,
  totalRowPerPage,
}) => {
  const handleRowsPerPageChange = (e: any) => {
    onRowsPerPageChange(parseInt(e.target.value, 10));
    if (totalRowPerPage === parseInt(e.target.value, 10)) {
      onPageChange(1);
    }
  };
  console.log("currentPage", currentPage, "===totalPages", totalPages);

  return (
    <div className="pagination-container">
      <div className={"pagination-number"}>
        <span>Page:</span>
        <span className={"active"}>{currentPage}</span>sur{" "}
        <span className={"all"}>{totalPages}</span>
      </div>
      <div className={"paginationButton"}>
        <button
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
          className={"left"}
        >
          <IconFirstPage />
        </button>
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={"center"}
        >
          <IconPrev />
        </button>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={"center"}
        >
          <IconNext />
        </button>
        <button
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
          className={"rigth"}
        >
          <IconLastPage />
        </button>
      </div>
      <div className={"paginationDropdown"}>
        <select value={totalRowPerPage} onChange={handleRowsPerPageChange}>
          <option value={20}>20</option>
          <option value={30}>30</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
          <option value={totalRows}>Tous</option>
        </select>
      </div>
    </div>
  );
};

export default PaginationComponent;
