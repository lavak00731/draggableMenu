import { NavLink } from "react-router-dom"
import type { pagesTypes } from "../types/pagesTypes"
import { Plus } from 'lucide-react';

export const Nav = ({pages}:{ pages: pagesTypes[] }) => {
  return (
    <nav className="bg-gray-50 drop-shadow-md p-5 border-neutral-200 border-t">
        <ul className="flex flex-row gap-x-5">
            {
                pages.map((page:pagesTypes) =>{
                    return <li className="py-1.5 px-2.5 border rounded-lg" key={page.id}>
                               <NavLink className="flex flex-row items-center gap-1.5 font-inter leading-5  capitalize font-medium text-sm" to={page.route}>
                                  {page.name}
                                </NavLink>                        
                            </li>
                })
            }
            <li className="py-1.5 px-2.5 border rounded-lg"><button className="flex flex-row items-center gap-1.5 font-inter leading-5 capitalize font-medium text-sm"><Plus size={16}/> Add Pages</button></li>
        </ul>
    </nav>
  )
}
