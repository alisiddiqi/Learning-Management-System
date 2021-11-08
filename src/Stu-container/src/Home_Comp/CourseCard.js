import React from 'react';
import {Card, Button} from 'react-bootstrap';
import myimg from '../Images/crossroads.jpg';
import tack from "../Images/tack.png";

function CourseCard(props) {
    return (
        <Card className="course-card" style={{width: '16rem'}}>
            <Card.Img className="card-img" variatn="top" src={myimg} alt="Course Img"></Card.Img>
            <Card.Body>
                <Card.Title>{props.info.name}<Button variant="outline"><img className="pin-btn" src={tack} alt="Pin"/></Button></Card.Title>
                <Card.Text><p>{props.info.time}</p></Card.Text>
                <Button href={props.info.path} variant="outline-primary">SELECT</Button>
            </Card.Body>
        </Card>
    );
}

export default CourseCard;