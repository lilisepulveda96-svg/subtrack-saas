import { Create, SimpleForm, TextInput } from "react-admin";

export const CreateUser = () => (
  <Create>
    <SimpleForm>
      <TextInput label="Name" source="name" />
      <TextInput label="email" source="email" />
    </SimpleForm>
  </Create>
);
