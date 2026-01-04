import React from "react";
import { Nav, NavLink, CenterLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/contact" end>
                        contact
                    </NavLink>
                    <CenterLink to="/work" end>
                        <span>wo</span>
                        <span>rk</span>
                    </CenterLink>
                    <NavLink to="/about" end>
                        about
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;



