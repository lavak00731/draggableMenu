
import contextMenu from "../lib/contextMenu"
import type { ContextualModalType } from "../types/ContextualModalType"
export const ContextualMenu = ({contextIsOpen, contextualPosition, pageToModify}:ContextualModalType) => {
    //in order to make logic to modify the page
    console.log(pageToModify)
    
  return (
    <div id="contextMenu"role="dialog" aria-modal="true" aria-labelledby="modalId2" tabIndex={-1} 
    className={
        contextIsOpen ? "w-[240px] border-1 border-neutral-200 rounded-lg bg-white absolute "
                      : "w-[240px] border-1 border-neutral-200 rounded-lg bg-white absolute hidden"
    }
    style={{left: contextualPosition.x, top: -243 }}
    >
        <header className="bg-gray-50 border-b-1 border-neutral-200 px-3 py-2">
            <h2 id="modalId2" className="font-inter text-base tracking-tighter text-left">Settings</h2>
        </header>
        <div className="p-3">
        <ul className="flex flex-col gap-y-3.5">
            {
                contextMenu.map((item) =>{
                    return <li key={item.id}>
                        <button type="button" className="border-0 bg-none flex flex-row gap-x-1 items-center cursor-pointer">
                            <item.icon className="pointer-events-none" size={item.size} fill={item.fill} color={item.color}/>
                            <span className="pointer-events-none">{item.name}</span>
                        </button>
                    </li>
                })
            }
        </ul>
        </div>        
    </div>
  )
}
