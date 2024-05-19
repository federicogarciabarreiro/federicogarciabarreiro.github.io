import { useState, useEffect } from 'react';
import { Navbar, Container } from 'react-bootstrap';

import "../styles/CustomTitleBar.css";

{/*CustomTitleBar recibe title, muestra un titulo simple que se oculta al deplazarnos.*/}

function CustomTitleBar({ title }) {
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

  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className={visible ? 'custom-navbar visible' : 'custom-navbar hidden'}>
      <Container className='custom-title-bar-container'>
        <Navbar.Brand className='custom-title-bar-title'>{title}</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default CustomTitleBar;
