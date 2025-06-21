import { Flag, PenLine, Clipboard, Copy, Trash2 } from 'lucide-react';
const contextMenu = [
    {
        name: "Set as first page",
        icon: Flag,
        size: 16,
        fill: "#2f72e2",
        color: "#2f72e2"
    },
    {
        name: "Rename",        
        icon: PenLine,
        size: 16,
        fill: "transparent",
        color: '#9DA4B2'
    },
    {
       name: "Copy",
       icon: Clipboard,
       size: 16,
       fill: "transparent",
       color: '#9DA4B2' 
    },
    {
       name: "Duplicate",
       icon: Copy,
       size: 16,
       fill: "transparent",
       color: '#9DA4B2' 
    },
    {
       name: "Remove",
       icon: Trash2,
       size: 16,
       fill: "transparent",
       color: '#EF494F' 
    }
]
export default contextMenu