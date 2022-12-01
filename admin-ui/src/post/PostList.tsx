import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { AUTHOR_TITLE_FIELD } from "../author/AuthorTitle";
import { PostURLField } from "../util/URLField";

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
        <TextField label="Title" source="title" />
        <ReferenceField label="Author" source="author.id" reference="Author">
          <TextField source={AUTHOR_TITLE_FIELD} />
        </ReferenceField>
        <PostURLField label="URL" source="slug" />
        <BooleanField label="Draft" source="draft" />
        <DateField source="publishedAt" label="Published At" />
        <DateField source="updatedAt" label="Updated At" />
        <DateField source="createdAt" label="Created At" />
      </Datagrid>
    </List>
  );
};