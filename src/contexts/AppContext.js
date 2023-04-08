import React, { createContext, useContext } from 'react';
import axios from 'axios';
import { BASE_URL } from '../env';

const AppContext = createContext();

const AppProvider = (props) => {

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

  const [language, setLanguage] = React.useState("English");

  React.useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <AppContext.Provider value={{
      pokemon,
      types,
      abilities,
      items,
      moves,

      language,
      setLanguage
    }}>
      <>{props.children}</>
    </AppContext.Provider>
  );
}

const useApp = () => {
  return useContext(AppContext);
}

export { AppProvider, useApp }