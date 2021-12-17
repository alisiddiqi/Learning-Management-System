import React from 'react';
import FileSaver from 'file-saver';
import {Button} from 'react-bootstrap';

function FileDownload(props) {
    const downloadFile = (e) => {
        {console.log(props)}
        var blob = new Blob([localStorage.getItem(props.name)], {type: "text/plain;charset=utf-8"});
        FileSaver.saveAs(blob, props.name+".txt");
    }
    return (
        <div>
            <Button variant="outline-primary" class="btn" onClick={downloadFile}> DOWNLOAD</Button>
        </div>
    );
}

export default FileDownload;