import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";
import { URLField } from "../util/URLField";

export const TagList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Tags"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Name" source="name" />
        <URLField label="URL" source="slug" type="tags" />
        <DateField source="updatedAt" label="Updated At" />
        <DateField source="createdAt" label="Created At" />
      </Datagrid>
    </List>
  );
};
