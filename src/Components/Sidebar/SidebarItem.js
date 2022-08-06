import { useState } from "react"
import {Link} from 'react-router-dom';  
import {GoPlus} from 'react-icons/go';

export default function SidebarItem({item}){
    const [open, setOpen] = useState(false)

    // onClick={() => setOpen(!open)}
    if(item.childrens){
        return (
            <div className={open ? "sidebar-item open" : "sidebar-item"}>
                <div className="sidebar-title" onClick={() => setOpen(!open)}>
                    <span >
                        { item.icon && <i className={item.icon}></i> }
                        {item.title}    
                    </span> 
                    <i> <GoPlus /> </i>
                </div>
                <div className="sidebar-content">
                    { item.childrens.map((child, index) => <SidebarItem key={index} item={child} />) }
                </div>
            </div>
        )
    }else{
        return (
            <Link to={item.path || "#"} className="sidebar-item plain">
                { item.icon && <i className={item.icon}></i> }
                {item.title}
            </Link>
        )
    }
}