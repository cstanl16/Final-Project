import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import LoginButton from '../components/login-button';
import LogoutButton from '../components/logout-button';
import { useAuth0 } from '@auth0/auth0-react';

const MainNav = () => (
    <Nav className="Nav">
        <Nav.Link
        as={RouterNavLink}
        to="/"
        exact
        className="Nav-Link"
        activeClassName="Nav-Link-active"
        >
        Home
        </Nav.Link>

        <Nav.Link
        as={RouterNavLink}
        to="/dashboard"
        exact
        className="Nav-Link"
        activeClassName="Nav-Link-active"
        >
        Dashboard
        </Nav.Link>

        <AuthNav className=""/>
  </Nav>
);

const AuthNav = () => {
	const { isAuthenticated } = useAuth0();

	return (
		<Nav className="Nav-Button">
			{isAuthenticated ? <LogoutButton /> : <LoginButton /> }
		</Nav>
	);
};

const Menu = () => {
    return (
        <div className="MenuContainer">
            <MainNav />
        </div>
    );
};

export default Menu;