import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Sidebar({links, close}){
    const location = useLocation();
    //console.log(location);
    //console.log(links)
    return (
        <div className="sidebar" onClick={close}>
            {
                links.map((link)=>{
                    return <Link className={location.pathname===link.path?"sidebar-link active": "sidebar-link"} to={link.path} key={link.name}>
                        <FontAwesomeIcon icon={link.icon}/>
                        {link.name}
                    </Link>;
                })
            }
        </div>
    )
}