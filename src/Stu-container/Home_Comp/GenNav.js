import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import {BrowserRouter} from 'react-router-dom';

function GenNav(props) {
    return (
        <BrowserRouter>
        <Navbar className="options" collapseOnSelect expand="sm">
            <Container bg="light" variant="light" fluid>
                <Navbar.Brand href={props.navData.platformPath}>{props.navData.platform}</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        {props.navData.destination.map((data) => <Nav.Link href={sessionStorage.getItem(data.title)}>{data.title}</Nav.Link>)}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </BrowserRouter>
    );
}

export default GenNav;