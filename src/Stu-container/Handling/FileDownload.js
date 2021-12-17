import React from 'react';
// import MyPDF from '../../Files/test.pdf';
import FileSaver from 'file-saver';
import {Button} from 'react-bootstrap';

function FileDownload(props) {
    const downloadFile = (e) => {
        var blob = new Blob(props.data.contents, {type: "text/plain;charset=utf-8"});
        FileSaver.saveAs(blob, props.data.name+".txt");
    }
    
    return (
        <div>
            <Button class="btn" onClick={downloadFile}>DOWNLOAD</Button>
        </div>
    );
}

export default FileDownload;