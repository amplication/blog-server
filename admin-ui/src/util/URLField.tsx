import * as React from "react";
import { useRecordContext } from "react-admin";

export const PostURLField = ({ source }: { source: string; label: string }) => {
  const record = useRecordContext();
  const url = new URL(record && record[source], "https://amplication.com/blog/")
    .href;
  const preventBubble: React.MouseEventHandler = (e) => {
    e.stopPropagation();
  };
  return (
    <a href={url} target={"_blank"} rel={"noreferrer"} onClick={preventBubble}>
      {url}
    </a>
  );
};

export const TagURLField = ({ source }: { source: string; label: string }) => {
  const record = useRecordContext();
  const url = new URL(record && record[source], "https://amplication.com/tag/")
    .href;
  const preventBubble: React.MouseEventHandler = (e) => {
    e.stopPropagation();
  };
  return (
    <a href={url} target={"_blank"} rel={"noreferrer"} onClick={preventBubble}>
      {url}
    </a>
  );
};
