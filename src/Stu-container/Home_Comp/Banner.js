import React from 'react';
import {Container, Button, Row, Col} from "react-bootstrap";
import notification from '../Images/notification.png';

function Banner(props) {
    if (props.user === "Student") {
        return (
            <Container className="banner" fluid>
                <Row>
                    <Col>
                        <Button className="profile-btn" href={props.bannerData.profilePath+sessionStorage.getItem("stuID")}>Profile</Button>
                    </Col>
                    <Col md={6}><h1>University of Calgary</h1></Col>
                    <Col>
                    </Col>
                </Row>
            </Container>
        );
    } else {
        return (
            <Container className="banner" fluid>
                <h1>University of Calgary</h1>
            </Container>
        );
    }
}

export default Banner;