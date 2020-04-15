import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Header.css';

class Header extends Component {
    render(){
        return (
            <Navbar bg="dark" variant="dark" expand="sm">
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Navbar.Brand>Cultural Experience Project</Navbar.Brand>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/images">Images</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;