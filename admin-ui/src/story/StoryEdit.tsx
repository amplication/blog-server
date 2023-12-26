import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  DateTimeInput,
} from "react-admin";

export const StoryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Title" source="title" />
        <TextInput label="Customer Name" source="customerName" />
        <BooleanInput label="Draft" source="draft" />
        <TextInput label="Featured Image" source="featuredImage" />
        <TextInput label="Meta Description" source="metaDescription" />
        <TextInput label="Meta Title" source="metaTitle" />
        <DateTimeInput label="Published At" source="publishedAt" />
        <TextInput label="Slug" source="slug" />
        <TextInput label="Tag" source="tag" />
        <TextInput
          label="Content"
          multiline
          source="content"
          style={{ width: 1000, minHeight: 400 }}
        />
      </SimpleForm>
    </Edit>
  );
};
