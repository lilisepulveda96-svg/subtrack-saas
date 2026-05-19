import { Edit, SimpleForm, TextInput } from "react-admin";

const validateName = (value: string) => {
  if (!value || value.trim() === "") {
    return "El nombre es obligatorio y no puede estar vacío";
  }
  return undefined;
};
export const UserEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput label="Name" source="name" validate={validateName} />
    </SimpleForm>
  </Edit>
);
