import React from 'react';
import {Container, Button, Row, Col} from "react-bootstrap";
import notification from '../Images/notification.png';

function Banner(props) {
    return (
        <Container className="banner" fluid>
            <Row>
                <Col>
                    <Button className="profile-btn" href={props.bannerData.profilePath}>{props.bannerData.profile}</Button>
                </Col>
                <Col md={6}><h1>{props.bannerData.schoolName}</h1></Col>
                <Col>
                    <Button className="notification-btn" variant="outline" href="/Tools"><img className="not-btn" src={notification}/></Button>
                </Col>
            </Row>
        </Container>

    );
}

export default Banner;