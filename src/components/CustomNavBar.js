{/*CustomNavBar recibe title, scrollPercentage y sections, un array objetos definida en constants.js*/}

import { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

function CustomNavBar({ title, sections, scrollPercentage }) {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 100);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const handleClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = document.querySelector('.navbar').offsetHeight;
      const sectionPosition = section.offsetTop - navbarHeight;
      window.scrollTo({
        top: sectionPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className={visible ? 'custom-navbar visible' : 'custom-navbar hidden'}>
      <Container>
        <Navbar.Brand href="#home">{title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {sections.map((section, index) => (
              <Nav.Link key={index} onClick={() => handleClick(section.id)}>
                {section.text}
              </Nav.Link>
            ))}
          </Nav>
          <div className="scroll-percentage">
            {`Scroll: ${scrollPercentage.toFixed(2)}%`}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavBar;
