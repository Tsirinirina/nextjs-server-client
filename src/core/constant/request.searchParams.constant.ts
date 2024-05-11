export interface SearchParams {
  page?: string | number;
  pageSize?: string | number;
  search?: string;
}

export const extractCriteriaFromSearchParams = (
  searchParams: SearchParams
): string => {
  const page = searchParams.page;
  const pageSize = searchParams.pageSize;
  const search = searchParams.search;

  return `?page=${page}&pageSize=${pageSize}`;
};
