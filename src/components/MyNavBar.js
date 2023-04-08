import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import logo from '../logo.svg';
import { useApp } from '../contexts/AppContext';
import MenuItems from './MenuItems';

export default function MyNavBar() {
  const { language } = useApp();

  function teste(e) {
    console.log(e);
    e.preventDefault();
  }

  return (
    <Navbar bg="dark" variant="dark">
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
        <MenuItems language="English" disabled={language == "English"} />
        <MenuItems language="French" disabled={language == "French"} />
        <MenuItems language="Italian" disabled={language == "Italian"} />
        <MenuItems language="German" disabled={language == "German"} />
        <MenuItems language="Spanish" disabled={language == "Spanish"} />
        <MenuItems language="Japanese" disabled={language == "Japanese"} />
        {/*Korean Disabled for now due to BD data being incorrect*/}
        <MenuItems language="Korean" disabled={true} />
        <MenuItems language="Traditional Chinese" disabled={language == "Traditional Chinese"} />
        <MenuItems language="Simplified Chinese" disabled={language == "Simplified Chinese"} />
      </Container>
    </Navbar>);
}