import React from 'react';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';

export default function FilterBox(props) {
  const alertClicked = () => {
    alert('You clicked the third ListGroupItem');
  };

  const dummyLanguage = "English";
  console.log(props)

  return (
    <Container>
      <ListGroup>
        {props.list.map((item) => {
          if (item[dummyLanguage].toLowerCase().startsWith(props.value.toLowerCase())) {
            return (<ListGroup.Item id="filter" key={item[dummyLanguage]} action onClick={() => {
              props.focusOut(false);
              props.action(item[dummyLanguage])
            }
            }>
              {item[dummyLanguage]}
            </ListGroup.Item>)
          }
        })}
      </ListGroup>
    </Container>);
}