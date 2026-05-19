import { Admin, Resource } from "react-admin";
import { dataProvider } from "./dataProvider";
import { UserList } from "./components/UserList";
import { CreateUser } from "./components/CreateUser";
import { UserEdit } from "./components/UserEdit";

export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="users"
      list={UserList}
      create={CreateUser}
      edit={UserEdit}
    />
  </Admin>
);
export default App;
