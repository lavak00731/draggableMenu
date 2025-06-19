import type { PageViewProps } from "../types/pageViewType";

export const Page = ({ content }: PageViewProps) => {
  return (
    <article className="bg">
        <h1>Hello {content}</h1>
    </article>
  );
};