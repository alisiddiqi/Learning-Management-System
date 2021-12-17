import React, { useRef,useState,useEffect } from 'react';
import {Button} from 'react-bootstrap';
import FileSaver from "file-saver";

function FileUpload(props) {
    const fileRef = useRef();
    const HandleChange = (e) => {
      e.preventDefault();
      const file = e.target.files[0];
      console.log(file);
      let read = new FileReader();
      read.readAsBinaryString(file);
      read.onloadend = function(){
        console.log("-- READING2 --" + read.result.toString());
        localStorage.setItem('text', read.result.toString());
        console.log("get file" + localStorage.getItem('text'));
      };
      document.getElementById("flag").style.display = "block";
    };
    const handleFileSubmit = ()=>{
      fetch('/',{
          method: "POST",
          body: JSON.stringify({
              name: localStorage.getItem("text"),
              studentID: sessionStorage.getItem("stuID"),
              courseID: sessionStorage.getItem("courseID")
          }
          ),
          headers: {
              "Content-type": "application/json; charset=UTF-8" 
          }
      }).then(response=>response.json())
      .then(json=> {
          onCancel();
          fetchStudents();
      })
      document.getElementById("flag").style.display = "none";
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