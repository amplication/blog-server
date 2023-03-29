import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  BooleanField,
  ImageField,
} from "react-admin";

import { AUTHOR_TITLE_FIELD } from "../author/AuthorTitle";
import { MDPreview } from "../util/MDPreview";

export const PostShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Title" source="title" />
        <ReferenceField label="Author" source="author.id" reference="Author">
          <TextField source={AUTHOR_TITLE_FIELD} />
        </ReferenceField>
        <DateField label="Published At" source="publishedAt" />
        <DateField label="Updated At" source="updatedAt" />
        <BooleanField label="Draft" source="draft" />
        <ImageField label="Featured Image" source="featuredImage" />
        <MDPreview label="Content" source="content" />
      </SimpleShowLayout>
    </Show>
  );
};
