const resolvedPromise = (message) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(message)
        }, 500);
    })
}

function rejectedPromise(errorMessage) {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error(errorMessage));
    }, 500);
  });
}


resolvedPromise("delayed success!")
  .then((result) => {
    console.log("message:", result);
  })
  .catch((error) => {
    console.error("error:", error.message);
  });

rejectedPromise("delayed exception!")
  .then((result) => {
    console.log("message:", result); 
  })
  .catch((error) => {
    console.error("error:", error.message);
  });
