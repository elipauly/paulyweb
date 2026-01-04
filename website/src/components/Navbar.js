import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/contact" activeStyle>
                        contact
                    </NavLink>
                    <NavLink to="/work" activeStyle>
                        wo<br/>rk
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                        about
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;



