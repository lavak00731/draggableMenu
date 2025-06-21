import type { pagesTypes } from "./pagesTypes";
export interface PagesContextType  {
  pages: pagesTypes[];
  setPages: React.Dispatch<React.SetStateAction<pagesTypes[]>>;
};