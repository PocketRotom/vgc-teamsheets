import './App.css';
import React from 'react';
import MyNavBar from './components/MyNavBar';
import HeaderForm from './components/HeaderForm';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import PokemonForm from './components/PokemonForm';
import Division from './components/Division';
import axios from 'axios';
import { BASE_URL } from './env.js';

function App() {
  const [pokemon, setPokemon] = React.useState([]);
  const [types, setTypes] = React.useState([]);
  const [abilities, setAbilities] = React.useState([]);
  const [items, setItems] = React.useState([]);
  const [moves, setMoves] = React.useState([]);
  React.useEffect(() => {
    //Get Pokemon
    axios.get(`${BASE_URL}/allPokemon`, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      setPokemon(response.data.data);
    });
    //Get Types
    axios.get(`${BASE_URL}/allTypes`, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      setTypes(response.data.data);
    })
    //Get Abilities
    axios.get(`${BASE_URL}/allAbilities`, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      setAbilities(response.data.data);
    })
    //Get Items
    axios.get(`${BASE_URL}/allItems`, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      setItems(response.data.data);
    })
    //Get Moves
    axios.get(`${BASE_URL}/allMoves`, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      setMoves(response.data.data);
    })
  }, []);
  return (
    <>
      <MyNavBar />
      <HeaderForm />
      <Container>
        <Division />
        <Row>
          <PokemonForm pokemonList={pokemon} typesList={types} abilitiesList={abilities} itemsList={items} movesList={moves} />
          <PokemonForm pokemonList={pokemon} typesList={types} abilitiesList={abilities} itemsList={items} movesList={moves} />
        </Row>
        <Division />
        <Row>
          <PokemonForm pokemonList={pokemon} typesList={types} abilitiesList={abilities} itemsList={items} movesList={moves} />
          <PokemonForm pokemonList={pokemon} typesList={types} abilitiesList={abilities} itemsList={items} movesList={moves} />
        </Row>
        <Division />
        <Row>
          <PokemonForm pokemonList={pokemon} typesList={types} abilitiesList={abilities} itemsList={items} movesList={moves} />
          <PokemonForm pokemonList={pokemon} typesList={types} abilitiesList={abilities} itemsList={items} movesList={moves} />
        </Row>
      </Container>
    </>);
}

export default App;
