import {
  SearchParams,
  extractCriteriaFromSearchParams,
} from "@/core/constant/request.searchParams.constant";
import api from "../../config/configuration.api.constant";
export const GetAllUser = async () => {
  const res = await fetch(`${api.user.index}`, { cache: "no-store" });
  return res.json();
};

export const GetPaginatedUser = async (searchParams: SearchParams) => {
  const criteria = extractCriteriaFromSearchParams(searchParams);
  const res = await fetch(`${api.user.index}/${criteria}`, {
    cache: "no-store",
  });
  return res.json();
};
