import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import CustomNavLink from './CustomNavLink';
import { useAuth } from '../../Utils/AuthProvider';

function NavbarShared() {
    const {token} = useAuth();

    const navbarStyle = {
        zIndex: 999,
    }

    return (
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" style={navbarStyle}>
            <Container>
                <Navbar.Brand href="/" style={{ fontFamily: 'Cambria' }}>
                    <img
                        src="/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="TOFF Logo"
                    /> T O F F
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav>
                        <CustomNavLink to="/">Home</CustomNavLink>
                        <CustomNavLink to="/musik">Musik</CustomNavLink>
                        <CustomNavLink to="/live">Live</CustomNavLink>
                        {/* <CustomNavLink to="/songanteile">Songanteile</CustomNavLink> */}
                        <CustomNavLink to="/kontakt">Kontakt</CustomNavLink>
                        <CustomNavLink to="/impressum">Impressum</CustomNavLink>
                        {token && <CustomNavLink to="/admin">Admin</CustomNavLink>}
                        {token && <CustomNavLink to="/logout">Logout</CustomNavLink>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarShared;
