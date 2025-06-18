import { Route, Routes } from "react-router-dom"
import type { pagesTypes } from "../types/pagesTypes";
import { Page } from "../views/Page";

export const RoutesNav = ({ pages }: { pages: pagesTypes[] }) => {
  return (
    <Routes>
      {
        pages.map(page => (
          <Route
            key={page.id}
            path={`/${page.route}`}
            element={<Page content={page.content} />}
          />
        ))
      }
    </Routes>
  )
}
