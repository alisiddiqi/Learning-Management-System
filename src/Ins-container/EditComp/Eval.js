import React from 'react';
import {Container, Row} from 'react-bootstrap';
import '../teacher_main.css';
import '../../Stu-container/stu_main.css';

function Eval(props) {
    return (
        <Container className="eval-cont m-10" fluid>
            <h4>{props.info.student}</h4>
            <Row>
                <p>Q1 The TA starts the lab session on time: {props.info.q1}</p>
                <p>Q2 The TA uses the time of the lab effectively: {props.info.q2}</p>
                <p>Q3 The TA answers the questions satisfactorily: {props.info.q3}</p>
                <p>Q4 The TA marks the assignments fairly: {props.info.q4}</p>
                <p>Q5 The TA marks the assignments on time: {props.info.q5}</p>
                <p>Q6 The TA posts the solutions on time: {props.info.q6}</p>
                <p>Q7 The TA demonstrated enough knowledge of the material covered: {props.info.q7}</p>
                <p>Q8 The TA responses to emails and messages on time: {props.info.q8}</p>
                <p>Q9 The TA treats the students respectfully: {props.info.q9}</p>
                <p>Q10 I will be happy to have the same TA again: {props.info.q10}</p>
            </Row>
            <Row>
                <p>Comments:<br/>{props.info.comments}</p>
            </Row>
        </Container>
    );
}

export default Eval;