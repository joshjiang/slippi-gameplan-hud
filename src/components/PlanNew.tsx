import { useState } from "react";
import { ipcRenderer } from "electron";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import c from "../db/characters.json";
import { SimplePlanFactory } from "../lib/simple-plan-factory";

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
    const plan = new SimplePlanFactory().createSimplePlan(
      character,
      note,
      "Description"
    );

    alert("created plan for " + character);
    history.push({
      pathname: `/${character}/plan`,
      state: {
        id: plan.id,
        notes: plan.notes,
        character: plan.character,
      },
    });
    console.log(ipcRenderer.sendSync("json-file", note, character));
  }
  function getOptionsChars() {
    const chars: JSX.Element[] = [];
    c.Characters.forEach(function (char) {
      chars.push(<option key={char.name}>{char.name}</option>);
    });
    return chars;
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
