import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

function Grade() {
    return (
        <Container fluid>
            <Row>
                <Col style={{background: '#d7e5f0', boxShadow: '1px 1px 3px'}}>
                    <h4>Grade Item</h4>
                    <p>Assignment</p>
                    <p>HW3 and HW4</p>
                </Col>
                <Col>
                    <h4>Weight</h4>
                    <p>18/20</p>
                </Col>
                <Col>
                    <h4>Grade</h4>
                    <p>90 %</p>
                </Col>
                <Col>
                    <h4>Feedback</h4>
                    <p>Teacher feedback and test results and further information here.</p>
                </Col>
            </Row>
        </Container>

    );
}

export default Grade;