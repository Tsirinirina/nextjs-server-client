import api from "../../config/configuration.api.constant";
export const GetAllUser = async () => {
  const res = await fetch(`${api.user.index}`, { cache: "no-store" });
  return res.json();
};

export const GetPaginatedUser = async (criteria: Criteria) => {
  const res = await fetch(`${api.user.index}`, { cache: "no-store" });
  return res.json();
};
