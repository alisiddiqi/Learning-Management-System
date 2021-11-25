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
                    <Button variant="outline-primary"><FileDown name="Download"/></Button>
                    <Button variant="outline-primary"><FileDown name="Delete"/></Button>
                </Col>
                <Col>
                    <h3>{props.info.instructor}</h3>
                    <p>{props.info.date}</p>
                </Col>
            </Row>
        </Container>
        {/* <Container>
        <Button variant="outline-primary"><FileDown name="Add Lecture"/></Button>
        </Container> */}
        </>

    );
}

export default Lecture;