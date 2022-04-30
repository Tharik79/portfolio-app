import React, { useState } from "react";
import './header.css';
import WebMenu from "./webpage/webmenu";
import MobileMenu from "./mobilepage/mobilemenu";

const Header =()=> {

    // write a usestate to toggle mobile menu with initial condition is false
    const [isOpen, setIsOpen] = useState(false);

    return(
        <div className="header">
            {/* <div className="logo"> Tharik-app</div> */}

            <div className="menu">
                <div className="web-menu"> <WebMenu/> </div>
                <div className="mobile-menu"> 
                  <div onClick={() => setIsOpen(!isOpen)}> 
                  {/* below icon for mobile menu */}
                    <img src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-menu-web-flaticons-flat-flat-icons.png" alt="menu"/>
                  </div>  
                  {/* conditional rendering for mobile menu to toggle below */}
                    {isOpen && <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen}/>}

                </div>
            </div>
            <div className="logo"> Tharik-Portfolio</div>
        </div>
    )
}
export default Header;
