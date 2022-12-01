import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
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

export const PostCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Title" multiline source="title" />
        <ReferenceInput source="author.id" reference="Author" label="Author">
          <SelectInput optionText={AuthorTitle} />
        </ReferenceInput>
        <DateTimeInput label="Published At" source="publishedAt" />
        <BooleanInput label="Draft" source="draft" />
        <TextInput label="Featured Image" source="featuredImage" />
        <TextInput label="Meta Title" source="metaTitle" />
        <TextInput label="Meta Description" source="metaDescription" />
        <ReferenceArrayInput
          source="tags"
          reference="Tag"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TagTitle} />
        </ReferenceArrayInput>
        <TextInput
          label="Content"
          multiline
          source="content"
          style={{ width: 1000, minHeight: 400 }}
        />
      </SimpleForm>
    </Create>
  );
};
