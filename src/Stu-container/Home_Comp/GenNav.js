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
                        {props.navData.destination.map((data) => <Nav.Link href={data.path}>{data.title}</Nav.Link>)}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default GenNav;