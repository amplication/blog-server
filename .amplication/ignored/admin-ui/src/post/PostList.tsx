import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { AUTHOR_TITLE_FIELD } from "../author/AuthorTitle";

export const PostList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Posts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Title" source="title" />
        <TextField label="Featured Image" source="featuredImage" />
        <TextField label="Content" source="content" />
        <ReferenceField label="Author" source="author.id" reference="Author">
          <TextField source={AUTHOR_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Meta Title" source="metaTitle" />
        <TextField label="Meta Description" source="metaDescription" />
        <TextField label="Slug" source="slug" />
        <BooleanField label="Draft" source="draft" />
        <TextField label="Published At" source="publishedAt" />
      </Datagrid>
    </List>
  );
};
