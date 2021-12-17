import React, { useRef,useState,useEffect } from 'react';
import {Button} from 'react-bootstrap';
import FileSaver from "file-saver";

function FileUpload() {
  var ctr=0;
    const fileRef = useRef();
    const HandleChange = (e) => {
      e.preventDefault();
      const file = e.target.files[0];
      let read = new FileReader();
      read.readAsBinaryString(file);
      read.onloadend = function(){
        localStorage.setItem(sessionStorage.getItem("fileName"), read.result.toString());
      }
    };

    // let handleFileSubmit = ()=> {
    //   console.log(ctr)
    //   if(ctr ==1) {
    //   {console.log(localStorage.getItem("TextTest"))}
    //   const response =await fetch('/students/'+sessionStorage.getItem("stuID")+'/courses/'+sessionStorage.getItem("courseID")+'/dropbox/',{
    //       method: "POST",
    //       headers: {
    //           "Content-type": "application/json; charset=UTF-8" 
    //       },
    //       body: JSON.stringify({
    //         assignment_name: sessionStorage.getItem("fileName"),
    //         due_date: "2022/1/1",
    //         content: localStorage.getItem(sessionStorage.getItem("fileName")),
    //         courseid: sessionStorage.getItem("courseID")
    //     }
    //     )
    //   })
    // }
    // }

    return (
      <div>
        <Button onClick={() => fileRef.current.click()}>
          Upload
        </Button>
        <input
          ref={fileRef}
          onChange={HandleChange}
          multiple={false}
          type="file"
          hidden
        />
        <p id="flag" style={{margin: "5px", display: "none"}}>Uploaded</p>
        <Button 
         onClick={async()=>{
           const response=await fetch('/students/'+sessionStorage.getItem("stuID")+'/courses/'+sessionStorage.getItem("courseID")+'/dropbox/',{
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8" 
            },
            body: JSON.stringify({
              assignment_name: sessionStorage.getItem("fileName"),
              due_date: "2022/1/1",
              content: localStorage.getItem(sessionStorage.getItem("fileName")),
              courseid: sessionStorage.getItem("courseID")
          }
          )
        })
          }
        }>
          Submit
        </Button>
      </div>
    );
}

export default FileUpload;