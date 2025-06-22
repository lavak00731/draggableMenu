import { Flag, PenLine, Clipboard, Copy, Trash2 } from 'lucide-react';
const contextMenu = [
    {
        id:"cm1",
        name: "Set as first page",
        icon: Flag,
        size: 16,
        fill: "#2f72e2",
        color: "#2f72e2"
    },
    {
        id:"cm2",
        name: "Rename",        
        icon: PenLine,
        size: 16,
        fill: "transparent",
        color: '#9DA4B2'
    },
    {
       id:"cm3",
       name: "Copy",
       icon: Clipboard,
       size: 16,
       fill: "transparent",
       color: '#9DA4B2' 
    },
    {
       id:"cm4",
       name: "Duplicate",
       icon: Copy,
       size: 16,
       fill: "transparent",
       color: '#9DA4B2' 
    },
    {
       id:"cm5",
       name: "Remove",
       icon: Trash2,
       size: 16,
       fill: "transparent",
       color: '#EF494F' 
    }
]
export default contextMenu