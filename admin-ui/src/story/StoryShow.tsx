import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

export const StoryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Content" source="content" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Customer Name" source="customerName" />
        <BooleanField label="Draft" source="draft" />
        <TextField label="Featured Image" source="featuredImage" />
        <TextField label="ID" source="id" />
        <TextField label="Meta Description" source="metaDescription" />
        <TextField label="Meta Title" source="metaTitle" />
        <TextField label="Published At" source="publishedAt" />
        <TextField label="Slug" source="slug" />
        <TextField label="Tag" source="tag" />
        <TextField label="Title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
