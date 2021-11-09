import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

function Grade(props) {
    return (
        <Container fluid>
            <Row>
                <Col style={{background: '#d7e5f0', boxShadow: '1px 1px 3px'}}>
                    <h4>Grade Item</h4>
                    <p>{props.info.type}</p>
                    <p>{props.info.title}</p>
                </Col>
                <Col>
                    <h4>Weight</h4>
                    <p>{props.info.weight}</p>
                </Col>
                <Col>
                    <h4>Grade</h4>
                    <p>{props.info.grade}</p>
                </Col>
                <Col>
                    <h4>Feedback</h4>
                    <p>{props.info.feedback}</p>
                </Col>
            </Row>
        </Container>

    );
}

export default Grade;