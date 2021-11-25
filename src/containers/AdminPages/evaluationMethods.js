import { withRouter } from "react-router";
import {useState,useEffect} from 'react'
import { Form } from "react-bootstrap";
import {Button as Button2} from 'react-bootstrap'


function EvaluationMethods(props)
{
    var [courseid,setCourseid]=useState(null);
    const [data,setData]=useState([]);
    courseid=props.match.params.courseID;
  return(
      <div>

  <Button2 onClick={async()=>{
        const response=await fetch('/courses/sendEvaluations/'+props.match.params.courseID,{
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify()
        })
    }}>
      Send evaluations
  </Button2><br/><br/>
  <Button2 href={"recieve/"+props.match.params.courseID}>
    Recieve Evaluations
  </Button2>
   
  </div>
  );
}

export default withRouter(EvaluationMethods)