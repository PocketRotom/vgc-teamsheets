import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import FilterBox from './FilterBox';

export default function PokemonForm(props) {
  const [pokemonName, setPokemonName] = React.useState("");
  const [teraType, setTeraType] = React.useState("");
  const [level, setLevel] = React.useState("");
  const [ability, setAbility] = React.useState("");
  const [hp, setHP] = React.useState("");
  const [item, setItem] = React.useState("");
  const [atk, setAtk] = React.useState("");
  const [move1, setMove1] = React.useState("");
  const [def, setDef] = React.useState("");
  const [move2, setMove2] = React.useState("");
  const [spa, setSpa] = React.useState("");
  const [move3, setMove3] = React.useState("");
  const [spd, setSpd] = React.useState("");
  const [move4, setMove4] = React.useState("");
  const [spe, setSpe] = React.useState("");

  function changePokemonName(e) {
    e.preventDefault();
    setPokemonName(e.target.value);
  }
  function changeTeraType(e) {
    e.preventDefault();
    setTeraType(e.target.value);
  }
  function changeLevel(e) {
    e.preventDefault();
    setLevel(e.target.value);
  }
  function changeAbility(e) {
    e.preventDefault();
    setAbility(e.target.value);
  }
  function changeHP(e) {
    e.preventDefault();
    setHP(e.target.value);
  }
  function changeItem(e) {
    e.preventDefault();
    setItem(e.target.value);
  }
  function changeAtk(e) {
    e.preventDefault();
    setAtk(e.target.value);
  }
  function changeMove1(e) {
    e.preventDefault();
    setMove1(e.target.value);
  }
  function changeDef(e) {
    e.preventDefault();
    setDef(e.target.value);
  }
  function changeMove2(e) {
    e.preventDefault();
    setMove2(e.target.value);
  }
  function changeSpa(e) {
    e.preventDefault();
    setSpa(e.target.value);
  }
  function changeMove3(e) {
    e.preventDefault();
    setMove3(e.target.value);
  }
  function changeSpd(e) {
    e.preventDefault();
    setSpd(e.target.value);
  }
  function changeMove4(e) {
    e.preventDefault();
    setMove4(e.target.value);
  }
  function changeSpe(e) {
    e.preventDefault();
    setSpe(e.target.value);
  }
  const [isPokemonNameFocus, setIsPokemonNameFocus] = React.useState(false);
  function onBlurPokemon(e) {
    e.preventDefault();
    if (e.relatedTarget !== null) {
      if (e.relatedTarget.id !== "filter") {
        setIsPokemonNameFocus(false);
      }
    } else {
      setIsPokemonNameFocus(false);
    }
  }

  const [isTeraTypeFocus, setIsTeraTypeFocus] = React.useState(false);
  function onBlurTeraType(e) {
    e.preventDefault();
    if (e.relatedTarget !== null) {
      if (e.relatedTarget.id !== "filter") {
        setIsTeraTypeFocus(false);
      }
    } else {
      setIsTeraTypeFocus(false);
    }
  }

  const [isAbilityFocus, setIsAbilityFocus] = React.useState(false);
  function onBlurAbility(e) {
    e.preventDefault();
    if (e.relatedTarget !== null) {
      if (e.relatedTarget.id !== "filter") {
        setIsAbilityFocus(false);
      }
    } else {
      setIsAbilityFocus(false);
    }
  }

  const [isItemFocus, setIsItemFocus] = React.useState(false);
  function onBlurItem(e) {
    e.preventDefault();
    if (e.relatedTarget !== null) {
      if (e.relatedTarget.id !== "filter") {
        setIsItemFocus(false);
      }
    } else {
      setIsItemFocus(false);
    }
  }
  const [isMove1Focus, setIsMove1Focus] = React.useState(false);
  function onBlurMove1(e) {
    e.preventDefault();
    if (e.relatedTarget !== null) {
      if (e.relatedTarget.id !== "filter") {
        setIsMove1Focus(false);
      }
    } else {
      setIsMove1Focus(false);
    }
  }
  const [isMove2Focus, setIsMove2Focus] = React.useState(false);
  function onBlurMove2(e) {
    e.preventDefault();
    if (e.relatedTarget !== null) {
      if (e.relatedTarget.id !== "filter") {
        setIsMove2Focus(false);
      }
    } else {
      setIsMove2Focus(false);
    }
  }
  const [isMove3Focus, setIsMove3Focus] = React.useState(false);
  function onBlurMove3(e) {
    e.preventDefault();
    if (e.relatedTarget !== null) {
      if (e.relatedTarget.id !== "filter") {
        setIsMove3Focus(false);
      }
    } else {
      setIsMove3Focus(false);
    }
  }
  const [isMove4Focus, setIsMove4Focus] = React.useState(false);
  function onBlurMove4(e) {
    e.preventDefault();
    if (e.relatedTarget !== null) {
      if (e.relatedTarget.id !== "filter") {
        setIsMove4Focus(false);
      }
    } else {
      setIsMove4Focus(false);
    }
  }

  return (
    <Col>
      <Form.Group className="mb-3" controlId="PokemonName">
        <FloatingLabel
          controlId="floatingInput"
          label="Pokémon"
          className="mb-3">
          <Form.Control onFocus={() => setIsPokemonNameFocus(true)} onBlur={(e) => onBlurPokemon(e)} type="text" value={pokemonName} onChange={changePokemonName} />
          {pokemonName.length > 1 && isPokemonNameFocus ? <FilterBox list={props.pokemonList} action={setPokemonName} value={pokemonName} focusOut={setIsPokemonNameFocus} /> : ""}
        </FloatingLabel>
      </Form.Group>
      <Row>
        <Col sm={10}>
          <Form.Group className="mb-3" controlId="TeraType">
            <FloatingLabel
              controlId="floatingInput"
              label="TeraType"
              className="mb-3">
              <Form.Control onFocus={() => setIsTeraTypeFocus(true)} onBlur={(e) => onBlurTeraType(e)} type="text" value={teraType} onChange={changeTeraType} />
              {teraType.length > 1 && isTeraTypeFocus ? <FilterBox list={props.typesList} action={setTeraType} value={teraType} focusOut={setIsTeraTypeFocus} /> : ""}
            </FloatingLabel>
          </Form.Group>
        </Col>
        <Col sm={2}>
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
        <Col sm={10}>
          <Form.Group className="mb-3" controlId="ability">
            <FloatingLabel
              controlId="floatingInput"
              label="Ability"
              className="mb-3">
              <Form.Control onFocus={() => setIsAbilityFocus(true)} onBlur={(e) => onBlurAbility(e)} type="text" value={ability} onChange={changeAbility} />
              {ability.length > 1 && isAbilityFocus ? <FilterBox list={props.abilitiesList} action={setAbility} value={ability} focusOut={setIsAbilityFocus} /> : ""}
            </FloatingLabel>
          </Form.Group>
        </Col>
        <Col sm={2}>
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
        <Col sm={10}>
          <Form.Group className="mb-3" controlId="item">
            <FloatingLabel
              controlId="floatingInput"
              label="Held Item"
              className="mb-3">
              <Form.Control onFocus={() => setIsItemFocus(true)} onBlur={(e) => onBlurItem(e)} type="text" value={item} onChange={changeItem} />
              {item.length > 1 && isItemFocus ? <FilterBox list={props.itemsList} action={setItem} value={item} focusOut={setIsItemFocus} /> : ""}
            </FloatingLabel>
          </Form.Group>
        </Col>
        <Col sm={2}>
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
        <Col sm={10}>
          <Form.Group className="mb-3" controlId="move1">
            <FloatingLabel
              controlId="floatingInput"
              label="Move 1"
              className="mb-3">
              <Form.Control onFocus={() => setIsMove1Focus(true)} onBlur={(e) => onBlurMove1(e)} type="text" value={move1} onChange={changeMove1} />
              {move1.length > 1 && isMove1Focus ? <FilterBox list={props.movesList} action={setMove1} value={move1} focusOut={setIsMove1Focus} /> : ""}
            </FloatingLabel>
          </Form.Group>
        </Col>
        <Col sm={2}>
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
        <Col sm={10}>
          <Form.Group className="mb-3" controlId="move2">
            <FloatingLabel
              controlId="floatingInput"
              label="Move 2"
              className="mb-3">
              <Form.Control onFocus={() => setIsMove2Focus(true)} onBlur={(e) => onBlurMove2(e)} type="text" value={move2} onChange={changeMove2} />
              {move2.length > 1 && isMove2Focus ? <FilterBox list={props.movesList} action={setMove2} value={move2} focusOut={setIsMove2Focus} /> : ""}
            </FloatingLabel>
          </Form.Group>
        </Col>
        <Col sm={2}>
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
        <Col sm={10}>
          <Form.Group className="mb-3" controlId="move3">
            <FloatingLabel
              controlId="floatingInput"
              label="Move 3"
              className="mb-3">
              <Form.Control onFocus={() => setIsMove3Focus(true)} onBlur={(e) => onBlurMove3(e)} type="text" value={move3} onChange={changeMove3} />
              {move3.length > 1 && isMove3Focus ? <FilterBox list={props.movesList} action={setMove3} value={move3} focusOut={setIsMove3Focus} /> : ""}
            </FloatingLabel>
          </Form.Group>
        </Col>
        <Col sm={2}>
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
        <Col sm={10}>
          <Form.Group className="mb-3" controlId="move4">
            <FloatingLabel
              controlId="floatingInput"
              label="Move 4"
              className="mb-3">
              <Form.Control onFocus={() => setIsMove4Focus(true)} onBlur={(e) => onBlurMove4(e)} type="text" value={move4} onChange={changeMove4} />
              {move4.length > 1 && isMove4Focus ? <FilterBox list={props.movesList} action={setMove4} value={move4} focusOut={setIsMove4Focus} /> : ""}
            </FloatingLabel>
          </Form.Group>
        </Col>
        <Col sm={2}>
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