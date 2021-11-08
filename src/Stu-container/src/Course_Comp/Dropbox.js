import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

function Dropbox() {
    return (
        <Container fluid>
            <Row>
                <Col style={{background: '#d7e5f0', boxShadow: '1px 1px 3px'}}>
                    <h4>File Item</h4>
                    <p>Assignment</p>
                    <p>HW3 and HW4</p>
                </Col>
                <Col>
                    <h4>Completion Status</h4>
                    <p>1 Submission</p>
                </Col>
                <Col>
                    <h4>Grade</h4>
                    <p>90 %</p>
                </Col>
                <Col>
                    <h4>Evaluation</h4>
                    <p>N/A</p>
                </Col>
                <Col>
                    <h4>Submission</h4>
                    {/* Upload files here button */}
                    <p>Files pending: 0</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Dropbox;