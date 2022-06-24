# Exploring Different Rendering Strategies

## Server Side Rendering - SSR

- SSR - Server Side Rendering will take the data from the server to the browser, so as there will be the load on the server at that time therefore what it requires is the strong server to handle the data as well the server usage will also be increased in such a manner.

- In Nextjs we can also use dynamic functions on the server side as well, getServerSideProps which will help us to fetch data and render it dynamically on the server, It is the function provided to us by nextjs which helps us to pass data as the props in the pages folder,
  All it requires is it will fetch the data and returns the props! , which will automatically send to the pages folder as the argument, which helps the data to be rendered dynamically, but remember this will work on the server side.

- This is how the builtin function is working in SSR

  export const getServerSideProps = async () => {
  const userRequest = await fetch("https://api.publicapis.org/entries");
  const userData = await userRequest.json();

  return {
  props: {
  user: userData,
  },
  };
  };

const index = ({ user: { entries } }) => {
// console.log(props.user.entries[0]);
console.log(entries);
return <div>index</div>;
};

- This is the data which is serverside rendered with the fetching and its working is done on the server side rendering.

## Client Side Rendering - CSR

### Hydration

- Its the process where the js code is fully loaded by the browser and is ready to show in html, this process is called Hydration.

- React is the example of client side rendering, and it works in a manner that the data that is rendered in the main screen is processed in the browser, the browser gets the bundle of the js files and then convert the js file in html and show on client side and all the processing is done on the browser, therefore as google bots wait for the bundle to convert in the html so the SEO score is less, and it donot provide good SEO.

### UseEffect() && useState()

- When we work in the nextjs and use the useEffect and the useState hook to manage the states and call the browser Elements in it so it will going to render the data on the browser for us and this is actually Client Side Rendering.

- Therefore by using the upper technique our data will be processed in the browser.

### process.Browser

- This technique can be used as there is no browser on the nodejs which is SSR therefore we can apply boolean to work with it as well.

### dynamic component loading

- This is the technique provided by the nextjs it tells us that whenever we want the data to be rendered for us on the browser or CSR we can use the dynamic builtin function to render the data on the browser after loading, we can import it from the next library provided to us by the nextjs.

import dynamic from "next/dynamic";

## Static Side Generation - SSG

- This is the technique as well for rendering prebuild pages on the browser therefore by using this tecnique we will have prebuild pages.
- All the static things can be done here on the static site generation, which will going to help us for the pages to be available as soon as possible.
- Therefore there will be good SEO for the site, which will going to help the site to show up on the search engine as the google bot will take it easily as its pre build and it will work in a particular manner.
- We can use the getStaticProps function which is built in to be used by us and which will going to help us to do static site generation with the incremental static regenration on our request all the way.

import fetch from 'isomorphic-unfetch';
import Dashboard from './components/Dashboard';
export async function getStaticProps() {
const userReq = await fetch('/api/user');
const userData = await userReq.json();
const dashboardReq = await fetch('/api/dashboard');
const dashboardData = await dashboardReq.json();
return {
props: {
user: userData,
data: dashboardData,
},
revalidate: 600 // time in seconds (10 minutes)
};
}
function IndexPage(props) {
return (

 <div>
 <Dashboard
 user={props.user}
 data={props.data}
 />
 </div>
 );
}
export default IndexPage;

### Incremental Static Regeneration (ISR)

- This technique will help us when we wanted to regenerate the static page we apply the time when a static page needs to be regenerated.
- Thanks to ISR, we can specify at the page level how long Next.js should wait before re-rendering a static page updating its content.
- This is the hybrid approach to be used.

- It works with the hybrid approach the data is available for the first time when the static site is created but after that the data will be reloaded after a time duration which we specify in the "revalidate",
  It works in such a manner that it will use the cache files to save the data which nextjs server side render the next request which comes for the static page so as this is the hybrid approac which helps us to manage things according to our need.

## SSG + ISR = Hybrid

Static-site generation is a great way to create fast and secure web pages, but sometimes we might want to have more dynamic content. Thanks to Next.js, we can always decide which page should be rendered at build time (SSG) or request time (SSR). We can take the best of both approaches by using SSG + ISR, making our pages a "hybrid" between SSR and SSG, and that's a game-changer for modern web development.
