import React from 'react';
import {} from 'react-bootstrap';
import {Test, QuestionGroup, Question, Option} from 'react-multiple-choice';

function Evaluation(props) {
    return (
        <div>
            <Test onOptionSelect={selectedOptions => this.setState({ selectedOptions })}>
                <QuestionGroup questionNumber={0}>
                    <Question>What's your favorite food?</Question>
                    <Option value="0">Mac n Cheese</Option>
                    <div>Add some additional info or tooltips for specific questions</div>
                    <Option value="1">Steak</Option>
                    <Option value="2">Sushi</Option>
                    <Option value="3">Pad Thai</Option>
                </QuestionGroup>
                <button type="submit">Submit</button>
            </Test>
        </div>
    );
}

export default Evaluation;

// Q1 The TA starts the lab session on time:

// Q2 The TA uses the time of the lab effectively:

// Q3 The TA answers the questions satisfactorily:

// Q4 The TA marks the assignments fairly:

// Q5 The TA marks the assignments on time:

// Q6 The TA posts the solutions on time:

// Q7 The TA demonstrated enough knowledge of the material covered:

// Q8 The TA responses to emails and messages on time:

// Q9 The TA treats the students respectfully:

// Q10 I will be happy to have the same TA again: