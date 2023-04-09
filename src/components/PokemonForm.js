import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import PokemonFormComponent from './PokemonFormComponent';
import { useApp } from '../contexts/AppContext';
import translations from '../translations';

export default function PokemonForm(props) {
  const { pokemon: pokemonList, types: typesList, abilities: abilitiesList, items: itemsList, moves: movesList, language } = useApp();
  const [level, setLevel] = React.useState("");
  const [hp, setHP] = React.useState("");
  const [atk, setAtk] = React.useState("");
  const [def, setDef] = React.useState("");
  const [spa, setSpa] = React.useState("");
  const [spd, setSpd] = React.useState("");
  const [spe, setSpe] = React.useState("");

  function changeLevel(e) {
    e.preventDefault();
    setLevel(e.target.value);
  }
  function changeHP(e) {
    e.preventDefault();
    setHP(e.target.value);
  }
  function changeAtk(e) {
    e.preventDefault();
    setAtk(e.target.value);
  }
  function changeDef(e) {
    e.preventDefault();
    setDef(e.target.value);
  }
  function changeSpa(e) {
    e.preventDefault();
    setSpa(e.target.value);
  }
  function changeSpd(e) {
    e.preventDefault();
    setSpd(e.target.value);
  }
  function changeSpe(e) {
    e.preventDefault();
    setSpe(e.target.value);
  }

  return (
    <Col>
      <PokemonFormComponent pokemonList={pokemonList} label={translations.pokemon[language]} type="PokemonName" />
      <Row>
        <Col sm={9}>
          <PokemonFormComponent pokemonList={typesList} label={translations.teraType[language]} type="TeraType" />
        </Col>
        <Col sm={3}>
          <Form.Group className="mb-3" controlId="Level">
            <FloatingLabel
              controlId="floatingInput"
              label="Level"
              className="mb-3">
              <Form.Control type="text" value={level} onChange={changeLevel} />
            </FloatingLabel>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col sm={9}>
          <PokemonFormComponent pokemonList={abilitiesList} label={translations.ability[language]} type="Ability" />
        </Col>
        <Col sm={3}>
          <Form.Group className="mb-3" controlId="HP">
            <FloatingLabel
              controlId="floatingInput"
              label="HP"
              className="mb-3">
              <Form.Control type="text" value={hp} onChange={changeHP} />
            </FloatingLabel>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col sm={9}>
          <PokemonFormComponent pokemonList={itemsList} label={translations.item[language]} type="Item" />
        </Col>
        <Col sm={3}>
          <Form.Group className="mb-3" controlId="atk">
            <FloatingLabel
              controlId="floatingInput"
              label="Atk"
              className="mb-3">
              <Form.Control type="text" value={atk} onChange={changeAtk} />
            </FloatingLabel>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col sm={9}>
          <PokemonFormComponent pokemonList={movesList} label={translations.move[language] + " 1"} type="move1" />
        </Col>
        <Col sm={3}>
          <Form.Group className="mb-3" controlId="def">
            <FloatingLabel
              controlId="floatingInput"
              label="Def"
              className="mb-3">
              <Form.Control type="text" value={def} onChange={changeDef} />
            </FloatingLabel>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col sm={9}>
          <PokemonFormComponent pokemonList={movesList} label={translations.move[language] + " 2"} type="move2" />
        </Col>
        <Col sm={3}>
          <Form.Group className="mb-3" controlId="spa">
            <FloatingLabel
              controlId="floatingInput"
              label="Sp. Atk"
              className="mb-3">
              <Form.Control type="text" value={spa} onChange={changeSpa} />
            </FloatingLabel>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col sm={9}>
          <PokemonFormComponent pokemonList={movesList} label={translations.move[language] + " 3"} type="move3" />
        </Col>
        <Col sm={3}>
          <Form.Group className="mb-3" controlId="spd">
            <FloatingLabel
              controlId="floatingInput"
              label="Sp. Def"
              className="mb-3">
              <Form.Control type="text" value={spd} onChange={changeSpd} />
            </FloatingLabel>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col sm={9}>
          <PokemonFormComponent pokemonList={movesList} label={translations.move[language] + " 4"} type="move4" />
        </Col>
        <Col sm={3}>
          <Form.Group className="mb-3" controlId="spe">
            <FloatingLabel
              controlId="floatingInput"
              label="Speed"
              className="mb-3">
              <Form.Control type="text" value={spe} onChange={changeSpe} />
            </FloatingLabel>
          </Form.Group>
        </Col>
      </Row>
    </Col>);
}