export function onError(error) {
    let message = error.toString();
  
    // Auth errors which will occur during backend
    if (!(error instanceof Error) && error.message) {
      message = error.message;
    }
  
    alert(message);
  }