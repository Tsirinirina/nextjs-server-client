import { GetAllUser } from "@/services/users/user.service";
import styles from "./page.module.css";
import DataListComponent from "@/components/datalist/data.list.component";

export default async function Home() {
  return (
    <main className={styles.main}>
      <DataListComponent />
    </main>
  );
}
