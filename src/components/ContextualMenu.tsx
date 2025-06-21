import contextMenu from "../lib/contextMenu"
export const ContextualMenu = () => {
  return (
    <div id="contextMenu" role="dialog" aria-modal="true" tabIndex={-1} >
        <header>
            <h2>Setting</h2>
        </header>
        <div className="body">
        <ul>
            {
                contextMenu.map((item) =>{
                    return <li>
                        <button type="button" className="border-0 bg-none">
                            <item.icon size={item.size} fill={item.fill} color={item.color}/>
                            <span>item.name</span>
                        </button>
                    </li>
                })
            }
        </ul>
        </div>        
    </div>
  )
}
