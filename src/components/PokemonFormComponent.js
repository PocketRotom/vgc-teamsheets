import React from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import FilterBox from './FilterBox';

export default function PokemonFormComponent(props) {
  const [value, setValue] = React.useState("");
  const [isFocus, setIsFocus] = React.useState(false);

  function onBlur(e) {
    e.preventDefault();
    if (e.relatedTarget !== null) {
      if (e.relatedTarget.id !== "filter") {
        setIsFocus(false);
      }
    } else {
      setIsFocus(false);
    }
  }

  function changeValue(e) {
    e.preventDefault();
    setValue(e.target.value);
  }

  return (
    <Form.Group className="mb-3" controlId={props.type}>
      <FloatingLabel
        controlId="floatingInput"
        label={props.label}
        className="mb-3">
        <Form.Control onFocus={() => setIsFocus(true)} onBlur={(e) => onBlur(e)} type="text" value={value} onChange={changeValue} />
        {value.length > 1 && isFocus ? <FilterBox list={props.pokemonList} action={setValue} value={value} focusOut={setIsFocus} /> : ""}
      </FloatingLabel>
    </Form.Group>);
}