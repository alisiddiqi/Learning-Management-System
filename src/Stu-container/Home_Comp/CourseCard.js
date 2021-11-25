import React, { useState } from 'react';
import {Card, Button} from 'react-bootstrap';
import myimg from '../Images/crossroads.jpg';
import tack from "../Images/tack.png";
import {BrowserRouter} from 'react-router-dom';


function CourseCard(props) {
    return (
        <BrowserRouter>
        <Card className="course-card" style={{width: '16rem'}}>
            <Card.Img className="card-img" variatn="top" src={myimg} alt="Course Img"></Card.Img>
            <Card.Body>
                <Card.Title>{props.info.courseid} {props.info.name}<Button variant="outline"><img className="pin-btn" src={tack} alt="Pin"/></Button></Card.Title>
                <Card.Text><p>{props.info.time}</p></Card.Text>
                <Button href={"/StuHome/"+props.info.courseid} variant="outline-primary">SELECT</Button>
            </Card.Body>
        </Card>
        </BrowserRouter>
    );
}

export default CourseCard;