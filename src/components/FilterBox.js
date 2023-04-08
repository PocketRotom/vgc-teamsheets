import React from 'react';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import { useApp } from '../contexts/AppContext';

export default function FilterBox(props) {

  const { language } = useApp();

  return (
    <Container>
      <ListGroup>
        {props.list.map((item) => {
          if (item[language].toLowerCase().startsWith(props.value.toLowerCase())) {
            return (<ListGroup.Item id="filter" key={item[language]} action onClick={() => {
              props.focusOut(false);
              props.action(item[language])
            }
            }>
              {item[language]}
            </ListGroup.Item>)
          }
        })}
      </ListGroup>
    </Container>);
}