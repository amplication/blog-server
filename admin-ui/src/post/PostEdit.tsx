import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  BooleanInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { AuthorTitle } from "../author/AuthorTitle";
import { TagTitle } from "../tag/TagTitle";

export const PostEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="author.id" reference="Author" label="Author">
          <SelectInput optionText={AuthorTitle} />
        </ReferenceInput>
        <TextInput label="Content" multiline source="content" />
        <BooleanInput label="Draft" source="draft" />
        <TextInput label="Featured Image" source="featuredImage" />
        <TextInput label="Meta Description" source="metaDescription" />
        <TextInput label="Meta Title" source="metaTitle" />
        <DateTimeInput label="Published At" source="publishedAt" />
        <TextInput label="Slug" source="slug" />
        <ReferenceArrayInput
          source="tags"
          reference="Tag"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TagTitle} />
        </ReferenceArrayInput>
        <TextInput label="Title" multiline source="title" />
      </SimpleForm>
    </Edit>
  );
};
