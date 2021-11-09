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
                    <h3>{props.info.instructor}</h3>
                    <p>{props.info.date}</p>
                </Col>
            </Row>
        </Container>

    );
}

export default Lecture;