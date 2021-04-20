import { Col, Row } from "react-bootstrap";
import { useLocation, withRouter } from "react-router";
import plans from "../db/plans.json";

export function PlanSingle(props: any) {
  const location: any = useLocation();
  console.log("location state ---" + location.state)
  if (location.state.character && plans[location.state.character].plan) {
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
            <h4>Notes</h4>
            <p>{plans[location.state.character].plan}</p>
          </Col>
        </Row>
      </div>
    );
  }
  return <h2>No plan yet!</h2>;
}
export default withRouter(PlanSingle)