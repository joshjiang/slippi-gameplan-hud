import { Button, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import characters from "../config/characters.json"

export function PlanList() {
    return (
        <>
            <Row>
                <Col md="12" className="p-3 font-weight-bold">
                    <Row>
                        <Col xs="12" className="mb-2">
                            <Link to="/new_plan"><Button variant="success">+ Create Plan</Button></Link>
                        </Col>
                        <Col xs="4" >Character</Col>
                        <Col xs="4" >Updated</Col>

                    </Row>
                </Col>
                <Col md="12">
                    {characterRows()}
                </Col>
            </Row>
        </>
    )
}

function characterRows() {
    const rows = []  as any
    for (const i in characters.Characters) {
        const character = characters.Characters[i]
        rows.push(
            <Link to={`/${character.name}/plan`} key={character.name} >
                <Row className="border-bottom align-center bg-light p-2" >
                    <Col xs="4">
                        {character.name}
                    </Col>
                    <Col xs="4">
                        {character.updated}
                    </Col>
                </Row>
            </Link>
        )
    }
    return rows
}
