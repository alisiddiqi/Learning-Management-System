import React,{useState,useEffect} from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import {withRouter} from 'react-router';

function Evaluation(props) {
    return (
        <div>{
            props.data.map((item)=>(
              item['isEval'] === 1 ? (
                <form>
                <Container style={{borderRadius: "5px", boxShadow: "2px 2px 5px"}}>
                    <Row>
                        <label>
                            Q1 The TA starts the lab session on time:<br/>
                            <input style={{margin: "10px"}} type="number" name="q1" placeholder="Rating" onChange={(e) => sessionStorage.setItem(e.target.name, e.target.value)} />
                        </label>
                    </Row>
                    <Row>
                        <label>
                            Q2 The TA uses the time of the lab effectively:<br/>
                            <input style={{margin: "10px"}} type="number" name="q2" placeholder="Rating" onChange={(e) => sessionStorage.setItem(e.target.name, e.target.value)} />
                        </label>
                    </Row>
                    <Row>
                        <label>
                            Q3 The TA answers the questions satisfactorily:<br/>
                            <input style={{margin: "10px"}} type="number" name="q3" placeholder="Rating" onChange={(e) => sessionStorage.setItem(e.target.name, e.target.value)} />
                        </label>
                    </Row>
                    <Row>
                        <label>
                            Q4 The TA marks the assignments fairly:<br/>
                            <input style={{margin: "10px"}} type="number" name="q4" placeholder="Rating" onChange={(e) => sessionStorage.setItem(e.target.name, e.target.value)} />
                        </label>
                    </Row>
                    <Row>
                        <label>
                            Q5 The TA marks the assignments on time:<br/>
                            <input style={{margin: "10px"}} type="number" name="q5" placeholder="Rating" onChange={(e) => sessionStorage.setItem(e.target.name, e.target.value)} />
                        </label>
                    </Row>
                    <Row>
                        <label>
                            Q6 The TA posts the solutions on time:<br/>
                            <input style={{margin: "10px"}} type="number" name="q6" placeholder="Rating" onChange={(e) => sessionStorage.setItem(e.target.name, e.target.value)} />
                        </label>
                    </Row>
                    <Row>
                        <label>
                            Q7 The TA demonstrated enough knowledge of the material covered:<br/>
                            <input style={{margin: "10px"}} type="number" name="q7" placeholder="Rating" onChange={(e) => sessionStorage.setItem(e.target.name, e.target.value)} />
                        </label>
                    </Row>
                    <Row>
                        <label>
                            Q8 The TA responses to emails and messages on time:<br/>
                            <input style={{margin: "10px"}} type="number" name="q8" placeholder="Rating" onChange={(e) => sessionStorage.setItem(e.target.name, e.target.value)} />
                        </label>
                    </Row>
                    <Row>
                        <label>
                            Q9 The TA treats the students respectfully:<br/>
                            <input style={{margin: "10px"}} type="number" name="q9" placeholder="Rating" onChange={(e) => sessionStorage.setItem(e.target.name, e.target.value)} />
                        </label>
                    </Row>
                    <Row>
                        <label>
                            Q10 I will be happy to have the same TA again:<br/>
                            <input style={{margin: "10px"}} type="number" name="q10" placeholder="Rating" onChange={(e) => sessionStorage.setItem(e.target.name, e.target.value)} />
                        </label>
                    </Row>
                    <Row>
                        <label>
                            Comments:<br/>
                            <input style={{margin: "10px"}} type="text" name="comments" placeholder="Comments" onChange={(e) => sessionStorage.setItem(e.target.name, e.target.value)} />
                        </label>
                    </Row>
                </Container>
                <Button style={{margin: "20px"}} type="submit">Submit</Button>
            </form>
              ) : (
                  console.log("else")
              )
              
        ))
            }
            
        </div>
    );
}

export default Evaluation;