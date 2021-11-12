import React, { useRef } from 'react';
import {Button} from 'react-bootstrap';

function FileUpload(props) {
    const fileRef = useRef();
  
    const handleChange = (e) => {
      const file = e.target.files[0];
      sessionStorage.setItem("file", file);
      const url = URL.createObjectURL(file);
      sessionStorage.setItem("url", url);
    };
  
    return (
      <div>
        <Button onClick={() => fileRef.current.click()}>
          Upload
        </Button>
        <input
          ref={fileRef}
          onChange={handleChange}
          multiple={false}
          type="file"
          hidden
        />
      </div>
    );
}

export default FileUpload;