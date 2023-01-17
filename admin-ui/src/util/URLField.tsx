import * as React from "react";
import { useRecordContext } from "react-admin";

export const URLField = ({ source, type = 'blog' }: { source: string; label: string, type?: 'author' | 'blog' | 'tag' }) => {
  const record = useRecordContext();
  const url = new URL(record && record[source], `https://amplication.com/${type}/`)
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
