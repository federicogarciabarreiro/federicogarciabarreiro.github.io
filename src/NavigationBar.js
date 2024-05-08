import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';

function NavigationBar({ refProp }) {
    return (
        <>
                <Navbar bg="dark" data-bs-theme="dark">
                    <Container>
                        <Navbar.Brand href="#home">Porfolio</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link onClick={() => refProp.current.scrollTo(0)}>section-0</Nav.Link>
                            <Nav.Link onClick={() => refProp.current.scrollTo(1)}>section-1</Nav.Link>
                            <Nav.Link onClick={() => refProp.current.scrollTo(2)}>section-2</Nav.Link>
                            <Nav.Link onClick={() => refProp.current.scrollTo(3)}>section-3</Nav.Link>
                            <Nav.Link onClick={() => refProp.current.scrollTo(4)}>section-4</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
        </>
    );
}

export default NavigationBar;