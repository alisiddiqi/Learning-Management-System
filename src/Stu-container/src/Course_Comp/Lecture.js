import React from 'react';
import {Container, Button, Row, Col} from 'react-bootstrap';

function Lecture(props) {
    return (
        <Container className="lecture" fluid>
            <Row>
                <Col>
                    <h1>Lecture</h1>
                    <Button variant="outline-primary">View</Button>
                </Col>
                <Col>
                    <h3>Instructor(s)</h3>
                    <p>Date and Time of lecture</p>
                </Col>
            </Row>
        </Container>

    );
}

export default Lecture;