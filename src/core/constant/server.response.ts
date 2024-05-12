export interface ServerRes {
  data: any[];
  currentPage: number;
  pageSize: number;
  totalPages: number;
  totalRows: number;
}
export default ServerRes;
