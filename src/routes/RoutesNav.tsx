import { Route, Routes, Navigate } from "react-router-dom"
import { Page } from "../views/Page";
import { Pages } from "../context/context";
import type { pagesTypes } from "../types/pagesTypes";
import { useContext } from "react";

export const RoutesNav = () => {

  const context = useContext(Pages);
  if (!context) {
       return null;
  }
  const { pages } = context as { pages: pagesTypes[] };
  if(pages && pages.length > 0) {
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
      <Route path={"/*"} element={<Navigate to="/" replace />} />
    </Routes>
  )
  }
  
}
