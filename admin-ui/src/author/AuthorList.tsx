import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";
import { URLField } from "../util/URLField";

export const AuthorList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Authors"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="First Name" source="firstName" />
        <TextField label="Last Name" source="lastName" />
        <URLField label="URL" source="slug" type="author" />
        <DateField source="updatedAt" label="Updated At" />
        <DateField source="createdAt" label="Created At" />
      </Datagrid>
    </List>
  );
};
