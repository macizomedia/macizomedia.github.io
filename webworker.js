self.onmessage = (event) => {
    const postData = event.data;

    // Process the data in the worker (for demonstration, we're formatting it)
    const processedData = {
        title: postData.title.toUpperCase(),
        body: postData.body
    };

    // Send processed data back to main thread
    self.postMessage(processedData);
};
