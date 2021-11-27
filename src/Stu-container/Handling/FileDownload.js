import React from 'react';

function FileDownload(props) {
    const url = sessionStorage.getItem("url");
    const file = sessionStorage.getItem(`${props.uploaded}`);

    return (
        <div>
            <a href={url} download={file}>{props.uploaded}</a>
        </div>
    );
}

export default FileDownload;