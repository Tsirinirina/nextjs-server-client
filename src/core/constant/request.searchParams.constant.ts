export interface SearchParams {
  page?: string | number;
  pageSize?: string | number;
  search?: string;
}

export const extractCriteriaFromSearchParams = (
  searchParams: SearchParams
): string => {
  const page = searchParams.page && `page=${searchParams.page}`;
  const pageSize =
    searchParams.pageSize && `&pageSize=${searchParams.pageSize}`;
  const search = searchParams.search && `&search=${searchParams.search}`;

  return `?${page}${pageSize}${search}`;
};

export const queryBegin = (searchUrl: string) => {
  return searchUrl !== "/" ? searchUrl : "";
};
