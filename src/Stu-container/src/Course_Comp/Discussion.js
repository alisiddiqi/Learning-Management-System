import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

function Discussion() {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <h4>Title</h4>
                    <p>A bunch of words about a paragraph or sentences which make up the content section of the discussion post. All goes here.</p>
                </Col>
                <Col style={{background: '#d7e5f0', boxShadow: '1px 1px 3px'}}>
                    <h4>Kundai Dziwa</h4>
                    <p>Role: Student</p>
                </Col>
            </Row>
        </Container>

    );
}

export default Discussion;