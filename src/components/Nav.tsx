import { NavLink } from "react-router-dom"
import type { pagesTypes } from "../types/pagesTypes"
import { Plus, Info, CircleCheck, FileText, EllipsisVertical } from 'lucide-react';

export const Nav = ({pages}:{ pages: pagesTypes[] }) => {
  const iconsAssignation = (name: string) => {
    switch (name) {
      case "info":
        return <Info  size={20}/>

      case "ending":
        return <CircleCheck size={20}/>

      default:
        return <FileText size={20}/>

    }
  }
  return (
    <nav className="bg-gray-50 drop-shadow-md p-5 border-neutral-200 border-t">
        <ul className="flex flex-row">
            {
                pages.map((page:pagesTypes) =>{
                    return <li className="py-1.5 px-2.5 border-neutral-200 rounded-lg bg-gray-400/[.15] text-slate-500 hover:bg-gray-400/[.35] focus-within:border-blue-600 focus-within:border-1 focus-within:bg-white " key={page.id}>
                               <NavLink className="flex flex-row items-center gap-1.5 font-inter leading-5 capitalize font-medium text-sm  focus-visible:text-zinc-900 focus-visible:outline-0" to={page.route}>
                                  {iconsAssignation(page.name)}
                                  {page.name}
                                  <EllipsisVertical  />
                                </NavLink>
                                <button type="button" aria-hidden="true" tabIndex={-1} className="rounded-full border bg-white text-black">
                                  <Plus size={16}/> 
                                  <span className="sr-only">Add Page</span>
                                </button>                        
                            </li>
                })
            }
            <li className="py-1.5 px-2.5 border-neutral-200 rounded-lg bg-gray-400/[.15] text-slate-500 hover:bg-gray-400/[.35] focus-within:border-blue-600 focus-within:border-1 focus-within:bg-white "><button className="flex flex-row items-center gap-1.5 font-inter leading-5 capitalize font-medium text-sm  focus-visible:text-zinc-900 focus-visible:outline-0"><Plus size={16}/> Add Pages</button></li>
        </ul>
    </nav>
  )
}
