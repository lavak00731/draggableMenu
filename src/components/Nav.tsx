import { NavLink } from "react-router-dom"
import type { pagesTypes } from "../types/pagesTypes"
export const Nav = ({pages}:{ pages: pagesTypes[] }) => {
  return (
    <nav className="bg-gray-50 drop-shadow-md p-5 border-neutral-200 border-t">
        <ul>
            {
                pages.map((page:pagesTypes) =>{
                    return <li key={page.id}>
                                <NavLink to={page.route}>{page.name}</NavLink>                        
                            </li>
                })
            }
        </ul>
    </nav>
  )
}
