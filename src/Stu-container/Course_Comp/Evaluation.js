import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';

function Evaluation(props) {
    return (
        <div>
            <form>
                <Container style={{borderRadius: "5px", boxShadow: "2px 2px 5px"}}>
                    <Row>
                        <label>
                            Q1 The TA starts the lab session on time: <br/>
                            <input style={{margin: "10px"}} type="number" name="Q1-num" placeholder="Rating" onChange={(e) => sessionStorage.setItem(e.target.name, e.target.value)} />
                            <input style={{margin: "10px"}} type="text" name="Q1-com" placeholder="Comments" onChange={(e) => sessionStorage.setItem(e.target.name, e.target.value)} />
                        </label>
                    </Row>
                    <Row>
                        <label>
                            Q2 The TA uses the time of the lab effectively:<br/>
                            <input style={{margin: "10px"}} type="number" name="Q2-num" placeholder="Rating" onChange={(e) => sessionStorage.setItem(e.target.name, e.target.value)} />
                            <input style={{margin: "10px"}} type="text" name="Q2-com" placeholder="Comments" onChange={(e) => sessionStorage.setItem(e.target.name, e.target.value)} />
                        </label>
                    </Row>
                    <Row>
                        <label>
                            Q3 The TA answers the questions satisfactorily:<br/>
                            <input style={{margin: "10px"}} type="number" name="Q3-num" placeholder="Rating" onChange={(e) => sessionStorage.setItem(e.target.name, e.target.value)} />
                            <input style={{margin: "10px"}} type="text" name="Q3-com" placeholder="Comments" onChange={(e) => sessionStorage.setItem(e.target.name, e.target.value)} />
                        </label>
                    </Row>
                    <Row>
                        <label>
                            Q4 The TA marks the assignments fairly:<br/>
                            <input style={{margin: "10px"}} type="number" name="Q4-num" placeholder="Rating" onChange={(e) => sessionStorage.setItem(e.target.name, e.target.value)} />
                            <input style={{margin: "10px"}} type="text" name="Q4-com" placeholder="Comments" onChange={(e) => sessionStorage.setItem(e.target.name, e.target.value)} />
                        </label>
                    </Row>
                    <Row>
                        <label>
                            Q5 The TA marks the assignments on time:<br/>
                            <input style={{margin: "10px"}} type="number" name="Q5-num" placeholder="Rating" onChange={(e) => sessionStorage.setItem(e.target.name, e.target.value)} />
                            <input style={{margin: "10px"}} type="text" name="Q5-com" placeholder="Comments" onChange={(e) => sessionStorage.setItem(e.target.name, e.target.value)} />
                        </label>
                    </Row>
                    <Row>
                        <label>
                            Q6 The TA posts the solutions on time:<br/>
                            <input style={{margin: "10px"}} type="number" name="Q6-num" placeholder="Rating" onChange={(e) => sessionStorage.setItem(e.target.name, e.target.value)} />
                            <input style={{margin: "10px"}} type="text" name="Q6-com" placeholder="Comments" onChange={(e) => sessionStorage.setItem(e.target.name, e.target.value)} />
                        </label>
                    </Row>
                    <Row>
                        <label>
                            Q7 The TA demonstrated enough knowledge of the material covered:<br/>
                            <input style={{margin: "10px"}} type="number" name="Q7-num" placeholder="Rating" onChange={(e) => sessionStorage.setItem(e.target.name, e.target.value)} />
                            <input style={{margin: "10px"}} type="text" name="Q7-com" placeholder="Comments" onChange={(e) => sessionStorage.setItem(e.target.name, e.target.value)} />
                        </label>
                    </Row>
                    <Row>
                        <label>
                            Q8 The TA responses to emails and messages on time:<br/>
                            <input style={{margin: "10px"}} type="number" name="Q8-num" placeholder="Rating" onChange={(e) => sessionStorage.setItem(e.target.name, e.target.value)} />
                            <input style={{margin: "10px"}} type="text" name="Q8-com" placeholder="Comments" onChange={(e) => sessionStorage.setItem(e.target.name, e.target.value)} />
                        </label>
                    </Row>
                    <Row>
                        <label>
                            Q9 The TA treats the students respectfully:<br/>
                            <input style={{margin: "10px"}} type="number" name="Q9-num" placeholder="Rating" onChange={(e) => sessionStorage.setItem(e.target.name, e.target.value)} />
                            <input style={{margin: "10px"}} type="text" name="Q9-com" placeholder="Comments" onChange={(e) => sessionStorage.setItem(e.target.name, e.target.value)} />
                        </label>
                    </Row>
                    <Row>
                        <label>
                            Q10 I will be happy to have the same TA again:<br/>
                            <input style={{margin: "10px"}} type="number" name="Q10-num" placeholder="Rating" onChange={(e) => sessionStorage.setItem(e.target.name, e.target.value)} />
                            <input style={{margin: "10px"}} type="text" name="Q10-com" placeholder="Comments" onChange={(e) => sessionStorage.setItem(e.target.name, e.target.value)} />
                        </label>
                    </Row>
                </Container>
                <Button style={{margin: "20px"}} type="submit">Submit</Button>
            </form>
        </div>
    );
}

export default Evaluation;