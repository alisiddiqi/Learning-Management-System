import React from 'react';
import {Container, Button, Row, Col} from 'react-bootstrap';
import FileDown from '../Handling/FileDownload';

function Lecture(props) {
    return (
        <>
        <Container className="lecture" fluid>
            <Row>
                <Col>
                    <h3>{props.info.name}</h3>
                    <p>{props.info.instructor}</p>
                </Col>
                <Col>
                    <Button variant="outline-primary"><FileDown name={props.info.filename}/> Download</Button>
                </Col>
            </Row>
        </Container>
        </>

    );
}

export default Lecture;