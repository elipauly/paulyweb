import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/design" activeStyle>
                        graphic design
                    </NavLink>
                    <NavLink to="/uiux" activeStyle>
                        ui/ux
                    </NavLink>
                    <NavLink to="/" activeStyle>
                        pauly
                    </NavLink>
                    <NavLink to="/resume" activeStyle>
                        resume
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                        contact
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;



