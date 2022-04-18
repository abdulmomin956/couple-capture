import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Spinner } from 'react-bootstrap';
import { useAuthState, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css'

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    if (loading) {
        console.log('loading');
    }
    if (error) {
        console.error(error);
    }
    const handleSignOut = () => {

        signOut(auth);
    }



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
                            {
                                user ?
                                    <NavDropdown title={user?.displayName?.toUpperCase()} id="basic-nav-dropdown">
                                        <NavDropdown.Item onClick={handleSignOut}>Sign Out</NavDropdown.Item>
                                    </NavDropdown>
                                    :
                                    <>
                                        <Nav.Link as={Link} to="/login">LOGIN</Nav.Link>
                                        <Nav.Link as={Link} to="/register">REGISTER</Nav.Link>
                                    </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;