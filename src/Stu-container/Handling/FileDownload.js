import React from 'react';

function FileDownload(props) {
    const url = sessionStorage.getItem("url");

    return (
        <div>
            <a href={url} download="maintest.pdf">Download</a>
            {/* <Button>Download</Button> */}
        </div>
    );
}

export default FileDownload;