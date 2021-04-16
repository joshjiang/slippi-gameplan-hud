import { Col, Row } from "react-bootstrap";
import { useLocation } from "react-router";


export function PlanSingle(props: any) {
    const location: any = useLocation()
    if (location.state) {
        return (
            <div>
                <Row>
                    <Col md="12" className="border border-primary pt-1 pb-1">
                        <h3>{location.state.character}</h3>
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <h4>Notes</h4>
                        <p>
                            {location.state.notes}
                        </p>
                    </Col>
                </Row>
            </div>
        )
    }
    return (
        <h2>No plan yet!</h2>
    )
}

