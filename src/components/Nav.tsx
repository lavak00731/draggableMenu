import { NavLink } from "react-router-dom"
import type { pagesTypes } from "../types/pagesTypes"
import { Plus, Info, CircleCheck, FileText, EllipsisVertical } from 'lucide-react';

export const Nav = ({pages}:{ pages: pagesTypes[] }) => {
  const iconsAssignation = (name: string, isActive: boolean) => {
    const color = isActive? "#F59D0E" : "#8C93A1";
    switch (name) {
      case "info":
        return <Info color={color}  size={20}/>

      case "ending":
        return <CircleCheck color={color}  size={20}/>

      default:
        return <FileText color={color}  size={20}/>

    }
  }
  return (
    <nav className="bg-gray-50 drop-shadow-md p-5 border-neutral-200 border-t">
        <ul className="flex flex-row">
            {
                pages.map((page:pagesTypes) =>{
                    return <li className="relative"   key={page.id}>
                    <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "py-1.5 px-2.5 border-neutral-200 border-1 rounded-lg  text-zinc-900 hover:bg-gray-400/[.35] focus-within:border-blue-600 focus-within:border-1 focus-within:bg-white focus-within:shadow-[0px_0px_0px_1.5px_#2f27e225] flex flex-row items-center gap-1.5 font-inter leading-5 capitalize font-medium text-sm  focus-visible:text-zinc-900 focus-visible:outline-0  has-[aria-current='page']:bg-white mr-5" // Active styles
                            : "py-1.5 px-2.5 border-neutral-200 border-1 rounded-lg  text-slate-500 bg-gray-400/[.15]  hover:bg-gray-400/[.35] focus-within:border-blue-600 focus-within:border-1 focus-within:bg-white focus-within:shadow-[0px_0px_0px_1.5px_#2f27e225] flex flex-row items-center gap-1.5 font-inter leading-5 capitalize font-medium text-sm  focus-visible:text-zinc-900 focus-visible:outline-0 mr-5 " // Inactive styles
                        }
                        to={page.route}
                      >
                        {({ isActive }) => (
                          <>
                            {iconsAssignation(page.name, isActive)}
                            {page.name}                    
                            <EllipsisVertical size={16} className={isActive ? "inline" : "hidden"} />
                          </>
                        )}
                      </NavLink>

                      <button type="button" aria-hidden="true" tabIndex={-1} className="rounded-full border bg-white text-black hidden absolute">
                        <Plus size={16}/> 
                        <span className="sr-only">Add Page</span>
                      </button>                        
                  </li>
                })
            }
            <li className=""><button className="py-1.5 px-2.5 bg-white border-neutral border rounded-lg  text-slate-500 hover:bg-gray-400/[.35] focus-within:border-blue-600 focus-within:border-1 focus-within:bg-white shadow-[0px_0px_1px_0px_#000000] flex flex-row items-center gap-1.5 font-inter leading-5 capitalize font-medium text-sm  focus-visible:text-zinc-900 focus-visible:outline-0"><Plus size={16}/> Add Pages</button></li>
        </ul>
    </nav>
  )
}
