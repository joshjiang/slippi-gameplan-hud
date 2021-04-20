import { ipcRenderer } from "electron";
import { useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import plans from "../db/plans.json";

export function PlanList() {
  const history = useHistory();

  useEffect(() => {
    console.log("use effect yes!")
    ipcRenderer.on('asynchronous-message', function (evt, message) {
      console.log("!!! the message is :" + message.character)
      try {
        console.log(history)
        history.push({ pathname: `/${message.character}/plan`, state: { character: message.character } })
      }
      catch (Error) {
        console.log("shit broke in planlist : " + Error)
      }
    });
  })

  return (
    <>
      <Row>
        <Col md="12" className="p-3 font-weight-bold">
          <Row>
            <Col xs="12" className="mb-2">
              <Link to="/new_plan">
                <Button variant="success">+ Create Plan</Button>
              </Link>
            </Col>
            <Col xs="4">Character</Col>
            <Col xs="4">Updated</Col>
          </Row>
        </Col>
        <Col md="12">{characterRows()}</Col>
      </Row>
    </>
  );
}

function characterRows() {
  const rows = [] as any;
  for (const character in plans) {
    rows.push(
      <Link
        to={{ pathname: `/${character.toUpperCase()}/plan`, state: { character: character } }}
        key={character}
      >
        <Row className="border-bottom align-center bg-light p-2">
          <Col xs="4">{character}</Col>
          <Col xs="4">{plans[character].updated}</Col>
        </Row>
      </Link>
    );
  }
  return rows;
}
