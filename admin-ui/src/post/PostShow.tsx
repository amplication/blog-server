import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { AUTHOR_TITLE_FIELD } from "../author/AuthorTitle";

export const PostShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Author" source="author.id" reference="Author">
          <TextField source={AUTHOR_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Content" source="content" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Featured Image" source="featuredImage" />
        <TextField label="ID" source="id" />
        <TextField label="Title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
