import React from 'react';
import {Container, Button, Row, Col} from "react-bootstrap";
import notification from '../Images/notification.png';

function Banner(props) {
    console.log(props.type);
    return (
        <Container className="banner" fluid>
            <Row>
                <Col>
                    <Button className="home-btn">sc {props.type}</Button>
                </Col>
                <Col md={6}><h1>{props.school}</h1></Col>
                <Col>
                    <Button className="notification-btn" variant="outline"><img className="not-btn" src={notification}/></Button>
                    <Button className="profile-btn">{props.profile}</Button>
                </Col>
            </Row>
        </Container>

    );
}

export default Banner;