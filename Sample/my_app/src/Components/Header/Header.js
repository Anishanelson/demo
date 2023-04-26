import React, { useState, useRef } from "react";
import './Header.css';
import { HiBars3 } from "react-icons/hi2";
import { Menu } from 'primereact/menu';
import { Toast } from 'primereact/toast';



export const Header = () => {

    const [nav, setNav] = useState(false);
    const toast = useRef(null);
    const menu = useRef(null);
    const items = [
        { label: 'Documents', },
        { label: 'Tags', },
        { label: 'User & Groups', },
        { label: 'Admin', },
        { label: 'Setting', },
        { label: 'logout', },
    ];

    return (
        <>
            <div className="HeaderSection">
                <h2>Header</h2>
                <div className="Menu">
                    <p className="Menu">Documents</p>
                    <p className="Menu">Tags</p>
                    <p className="Menu">User & Groups</p>
                </div>
                 <div className="Menuone">
                    <p className="Menu">admin</p>
                    <p className="Menu">setting</p>
                    <p className="Menu">logout</p>
                </div> 
                <Toast ref={toast}></Toast>
                <Menu model={items} popup ref={menu} />
                <button className="BurgerMenu" onClick={(e) => menu.current.toggle(e)}> <HiBars3 size={30} className="BurgerMenuIcon"/> </button>
            </div>

            {/* <>
            <Toast ref={toast}></Toast>
            <Menu model={items} popup ref={menu} />
            <HiBars3 size={30} className="BurgerMenu" onClick={(e) => menu.current.toggle(e)} />
                 {nav && (<div className="and">
                    <p>Documents</p>
                    <p>Tags</p>
                    <p>User & Groups</p>
                    <p>admin</p>
                    <p>setting </p>
                    <p>logout</p>
                </div>)} 
            </> */}
        </>
    )
}