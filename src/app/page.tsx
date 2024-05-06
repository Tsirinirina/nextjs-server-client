import TablePaginatedComponent from "@/components/table/table-paginated.component";
import styles from "./page.module.css";
import { User } from "@/services/users/user.models";
import { userColumns } from "@/components/user/user.constant";
import { GetPaginatedUser } from "@/services/users/user.service";
import { useParams } from "next/navigation";

export default async function Home() {
  const params = useParams();
  const { page, pageSize } = params;
  console.log("PARAMS=", params);

  console.log("PAGE=", page, "======PAGE SIZE", pageSize);

  const response = await GetPaginatedUser(`${page}${pageSize}`);

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
