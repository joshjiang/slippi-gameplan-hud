import { ipcRenderer } from "electron";
import { useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { characters } from "@slippi/slippi-js";
import plans from "../db/plans.json";

export function PlanList() {
  const history = useHistory();

  useEffect(() => {
    ipcRenderer.on("game-start", function (evt, message) {
      try {
        history.push({
          pathname: `/${message.character}/plan`,
          state: { character: message.character },
        });
      } catch (Error) {
        console.log("planlist broken : " + Error);
      }
    });
  });

  return (
    <>
      <Row>
        <Col md="12" className="p-3 font-weight-bold">
          <Row>
            <Col xs="12" className="mb-2">
              <Link to="/new_plan">
                <Button variant="success" className="btn-block">
                  + Create Plan
                </Button>
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
  const rows: JSX.Element[] = [];
  characters.getAllCharacters().forEach(function (character) {
    rows.push(
      <Link
        to={{
          pathname: `/${character.name}/plan`,
          state: { character: character.name },
        }}
        key={character.id}
      >
        <Row className="border-bottom align-center bg-light p-2">
          <Col xs="4">{character.name}</Col>
          <Col xs="4">{plans[character.name].updated}</Col>
        </Row>
      </Link>
    );
  });

  return rows;
}
