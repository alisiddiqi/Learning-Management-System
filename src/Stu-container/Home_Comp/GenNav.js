import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

function GenNav(props) {
    return (
        <Navbar className="options" collapseOnSelect expand="sm">
            <Container bg="light" variant="light" fluid>
                <Navbar.Brand href={props.navData.platformPath}>{props.navData.platform}</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link href={props.navData.dest1path}>{props.navData.dest1}</Nav.Link>
                        <Nav.Link href={props.navData.dest2path}>{props.navData.dest2}</Nav.Link>
                        <Nav.Link href={props.navData.dest3path}>{props.navData.dest3}</Nav.Link>
                        <Nav.Link href={props.navData.dest4path}>{props.navData.dest4}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default GenNav;