"use client";
import { User } from "@/services/users/user.models";
import "./table-paginated.style.css";
import DataTable from "react-data-table-component";
import { useEffect, useState } from "react";
import PaginationComponent from "../pagination/pagination.component";
import { useRouter } from "next/navigation";
import TableLoader from "../loader/table.loader.component";

interface TablePaginatedComponentProps {
  columns: any[];
  data: User[];
  totalPages: number;
  totalRows: number;
  searchUrl: string;
}

const TablePaginatedComponent: React.FC<TablePaginatedComponentProps> = ({
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

  const handlePerRowsChange = (currentRowsPerPage: number): void => {
    setPerPage(currentRowsPerPage);
  };

  const handlePageChange = (page: number): void => {
    setCurrentPage(page);
  };

  const fetchData = async () => {
    setIsLoading(true); // Démarre le chargement

    const criteria = `${
      searchUrl !== "/" ? searchUrl : ""
    }?page=${currentPage}&pageSize=${perPage}`;

    setIsLoading(false); // Termine le chargement

    router.push(criteria);
  };

  useEffect(() => {
    fetchData();
  }, [currentPage, totalRows, perPage, router, searchUrl]);

  return (
    <div className="table-paginated-container">
      <div>DataList Component</div>
      <div>
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
