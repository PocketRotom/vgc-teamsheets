import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

export default function HeaderForm() {
  const [playerName, setPlayerName] = React.useState("");
  const [trainerName, setTrainerName] = React.useState("");
  const [teamName, setTeamName] = React.useState("");
  const [switchProfile, setSwitchProfile] = React.useState("");
  const [ageDivision, setAgeDivision] = React.useState("");
  const [playerID, setPlayerID] = React.useState("");
  const [dateOfBirth, setDateOfBirth] = React.useState("");

  function changeName(e) {
    e.preventDefault();
    setPlayerName(e.target.value);
  }
  function changeTrainerName(e) {
    e.preventDefault();
    setTrainerName(e.target.value);
  }
  function changeTeamName(e) {
    e.preventDefault();
    setTeamName(e.target.value);
  }
  function changeSwitchProfile(e) {
    e.preventDefault();
    setSwitchProfile(e.target.value);
  }
  function changeAgeDivision(e) {
    e.preventDefault();
    setAgeDivision(e.target.id);
  }
  function changePlayerID(e) {
    e.preventDefault();
    setPlayerID(e.target.value);
  }
  return (
    <Container>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="PlayerName">
            <FloatingLabel
              controlId="floatingInput"
              label="Player Name"
              className="mb-3">
              <Form.Control type="text" value={playerName} onChange={changeName} />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3" controlId="TrainerName">
            <FloatingLabel
              controlId="floatingInput"
              label="Trainer Name"
              className="mb-3">
              <Form.Control type="text" value={trainerName} onChange={changeTrainerName} />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3" controlId="TeamNumber">
            <FloatingLabel
              controlId="floatingInput"
              label="Battle Team Number/Name"
              className="mb-3">
              <Form.Control type="text" value={teamName} onChange={changeTeamName} />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3" controlId="SwitchProfile">
            <FloatingLabel
              controlId="floatingInput"
              label="Switch Profile Name"
              className="mb-3">
              <Form.Control type="text" value={switchProfile} onChange={changeSwitchProfile} />
            </FloatingLabel>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="AgeDivision">
            <Form.Label className="me-3">Age Division: </Form.Label>
            <Form.Check
              inline
              label="Junior"
              name="ageDivision"
              type="radio"
              id="Junior"
              className="AgeDivision"
              onChange={changeAgeDivision}
            />
            <Form.Check
              inline
              label="Senior"
              name="ageDivision"
              type="radio"
              id="Senior"
              className="AgeDivision"
              onChange={changeAgeDivision}
            />
            <Form.Check
              inline
              label="Master"
              name="ageDivision"
              type="radio"
              id="Master"
              className="AgeDivision"
              onChange={changeAgeDivision}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="PlayerID">
            <FloatingLabel
              controlId="floatingInput"
              label="Player ID"
              className="mb-3">
              <Form.Control type="text" value={playerID} onChange={changePlayerID} />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3" controlId="dateOfBirth">
            <FloatingLabel
              controlId="floatingInput"
              label="Date Of Birth"
              className="mb-3">
              <Form.Control
                type="date"
                name="duedate"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
              />
            </FloatingLabel>
          </Form.Group>
        </Col>
      </Row>
    </Container>);
}