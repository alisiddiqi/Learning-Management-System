import { withRouter } from "react-router";
import {useState,useEffect} from 'react'
import { Button, Form } from "semantic-ui-react";


function EvaluationMethods(props)
{
    const [data,setData]=useState([]);
    console.log(props.match.params.courseID);
  return(
      <div>
<Form>
  <Button onClick={async()=>{
        const response=await fetch('/courses/sendEvaluations/'+props.match.params.courseID,{
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
        })
    }}>
      Send evaluations
  </Button>
  <Button>
      Recieve evaluations
  </Button>
  </Form>
  </div>
  );
}

export default withRouter(EvaluationMethods)