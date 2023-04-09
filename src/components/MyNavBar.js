import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import logo from '../logo.svg';
import { useApp } from '../contexts/AppContext';
import MenuItems from './MenuItems';

export default function MyNavBar() {
  const { language } = useApp();

  const [expanded, setExpanded] = React.useState(false);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" expanded={expanded}>
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          VGC Teamsheets Generator
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" onClick={() => setExpanded(!expanded)} />
        <Navbar.Collapse id="navbarScroll" className="justify-content-evenly">
          <MenuItems language="English" disabled={language == "English"} onClose={setExpanded} />
          <MenuItems language="French" disabled={language == "French"} onClose={setExpanded} />
          <MenuItems language="Italian" disabled={language == "Italian"} onClose={setExpanded} />
          <MenuItems language="German" disabled={language == "German"} onClose={setExpanded} />
          <MenuItems language="Spanish" disabled={language == "Spanish"} onClose={setExpanded} />
          <MenuItems language="Japanese" disabled={language == "Japanese"} onClose={setExpanded} />
          {/*Korean Disabled for now due to BD data being incorrect*/}
          <MenuItems language="Korean" disabled={true} onClose={setExpanded} />
          <MenuItems language="Traditional Chinese" disabled={language == "Traditional Chinese"} onClose={setExpanded} />
          <MenuItems language="Simplified Chinese" disabled={language == "Simplified Chinese"} onClose={setExpanded} />
        </Navbar.Collapse>
      </Container>
    </Navbar>);
}