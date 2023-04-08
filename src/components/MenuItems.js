import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { useApp } from '../contexts/AppContext';

export default function MenuItems(props) {
  const { setLanguage } = useApp();

  function changeLanguageOnClick() {
    setLanguage(props.language)
  }

  return (<Nav.Link style={{ color: "white" }} href="#" onClick={() => !props.disabled ? changeLanguageOnClick() : ""} disabled={props.disabled}>{props.language}</Nav.Link>);
}