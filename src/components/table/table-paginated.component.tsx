"use client";
import { User } from "@/services/users/user.models";
import "./table-paginated.style.css";
import DataTable from "react-data-table-component";
import { useEffect, useRef, useState } from "react";
import PaginationComponent from "../pagination/pagination.component";
import { useRouter } from "next/navigation";
import TableLoader from "../loader/table.loader.component";
import IconArrowLeft from "../icons/iconArrowLeft";
import IconSearch from "../icons/iconSearch";
import IconClose from "../icons/iconClose";
import { queryBegin } from "@/core/constant/request.searchParams.constant";

interface TablePaginatedComponentProps {
  title?: string;
  columns: any[];
  data: User[];
  totalPages: number;
  totalRows: number;
  searchUrl: string;
}

const TablePaginatedComponent: React.FC<TablePaginatedComponentProps> = ({
  title,
  columns,
  data,
  totalPages,
  totalRows,
  searchUrl,
}) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [perPage, setPerPage] = useState(20);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchKeywords, setSearchKeywords] = useState<string>("");

  const handlePerRowsChange = (currentRowsPerPage: number): void => {
    setPerPage(currentRowsPerPage);
  };

  const handlePageChange = (page: number): void => {
    setCurrentPage(page);
  };

  const fetchData = async () => {
    setIsLoading(true);
    const criteria = `${queryBegin(
      searchUrl
    )}?page=${currentPage}&pageSize=${perPage}`;
    setIsLoading(false);
    router.push(criteria);
  };

  const handleBack = () => {};

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    // event.preventDefault();
    setSearchKeywords(event.target.value);
  };

  const handleSubmitSearch = () => {
    setIsLoading(true);
    const criteria = `${queryBegin(
      searchUrl
    )}?page=${currentPage}&pageSize=${perPage}&search=${searchKeywords}`;
    setIsLoading(false);
    router.push(criteria);
  };
  const handleClear = () => {
    setSearchKeywords("");
    setIsLoading(true);
    const criteria = `${queryBegin(
      searchUrl
    )}?page=${currentPage}&pageSize=${perPage}`;
    setIsLoading(false);
    router.push(criteria);
  };

  useEffect(() => {
    fetchData();
  }, [currentPage, totalRows, perPage, router, searchUrl]);

  return (
    <div className="table-paginated container">
      <div className="header">
        <div className="start">
          <button className="btn back" onClick={handleBack}>
            <IconArrowLeft />
          </button>
          <div className="title">{title ? title : "Liste "}</div>
        </div>
        <div className="end">
          <div className="form-field ">
            <input
              type="search"
              placeholder="Rechercher..."
              onChange={handleSearch}
              value={searchKeywords}
            />
            <button
              // onClick={searchKeywords.length ? handleClear : handleSubmitSearch}
              onClick={handleSubmitSearch}
            >
              {/* {searchKeywords.length != 0 ? <IconClose /> : <IconSearch />} */}
              <IconSearch />
            </button>
          </div>
        </div>
      </div>
      <div className="body ">
        <DataTable
          data={data}
          columns={columns}
          fixedHeader
          fixedHeaderScrollHeight="70vh"
          progressPending={isLoading}
          progressComponent={<TableLoader />}
        />
        <PaginationComponent
          currentPage={currentPage}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handlePerRowsChange}
          totalPages={totalPages}
          totalRowPerPage={perPage}
          totalRows={totalRows}
        />
      </div>
    </div>
  );
};

export default TablePaginatedComponent;
