import { ipcRenderer } from "electron";
import { useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useHistory, useLocation, withRouter } from "react-router";
import plans from "../db/plans.json";

export function PlanSingle(props: any) {
  const location: any = useLocation();
  const history = useHistory();

  useEffect(() => {
    ipcRenderer.on("game-end", function (evt, message) {
      try {
        history.push({
          pathname: `/`,
        });
      } catch (Error) {
        console.log("PlanSingle broken : " + Error);
      }
    });
  });

  console.log(plans[location.state.character].plan);
  if (typeof plans[location.state.character].plan === "undefined") {
    return (
      <Row>
        <Col md="12" className="pt-1 pb-1">
          <h3>{location.state.character}</h3>
          <hr></hr>
          <Button className="bg-warning btn-block">No plan yet</Button>
        </Col>
      </Row>
    );
  }
  return (
    <div>
      <Row>
        <Col md="12" className="pt-1 pb-1">
          <h3>{location.state.character}</h3>
          <hr></hr>
        </Col>
      </Row>
      <Row>
        <Col md="12">
          <p>{plans[location.state.character].plan}</p>
        </Col>
      </Row>
    </div>
  );
}
export default withRouter(PlanSingle);
