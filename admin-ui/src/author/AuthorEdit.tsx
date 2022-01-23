import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const AuthorEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <TextInput label="Profile Image" source="profileImage" />
      </SimpleForm>
    </Edit>
  );
};
