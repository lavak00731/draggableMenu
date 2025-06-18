import { NavLink } from "react-router-dom"
import type { pagesTypes } from "../types/pagesTypes"
export const Nav = ({pages}:{ pages: pagesTypes[] }) => {
  return (
    <nav>
        <div role="list">
            {
                pages.map((page:pagesTypes) =>{
                    return <div role="listitem" key={page.id}>
                        <button type="button">{page.name}</button>

                    </div>
                })
            }
        </div>
    </nav>
  )
}
