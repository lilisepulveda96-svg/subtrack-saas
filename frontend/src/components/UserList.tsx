import { List, Datagrid, TextField } from "react-admin";

export const UserList = () => (
  <List>
    <Datagrid>
      <TextField label="Users" source="id"></TextField>
      <TextField label="Users" source="name"></TextField>
    </Datagrid>
  </List>
);
