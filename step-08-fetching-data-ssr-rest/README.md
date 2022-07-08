# Data fetching

- We can do 2 types of data fetching in nextjs, one is server side rendering and client side rendering;

  - In serverside we have two ways to fetch data:

    - getServerSideProps function : It works on the Server side.
    - getStaticProps function : It works on the Build time create SSG pages, with an option of incremental build regeneration.

  - In ClientSide data comes on the client, and to implement it in nextjs, we use useEffect() && useState() hooks.

## Fetching data on the server side

Using HTTP client libraries: There are several great HTTP clients for Next.js,
making it really straightforward to make HTTP requests from the server.
Popular libraries include isomorphic-unfetch (this renders the JavaScript fetch
API available on Node.js), Undici (an official Node.js HTTP 1.1 client), and
Axios (a very popular HTTP client that runs both on client and server with the
same APIs).

- In the next section, we will be using Axios to make REST requests, as it is probably one
  of the most frequently used HTTP clients for both client and server (with ~17,000,000
  downloads per week on npm), and there's a high chance that you will be using it sooner
  or later.

## Consuming REST APIs on the server side

When discussing the integration of REST APIs, we need to divide them into public and
private APIs. The public ones are accessible by anyone without any kind of authorization,
and the private ones always need to be authorized to return some data.

- Example is of the Rapid Api it requires a header when we are actually accessing the data.

<!-- Adding Axios to fetch the api -->

- yarn add axios

#### client side

Similar to the server side, fetching data on the client side is relatively easy, and if you
already have experience in React or any other JavaScript framework or library, you
can re-use your current knowledge for making REST requests from the browser without
any complications.

- We usually want our client-side requests to run in two cases:
  • Right after the component has mounted
  • After a particular event occurs

## how use .env variables inside the folder to avoid authorization error

declare var process: {
env: {
API_TOKEN: string;
API_ENDPOINT: string;
};
};
