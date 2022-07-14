# Data Fetching CSR on ClientSide

Making HTTP requests on the server hides the API endpoint, parameters, HTTP headers,
and possibly the authorization tokens from the users. However, doing so from the browser
can reveal that private information, making it easy for malicious users to perform a
plethora of possible attacks that exploit your data.

- We usually want our client-side requests to run in two cases:
  • Right after the component has mounted
  • After a particular event occurs

- we are using the browser options to fetch the data here that is using the useEffect and the useState for calling the api on the browser.

## API folder in Pages folder

- Here we will be fetching the apis in the serverside and showing the data on the clientside to avoid the cors and the authorization issues so fetching the data on the serverside and showing the data on the clientside when the client renders te data.

- Therefore we shows the clientside data to the server and makes our calls in the api folder using the req and res parameters provided by the nodejs.

- And in the pages folder we will be making the request by calling the api folder and the file name and the query parameters.
