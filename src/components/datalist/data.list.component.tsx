import { User } from "@/services/users/user.models";
import { GetAllUser } from "@/services/users/user.service";
import { Suspense } from "react";

interface DataListComponentProps {}

const DataListComponent: React.FC<DataListComponentProps> = async ({}) => {
  const response = await GetAllUser();
  const users: User[] = response.data;
  console.log("RESPONSES=>", users);
  return (
    <div>
      <div>DataList Component</div>
      <ul>
        {users.map((user) => (
          <li key={`user-data-set-${user.id}`}>
            <div>Name: {user.name}</div>
            <div>Gender: {user.gender}</div>
            <div>Age: {user.age}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataListComponent;
