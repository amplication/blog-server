import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  // ReferenceManyField,
  // Datagrid,
  // ReferenceField,
  // BooleanField,
} from "react-admin";

// import { AUTHOR_TITLE_FIELD } from "../author/AuthorTitle";
// import { URLField } from "../util/URLField";

export const TagShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        {/* <ReferenceManyField reference="Post" target="TagsId" label="Posts">
          <Datagrid rowClick="show">
            <TextField label="Title" source="title" />
            <ReferenceField
              label="Author"
              source="author.id"
              reference="Author"
            >
              <TextField source={AUTHOR_TITLE_FIELD} />
            </ReferenceField>
            <URLField label="URL" source="slug" />
            <BooleanField label="Draft" source="draft" />
            <DateField source="publishedAt" label="Published At" />
            <DateField source="updatedAt" label="Updated At" />
            <DateField source="createdAt" label="Created At" />
          </Datagrid>
        </ReferenceManyField> */}
      </SimpleShowLayout>
    </Show>
  );
};
