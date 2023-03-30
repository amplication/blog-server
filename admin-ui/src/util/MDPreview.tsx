import { useRecordContext } from "react-admin";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

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
      <ReactMarkdown children={md} rehypePlugins={[rehypeRaw]} />
    </div>
  );
};
