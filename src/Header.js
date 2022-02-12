import React from 'react';
import {NavLink} from "react-router-dom";
import {Navbar, Nav} from "react-bootstrap";


const Header = () => {
    return ( 
    <Navbar bg="light" variant="light">
        <Nav className="mr-auto">
            <NavLink exact to="/">Home</NavLink>|
            <NavLink to="/about">About</NavLink>|
            <NavLink to="/music">Music</NavLink>|
        </Nav>
    </Navbar>
    );
}


export default Header;