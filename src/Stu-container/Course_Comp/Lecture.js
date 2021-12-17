import React from 'react';
import {Container, Button, Row, Col} from 'react-bootstrap';
import FileDown from '../Handling/FileDownload';

function Lecture(props) {
    return (
        <>
        <Container className="lecture" fluid>
            <Row>
                <Col>
                    <h3>{props.info.document_name}</h3>
                </Col>
                <Col>
                    <Button variant="outline-primary"><FileDown name={sessionStorage.getItem(props.info.filename)}/>Download</Button>
                </Col>
            </Row>
        </Container>
        </>

    );
}

export default Lecture;