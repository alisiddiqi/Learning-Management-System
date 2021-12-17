import React, { useRef,useState,useEffect } from 'react';
import {Button} from 'react-bootstrap';
import FileSaver from "file-saver";

function FileUpload() {
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
    const handleFileSubmit = ()=>{
      fetch('/students/KaiStudent/courses/'+sessionStorage.getItem("courseID")+'/dropbox/',{
          method: "POST",
          body: JSON.stringify({
              assignment_name: sessionStorage.getItem("fileName"),
              due_date: "2022/1/1",
              content: "N/A",
              courseid: sessionStorage.getItem("courseID")
          }
          ),
          headers: {
              "Content-type": "application/json; charset=UTF-8" 
          }
      })
    }
    
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
        <Button onClick={handleFileSubmit()}>
          Submit
        </Button>
      </div>
    );
}

export default FileUpload;