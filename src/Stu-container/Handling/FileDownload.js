import React from 'react';
import MyPDF from '../../Files/test.pdf';

function FileDownload(props) {
    const url = sessionStorage.getItem("url");
    const file = sessionStorage.getItem(`${props.uploaded}`);

    return (
        <div>
            <a href={props.name} download="My_File.pdf"> Download this </a>
        </div>
    );
}

export default FileDownload;