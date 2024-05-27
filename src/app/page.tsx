import TablePaginatedComponent from "@/components/table/table-paginated.component";
import styles from "./page.module.css";
import { User } from "@/services/users/user.models";
import { userColumns } from "@/components/user/user.constant";
import { GetPaginatedUser } from "@/services/users/user.service";
import ServerRes from "@/core/constant/server.response";

export default async function Home({ searchParams }: any) {
  const response: ServerRes = await GetPaginatedUser(searchParams);
  console.log("SEARCH PARAMS==", searchParams);

  const users: User[] = response.data;
  const totalPages: number = response.totalPages;
  const totalRows: number = response.totalRows;
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <TablePaginatedComponent
          data={users}
          columns={userColumns}
          searchUrl="/"
          totalPages={totalPages}
          totalRows={totalRows}
        />
      </div>
    </main>
  );
}
