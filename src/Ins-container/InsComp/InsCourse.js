import React, {useState,useEffect} from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import StuData from "../../Stu-container/stu_db.json";
import PageBody from './PageBody';
import '../../Stu-container/stu_main.css';
import FileDownload from '../../Stu-container/Handling/FileDownload';
import FileUpload from '../../Stu-container/Handling/FileUpload';

function InsCourse (){
    const [data, setData]= useState([]);
    const fetchStudents = ()=>{
        fetch('/teacher/'+sessionStorage.getItem('teacherID')+'courses/'+sessionStorage.getItem('courseID')+'/content/')
        .then(res=>res.json())
        .then(json=>setData(json));
      }
      useEffect(()=>{
        fetchStudents();
      },[]);
        return (
            <div className="course-main">
                <Container className="course-cont">
                    <Row>
                        <Col>
                            <PageBody lectureInfo={data} title="Lectures"/>
                        </Col>
                    </Row>
                    <Row>
                        <Button >Add Lecture</Button> 
                    </Row>
                </Container>
            </div>
        );
}

export default InsCourse;