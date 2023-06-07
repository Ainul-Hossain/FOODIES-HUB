import { useState } from "react";

export default function Navbar(){
    const [showSideBar, setShowSideBar] = useState(true);

    return (
        <div className="navbar container">
            <a href="#" className="logo">F<span className="logo-color">oo</span>diesHub</a>

            <div className="nav-links">
                <a href="#">Home</a>
                <a href="#">Recipes</a>
                <a href="#">Settings</a>
            </div>

            <div onClick={()=>setShowSideBar(!showSideBar)} className={showSideBar?"sidebar-btn active": "sidebar-btn"}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </div>
    )
}