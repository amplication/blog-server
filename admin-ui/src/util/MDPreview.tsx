import { useRecordContext } from "react-admin";
import ReactMarkdown from "react-markdown";

export const MDPreview = ({ source }: { source: string; label: string }) => {
  const record = useRecordContext();
  const md = record && record[source];
  const css = `
  img {
    width: 100%;
  }`;
  return (
    <div>
      <style>{css}</style>
      <ReactMarkdown children={md} />
    </div>
  );
};
