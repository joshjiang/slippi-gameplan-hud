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
          >
            {getOptionsChars()}
          </Form.Control>
          <Form.Label>Notes</Form.Label>
          <Form.Control
            as="textarea"
            rows={10}
            className="mb-4"
            value={note}
            onChange={handleNoteUpdate}
          />
          <Button onClick={handleSubmit}>Save</Button>
        </Form.Group>
      </Form>
    </>
  );
}
