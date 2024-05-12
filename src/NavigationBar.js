import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

function NavigationBar() {
    const handleClick = (sectionId) => {
        const section = document.querySelector(sectionId);
        if (section) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const sectionPosition = section.offsetTop - navbarHeight;
            window.scrollTo({
                top: sectionPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => handleClick('#section-0')}>Section 0</Nav.Link>
                        <Nav.Link onClick={() => handleClick('#section-1')}>Section 1</Nav.Link>
                        <Nav.Link onClick={() => handleClick('#section-2')}>Section 2</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;
