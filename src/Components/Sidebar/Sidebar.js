import SidebarItem from "../../Components/Sidebar/SidebarItem"
import items from "../../Components/Sidebar/Sidebar.json"
import "../../CSS/Sidebar.css"


export default function Sidebar(){
    return (
        <div className="sidebar">
          { items.map((item, index) => <SidebarItem key={index} item={item} />) }
        </div>
    )
}