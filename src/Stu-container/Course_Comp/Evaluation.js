import React from 'react';
import { Button, Container, Row, Form } from 'react-bootstrap';

function Evaluation(props) {
    return (
        <div>{
            props.data.map((item)=>(
              item['isEval'] === 1 ? (
                <Form>
                <Container style={{borderRadius: "5px", boxShadow: "2px 2px 5px"}}>
                    <Row>
                        <label>
      
                            Q1 The TA starts the lab session on time:<br/>
                            <input style={{margin: "10px"}}  type="number" min="0" max="10" name="q1" placeholder="Rating" onChange={(e) => sessionStorage.setItem(e.target.name, e.target.value)} />
                        </label>
                    </Row>
                    <Row>
                        <label>
                            Q2 The TA uses the time of the lab effectively:<br/>
                            <input style={{margin: "10px"}} type="number" name="q2"min="0" max="10" placeholder="Rating" onChange={(e) => sessionStorage.setItem(e.target.name, e.target.value)} />

                        </label>
                    </Row>
                    <Row>
                        <label>
                            Q3 The TA answers the questions satisfactorily:<br/>
                            <input style={{margin: "10px"}} type="number" name="q3" min="0" max="10"placeholder="Rating" onChange={(e) => sessionStorage.setItem(e.target.name, e.target.value)} />
                        </label>
                    </Row>
                    <Row>
                        <label>
                            Q4 The TA marks the assignments fairly:<br/>
                            <input style={{margin: "10px"}} type="number" name="q4" min="0" max="10" placeholder="Rating" onChange={(e) => sessionStorage.setItem(e.target.name, e.target.value)} />

                        </label>
                    </Row>
                    <Row>
                        <label>
                            Q5 The TA marks the assignments on time:<br/>
                            <input style={{margin: "10px"}} type="number" name="q5" min="0" max="10" placeholder="Rating" onChange={(e) => sessionStorage.setItem(e.target.name, e.target.value)} />

                        </label>
                    </Row>
                    <Row>
                        <label>
                            Q6 The TA posts the solutions on time:<br/>
                            <input style={{margin: "10px"}} type="number" name="q6"min="0" max="10" placeholder="Rating" onChange={(e) => sessionStorage.setItem(e.target.name, e.target.value)} />
                        </label>
                    </Row>
                    <Row>
                        <label>
                            Q7 The TA demonstrated enough knowledge of the material covered:<br/>

                            <input style={{margin: "10px"}} type="number" name="q7" min="0" max="10" placeholder="Rating" onChange={(e) => sessionStorage.setItem(e.target.name, e.target.value)} />

                        </label>
                    </Row>
                    <Row>
                        <label>
                            Q8 The TA responses to emails and messages on time:<br/>

                            <input style={{margin: "10px"}} type="number" name="q8" min="0" max="10" placeholder="Rating" onChange={(e) => sessionStorage.setItem(e.target.name, e.target.value)} />

                        </label>
                    </Row>
                    <Row>
                        <label>
                            Q9 The TA treats the students respectfully:<br/>

                            <input style={{margin: "10px"}} type="number" name="q9" min="0" max="10" placeholder="Rating" onChange={(e) => sessionStorage.setItem(e.target.name, e.target.value)} />
                        </label>
                    </Row>
                    <Row>
                        <label>
                            Q10 I will be happy to have the same TA again:<br/>

                            <input style={{margin: "10px"}} type="number" name="q10" min="0" max="10" placeholder="Rating" onChange={(e) => sessionStorage.setItem(e.target.name, e.target.value)} />
                        </label>
                    </Row>
                    <Row>
                        <label>
                            Comments:<br/>
                            <input style={{margin: "10px"}} type="text" name="comments" maxLength="100" placeholder="Comments" onChange={(e) => sessionStorage.setItem(e.target.name, e.target.value)} />
                        </label>
                    </Row>
                </Container>
                <Button style={{margin: "20px"}} type="submit"  onClick={async()=>{
        const newStuToAdd={q1: sessionStorage.getItem('q1'),q2: sessionStorage.getItem('q2'),q3: sessionStorage.getItem('q3'),q4 :sessionStorage.getItem('q4'),q5: sessionStorage.getItem('q5'),q6: sessionStorage.getItem('q6'),q7: sessionStorage.getItem('q7'),q8: sessionStorage.getItem('q8')
                            ,q9: sessionStorage.getItem('q9'),q10: sessionStorage.getItem('q10')};
        const response=await fetch('/students/'+props.match.params.username+'/',{
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newStuToAdd)   
        })
    }}> Submit</Button>
            </Form>
              ) : (
                    console.log("else")
              )
              
        ))
            }
            
        </div>
    );
}

export default Evaluation;