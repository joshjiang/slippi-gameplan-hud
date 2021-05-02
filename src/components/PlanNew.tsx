import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { characters } from "@slippi/slippi-js";
import useForm from './forms/planNewHooks'
import validate from "./forms/validate";

export function PlanNew() {
  const { inputs, handleInputChange, handleSubmit, errors } = useForm({ note: "", character: "Fox" }, validate);

  function getOptionsChars() {
    const charactersOptions: JSX.Element[] = [];
    characters.getAllCharacters().forEach(function (character) {
      charactersOptions.push(
        <option key={character.name}>{character.name}</option>
      );
    });
    return charactersOptions;
  }

  return (
    <>
      <h4>New Plan</h4>
      <Form>
        <Form.Group>
          <Form.Label>Character</Form.Label>
          <Form.Control
            as="select"
            defaultValue={inputs.character}
            onChange={handleInputChange}
            className="mb-2"
            required={true}
            name="character"
          >
            {getOptionsChars()}
          </Form.Control>
          <PlanPercentBased character={inputs.character} />
          <Form.Label>Notes</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            className="mb-4"
            defaultValue={inputs.note}
            onChange={handleInputChange}
            required={true}
            name="note"
          />
          {errors.email && <p>errors.email</p>}
          <Button className="bg-success" onClick={handleSubmit}>Save</Button>
        </Form.Group>
      </Form>
    </>
  );
}

function PlanPercentBased(props) {
  const [noteForm, setNoteForm] = useState(<></>);

  function addPercentPlan(event: any) {
    setNoteForm(
      <>
        <Form.Label>Percent-Based Plan Notes</Form.Label>
        <Row className="border m-1">
          <Col xs="5">Notify me when {props.character}'s percent</Col>
          <Col xs="3">
            <Form.Control
              as="select" className="p-1">
              <option>{`>`}</option>
              <option>{`<`}</option>
            </Form.Control>
          </Col>
          <Col xs="3" >
            <Form.Control
              as="input"
            ></Form.Control>
          </Col>
        </Row>
        <Form.Control
          as="textarea"
          rows={3}
          className="mb-4"
        />
      </>
    )
  }

  return <>
    <Button onClick={addPercentPlan} className="btn-sm" >+ Add Percent-Based Notifaction</Button>
    <br />
    {noteForm}
  </>
}