"use client";
import { User } from "@/services/users/user.models";
import "./table-paginated.style.css";
import DataTable from "react-data-table-component";
import { useEffect, useState } from "react";
import PaginationComponent from "../pagination/pagination.component";
import { useRouter } from "next/navigation";

interface TablePaginatedComponentProps {
  columns: any[];
  data: User[];
  searchUrl: string;
}

const TablePaginatedComponent: React.FC<TablePaginatedComponentProps> = ({
  columns,
  data,
  searchUrl,
}) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(20);
  const [totalPage, setTotalPage] = useState<number>(0);

  const handlePerRowsChange = (currentRowsPerPage: number): void => {
    setPerPage(currentRowsPerPage);
  };

  const handlePageChange = (page: number): void => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const criteria = `${
      searchUrl != "/" ? searchUrl : ""
    }?page=${currentPage}&pageSize=${perPage}`;

    console.log("CRITERIA=>", criteria);

    router.push(criteria);
  }, [currentPage, totalRows, perPage, router]);

  return (
    <div className="bg">
      <div>DataList Component</div>
      <div>
        <DataTable data={data} columns={columns} />
        <PaginationComponent
          currentPage={currentPage}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handlePerRowsChange}
          totalPages={totalPage}
          totalRowPerPage={perPage}
          totalRows={totalRows}
        />
      </div>
    </div>
  );
};

export default TablePaginatedComponent;
