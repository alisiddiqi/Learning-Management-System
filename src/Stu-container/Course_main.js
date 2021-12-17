import './stu_main.css';
import React, { useState, useEffect } from 'react';
import Banner from "./Home_Comp/Banner";
import GenNav from "./Home_Comp/GenNav";
import CourseBody from "./Course_Comp/CourseBody";
import Schedule from './Course_Comp/Schedule';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import GenData from "./gen_db.json";
import {withRouter} from 'react-router';

function Course_main(props){
    {GenData.stuNav.destination.map((data) => sessionStorage.setItem(data.title, GenData.stuNav.platformPath+sessionStorage.getItem("stuID")+GenData.stuNav.start+props.match.params.courseID+data.path))};
    sessionStorage.setItem("courseID", props.match.params.courseID);
    
    const [Contentdata,setContentData]=useState([]); 
    const fetchDocuments = ()=>{
        fetch('/courses/'+sessionStorage.getItem("courseID")+'/content/')
        .then(res=>res.json())
        .then(json=>setContentData(json));
    }
    useEffect(()=>{
        fetchDocuments();
    },[]);

    return (
        <div className="course-main">
            <Banner bannerData={GenData.Banner} user="Student" />
            <GenNav navData={GenData.stuNav} user="Student" />
            <Container className="course-cont">
                <Row>
                    <Col>
                        <CourseBody lectureInfo={Contentdata} title="Lectures"/>
                    </Col>
                    <Col>
                        <Schedule />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default withRouter(Course_main);