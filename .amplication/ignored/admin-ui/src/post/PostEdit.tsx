import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  BooleanInput,
  DateTimeInput,
} from "react-admin";

import { AuthorTitle } from "../author/AuthorTitle";
import { TagTitle } from "../tag/TagTitle";

export const PostEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Title" multiline source="title" />
        <TextInput label="Featured Image" source="featuredImage" />
        <TextInput label="Content" multiline source="content" />
        <ReferenceInput source="author.id" reference="Author" label="Author">
          <SelectInput optionText={AuthorTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="tags"
          reference="Tag"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TagTitle} />
        </ReferenceArrayInput>
        <TextInput label="Meta Title" source="metaTitle" />
        <TextInput label="Meta Description" source="metaDescription" />
        <TextInput label="Slug" source="slug" />
        <BooleanInput label="Draft" source="draft" />
        <DateTimeInput label="Published At" source="publishedAt" />
      </SimpleForm>
    </Edit>
  );
};
