import { Route, Routes } from "react-router-dom"
import { Page } from "../views/Page";
import { Pages } from "../context/context";
import { useContext } from "react";

export const RoutesNav = () => {
  const pages = useContext(Pages);
  return (
    <Routes>
      {
        pages ? pages.map(page => (
          <Route
            key={page.id}
            path={`/${page.route}`}
            element={<Page content={page.content} />}
          />
        )) : <p>No routes to show</p>
      }
    </Routes>
  )
}
