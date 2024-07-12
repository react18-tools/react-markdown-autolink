import { LandingPage } from "@repo/shared/dist/server";
import { Demo } from "@repo/shared";
import Markdown from "react-markdown";
import { autoLinkMd } from "react-markdown-autolink";

export const metadata = {
  title: "React Markdown Autolink",
};

const md = `## Automatically Detect and Add Hyperlinks to Your Markdown Content
https://github.com/react18-tools/react-markdown-autolink
`;
/** next.js landing page */
export default function Page(): JSX.Element {
  return (
    <LandingPage title="Next.js Example">
      <Markdown>{autoLinkMd(md)}</Markdown>
    </LandingPage>
  );
}
