import TablePaginatedComponent from "@/components/table/table-paginated.component";
import styles from "./page.module.css";
import { User } from "@/services/users/user.models";
import { userColumns } from "@/components/user/user.constant";
import { GetPaginatedUser } from "@/services/users/user.service";

export default async function Home({ searchParams }: any) {
  const response = await GetPaginatedUser(searchParams);
  const users: User[] = response.data;
  return (
    <main className={styles.main}>
      <TablePaginatedComponent
        data={users}
        columns={userColumns}
        searchUrl="/"
      />
    </main>
  );
}
