import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <Row >
      <Col md="12" className="mt-5 pt-2 bg-light">
        <h2><Link to="/">Gameplans</Link></h2>
        <hr></hr>
      </Col>
    </Row>
  )
}