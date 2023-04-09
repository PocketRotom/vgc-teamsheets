import './App.css';
import React from 'react';
import MyNavBar from './components/MyNavBar';
import HeaderForm from './components/HeaderForm';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import PokemonForm from './components/PokemonForm';
import Division from './components/Division';

function App() {

  return (
    <>
      <MyNavBar />
      <HeaderForm />
      <Container>
        <Division />
        <Row xs={1} md={2}>
          <PokemonForm />
          <Division className="d-block d-md-none" />
          <PokemonForm />
        </Row>
        <Division />
        <Row xs={1} md={2}>
          <PokemonForm />
          <Division className="d-block d-md-none" />
          <PokemonForm />
        </Row>
        <Division />
        <Row xs={1} md={2}>
          <PokemonForm />
          <Division className="d-block d-md-none" />
          <PokemonForm />
        </Row>
      </Container>
    </>);
}

export default App;
