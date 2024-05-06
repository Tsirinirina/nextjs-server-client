import { User } from "@/services/users/user.models";

import { GetPaginatedUser } from "@/services/users/user.service";
import { userColumns } from "./user.constant";
import TablePaginatedComponent from "../table/table-paginated.component";

const UserList = async ({
  params,
}: {
  params: {
    page: string;
    pageSize: string;
  };
}) => {
  const criteria = `${params.page}`;
  const response = await GetPaginatedUser(criteria);
  const users: User[] = response.data;

  return (
    <main className={""}>
      <TablePaginatedComponent
        data={users}
        columns={userColumns}
        searchUrl="/"
      />
    </main>
  );
};

export default UserList;
