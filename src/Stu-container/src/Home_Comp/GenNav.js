import React from 'react';
import { Container, Col, Nav} from 'react-bootstrap';

function GenNav(props) {
    return (
        <Container className="options" bg="light" variant="light" fluid>
            <Col>
                <Nav.Link href={props.studentNav.dest1path}>{props.studentNav.dest1}</Nav.Link>
            </Col>
            <Col>
                <Nav.Link href={props.studentNav.dest2path}>{props.studentNav.dest2}</Nav.Link>
            </Col>
            <Col>
                <Nav.Link href={props.studentNav.dest3path}>{props.studentNav.dest3}</Nav.Link>
            </Col>
            <Col>
                <Nav.Link href={props.studentNav.dest4path}>{props.studentNav.dest4}</Nav.Link>
            </Col>
        </Container>
    );
}

export default GenNav;