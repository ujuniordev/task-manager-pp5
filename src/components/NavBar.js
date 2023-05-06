import React, { useContext } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { CurrentUserContext } from "../App";


const NavBar = () => {
  const currentUser = useContext(CurrentUserContext);

  const loggedInIcons = <>{currentUser?.username}</>;
  const loggedOutIcons = (
    <>
      <NavItem>
        <NavLink href="/signin">Sign In</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/signup">Sign up</NavLink>
      </NavItem>
    </>
  );

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">ToDo App</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
export default NavBar;
