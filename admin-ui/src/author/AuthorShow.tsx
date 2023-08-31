import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
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
        <DateField source="createdAt" label="Created At" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Profile Image" source="profileImage" />
        <TextField label="Slug" source="slug" />
        <TextField label="Twitter" source="twitter" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Post" target="authorId" label="Posts">
          <Datagrid rowClick="show">
            <ReferenceField
              label="Author"
              source="author.id"
              reference="Author"
            >
              <TextField source={AUTHOR_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Content" source="content" />
            <DateField source="createdAt" label="Created At" />
            <BooleanField label="Draft" source="draft" />
            <TextField label="Featured Image" source="featuredImage" />
            <TextField label="ID" source="id" />
            <TextField label="Meta Description" source="metaDescription" />
            <TextField label="Meta Title" source="metaTitle" />
            <TextField label="Published At" source="publishedAt" />
            <TextField label="Slug" source="slug" />
            <TextField label="Title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
