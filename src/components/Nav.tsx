import { NavLink } from "react-router-dom";
import type { pagesTypes } from "../types/pagesTypes";
import { ModalForm } from "./ModalForm";
import { useContext, useEffect, useState, useRef, type ReactElement} from "react";
import { Pages } from "../context/context";
import {
  Plus,
  Info,
  CircleCheck,
  FileText,
  EllipsisVertical,
} from "lucide-react";
import { ContextualMenu } from "./ContextualMenu";

export const Nav = () => {
  const [isOpened, setisOpened] = useState(false);
  const [contextIsOpen, setContextIsOpen] = useState(false);
  const [contextualPosition, setContextualPosition] = useState({x:0, y:0});
  const [pageToModify, setPageToModify] = useState<pagesTypes | null>(null)
  const context = useContext(Pages);
  const keyDownHandler = (e: KeyboardEvent) => {
    if (e.code === 'Escape') {
      setisOpened(false)
      setContextIsOpen(false)
    }
  };
  useEffect(() => {
    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, );
  
    useEffect(() => {
      const handleClickOutside = (e:MouseEvent) => {
        const target = e.target as HTMLElement
        console.log(target);
        console.log(target.closest('#contextMenu'))
        if (target && target.closest('#contextMenu')) {
          setContextIsOpen(true);
        } else {
          setContextIsOpen(false)
        }
      }

        document.addEventListener('mousedown', handleClickOutside)

      return () => {
        document.addEventListener('mousedown', handleClickOutside)
      }
    })
    
  
  if (!context) {
    return null;
  }
  const { pages, setPages } = context as { pages: pagesTypes[]; setPages: React.Dispatch<React.SetStateAction<pagesTypes[]>> };
  
  const addPage = (newPage:string)=>{
    const template = {
          "id": Date.now(),
          "name": newPage,
          "route": "/"+newPage,
          "content": newPage
      }
      const newPageCollection = [...pages, template]
      setPages(newPageCollection);
 }
  const iconsAssignation = (name: string, isActive: boolean) => {
    const color = isActive ? "#F59D0E" : "#8C93A1";    
    switch (name) {
      case "info":
        return <Info color={color} size={20} />;

      case "ending":
        return <CircleCheck color={color} size={20} />;

      default:
        return <FileText color={color} size={20} />;
    }
  };
  const handleAddPage = ()=> {
    setisOpened(true);
  }
  const handleRightClick = (e: React.MouseEvent, page:pagesTypes) => {
    e.preventDefault();
    const target = e.nativeEvent.target as HTMLElement;
    const contexM = document.querySelector('#contextMenu');
    if(target) {
      const {left} = target.getBoundingClientRect();   
      const contexHeight = contexM?.clientHeight;      
      setContextIsOpen(true)
      setPageToModify(page);
      if(contexHeight) setContextualPosition({x:left + 20, y:-contexHeight})
       // console.log(left)
        //console.log(contextualPosition)
    }
    
  }
  
  if(pages.length > 0) {
    return (
    <>
      <nav className="bg-gray-50 drop-shadow-md p-5 border-neutral-200 border-t text-center mx-auto relative">
        <ul className="inline-flex flex-row">
          { pages.map((page: pagesTypes) => {
            return (
              <li className="relative group hover:pr-9" key={page.id}>
                <NavLink
                  className={
                    ({ isActive }) =>
                      isActive
                        ? "py-1.5 px-2.5 border-neutral-200 border-1 rounded-lg  text-zinc-900 hover:bg-gray-400/[.35] focus-within:border-blue-600 focus-within:border-1 focus-within:bg-white focus-within:shadow-[0px_0px_0px_1.5px_#2f27e225] flex flex-row items-center gap-1.5 font-inter leading-5 capitalize font-medium text-sm  focus-visible:text-zinc-900 focus-visible:outline-0  has-[aria-current='page']:bg-white mr-5" // Active styles
                        : "py-1.5 px-2.5 border-neutral-200 border-1 rounded-lg  text-slate-500 bg-gray-400/[.15]  hover:bg-gray-400/[.35] focus-within:border-blue-600 focus-within:border-1 focus-within:bg-white focus-within:shadow-[0px_0px_0px_1.5px_#2f27e225] flex flex-row items-center gap-1.5 font-inter leading-5 capitalize font-medium text-sm  focus-visible:text-zinc-900 focus-visible:outline-0 mr-5" // Inactive styles
                  }
                  to={page.route}
                  onContextMenu={(e) => handleRightClick(e, page)}
                  aria-controls="contextMenu"
                >
                  {({ isActive }) => (
                    <>
                      {iconsAssignation(page.name, isActive)}
                      {page.name}
                      <EllipsisVertical
                        size={16}
                        className={isActive ? "inline" : "hidden"}
                      />
                    </>
                  )}
                </NavLink>

                <button
                  type="button"
                  aria-hidden="true"
                  tabIndex={-1}
                  onClick= {() => handleAddPage()}
                  className="rounded-full border bg-white text-black hidden absolute group-hover:block group-hover:right-5 group-hover:top-6/12 group-hover:-translate-y-6/12 cursor-pointer "
                >
                  <Plus size={16} />
                  <span className="sr-only">Add Page</span>
                </button>
              </li>
            );
          })}
          <li className="">
            <button onClick= {handleAddPage}  className="py-1.5 px-2.5 bg-white border-neutral border rounded-lg  text-slate-500 hover:bg-gray-400/[.35] focus-within:border-blue-600 focus-within:border-1 focus-within:bg-white shadow-[0px_0px_1px_0px_#000000] flex flex-row items-center gap-1.5 font-inter leading-5 capitalize font-medium text-sm  focus-visible:text-zinc-900 focus-visible:outline-0">
              <Plus size={16} /> Add Pages
            </button>
          </li>
        </ul>
        
          <ContextualMenu
            contextIsOpen={contextIsOpen}
            contextualPosition={contextualPosition}
            pageToModify={pageToModify}
          />
        
      </nav>
      <ModalForm isOpened={isOpened} setisOpened={setisOpened} addPage={addPage}/>
      
    </>
  );
  } 
  
};
