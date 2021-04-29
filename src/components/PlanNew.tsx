import { useState } from "react";
import { ipcRenderer } from "electron";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import c from "../db/characters.json";
import { characters } from "@slippi/slippi-js";

export function PlanNew() {
  const [note, setNote] = useState("");
  const [character, setCharacter] = useState("Fox");
  const history = useHistory();

  function handleNoteUpdate(event: any) {
    setNote(event.target.value);
  }
  function handleCharacterUpdate(event: any) {
    setCharacter(event.target.value);
  }
  function handleSubmit() {
    ipcRenderer.send("json-file", note, character);

    alert("Created plan for " + character);
    history.push({
      pathname: `/${character}/plan`,
      state: {
        notes: note,
        character: character,
      },
    });
  }

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
            defaultValue={character}
            onChange={handleCharacterUpdate}
            className="mb-2"
          >
            {getOptionsChars()}
          </Form.Control>
          <PlanPercentBased />
          <Form.Label>Notes</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            className="mb-4"
            value={note}
            onChange={handleNoteUpdate}
          />
          <Button className="bg-success" onClick={handleSubmit}>Save</Button>
        </Form.Group>
      </Form>
    </>
  );
}

function PlanPercentBased() {
  const [noteForm, setNoteForm] = useState(<></>);

  function addPercentPlan(event: any) {
    setNoteForm(
      <>
        <Form.Label>Percent-Based Plan Notes</Form.Label>
        <Form.Control
          as="select" >
          <option>Is Jigglypuff at Fox upsmash kill percent?</option>
          <option>Custom plan</option>
        </Form.Control>
        <Form.Control
          as="textarea"
          rows={3}
          className="mb-4"
        />
      </>
    )
  }

  return <>
    <Button onClick={addPercentPlan} className="btn-sm" >+ Create Percent-Based Plan</Button>
    <br />
    {noteForm}
  </>
}