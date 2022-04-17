import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {

    return (
        <div>
            <Navbar bg="-" expand="lg">
                <Container className='d-flex flex-column'>
                    <Navbar.Brand as={Link} to="/" className='m-0' style={{ fontSize: "3rem", fontFamily: 'Send Flowers' }}>Couple Capture</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">HOME</Nav.Link>
                            <Nav.Link as={Link} to="/checkout">CART</Nav.Link>
                            <Nav.Link as={Link} to="/about">ABOUT</Nav.Link>
                            <Nav.Link as={Link} to="/blogs">BLOGS</Nav.Link>
                            <Nav.Link as={Link} to="/login">LOGIN</Nav.Link>
                            <Nav.Link as={Link} to="/register">REGISTER</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;