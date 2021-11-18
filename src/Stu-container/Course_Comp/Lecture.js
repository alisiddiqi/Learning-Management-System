import React from 'react';
import {Container, Button, Row, Col} from 'react-bootstrap';
import FileDown from '../Handling/FileDownload';

function Lecture(props) {
    return (
        <Container className="lecture" fluid>
            <Row>
                <Col>
                    <h3>{props.info.name}</h3>
                    <Button variant="outline-primary"><FileDown name="Download"/></Button>
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