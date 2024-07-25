import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { AUTHOR_TITLE_FIELD } from "./AuthorTitle";

export const AuthorShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="First Name" source="firstName" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Profile Image" source="profileImage" />
        <TextField label="Slug" source="slug" />
        <TextField label="Twitter" source="twitter" />
        <ReferenceManyField reference="Post" target="authorId" label="Posts">
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Title" source="title" />
            <TextField label="Featured Image" source="featuredImage" />
            <TextField label="Content" source="content" />
            <ReferenceField
              label="Author"
              source="author.id"
              reference="Author"
            >
              <TextField source={AUTHOR_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Meta Title" source="metaTitle" />
            <TextField label="Meta Description" source="metaDescription" />
            <TextField label="Slug" source="slug" />
            <BooleanField label="Draft" source="draft" />
            <TextField label="Published At" source="publishedAt" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
