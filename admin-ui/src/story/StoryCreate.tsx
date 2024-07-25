import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  DateTimeInput,
} from "react-admin";

export const StoryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Content" source="content" />
        <BooleanInput label="Draft" source="draft" />
        <TextInput label="Featured Image" source="featuredImage" />
        <TextInput label="Meta Description" source="metaDescription" />
        <TextInput label="Meta Title" source="metaTitle" />
        <DateTimeInput label="Published At" source="publishedAt" />
        <TextInput label="Slug" source="slug" />
        <TextInput label="Title" source="title" />
        <TextInput label="Tag" source="tag" />
        <TextInput label="Customer Name" source="customerName" />
      </SimpleForm>
    </Create>
  );
};
