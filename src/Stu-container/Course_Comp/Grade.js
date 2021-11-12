import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

function Grade(props) {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <p>{props.info.type}</p>
                    <p>{props.info.title}</p>
                </Col>
                <Col>
                    <p>{props.info.weight}</p>
                </Col>
                <Col>
                    <p>{props.info.grade}</p>
                </Col>
                <Col>
                    <p>{props.info.feedback}</p>
                </Col>
            </Row>
        </Container>

    );
}

export default Grade;