import './App.css';
import React from 'react';
import MyNavBar from './components/MyNavBar';
import HeaderForm from './components/HeaderForm';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import PokemonForm from './components/PokemonForm';
import Division from './components/Division';
import { useApp } from './contexts/AppContext';

function App() {


  const { pokemon, types, abilities, items, moves } = useApp();
  return (
    <>
      <MyNavBar />
      <HeaderForm />
      <Container>
        <Division />
        <Row>
          <PokemonForm />
          <PokemonForm />
        </Row>
        <Division />
        <Row>
          <PokemonForm />
          <PokemonForm />
        </Row>
        <Division />
        <Row>
          <PokemonForm />
          <PokemonForm />
        </Row>
      </Container>
    </>);
}

export default App;
