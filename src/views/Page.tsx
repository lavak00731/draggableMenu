import type { PageViewProps } from "../types/pageViewType";

export const Page = ({ content }: PageViewProps) => {
  return (
    <article className="bg-blue-700 flex items-center justify-center h-[80lvh]">
        <h1 className="text-white text-5xl capitalize">Hello {content}</h1>
    </article>
  );
};