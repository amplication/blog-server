import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
  ImageField,
} from "react-admin";

import { URLField } from "../util/URLField";

export const AuthorShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="First Name" source="firstName" />
        <TextField label="Last Name" source="lastName" />
        <DateField source="updatedAt" label="Updated At" />
        <ImageField label="Profile Image" source="profileImage" />
        <ReferenceManyField reference="Post" target="AuthorId" label="Posts">
          <Datagrid rowClick="show">
            <TextField label="Title" source="title" />
            <URLField label="URL" source="slug" />
            <BooleanField label="Draft" source="draft" />
            <DateField source="publishedAt" label="Published At" />
            <DateField source="updatedAt" label="Updated At" />
            <DateField source="createdAt" label="Created At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
