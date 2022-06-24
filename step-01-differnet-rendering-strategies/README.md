# Exploring Different Rendering Strategies

## Server Side Rendering SSR

- SSR - Server Side Rendering will take the data from the server to the browser, so as there will be the load on the server at that time therefore what it requires is the strong server to handle the data as well the server usage will also be increased in such a manner.

- In Nextjs we can also use dynamic functions on the server side as well, getServerSideProps which will help us to fetch data and render it dynamically on the server, It is the function provided to us by nextjs which helps us to pass data as the props in the pages folder,
  All it requires is it will fetch the data and returns the props! , which will automatically send to the pages folder as the argument, which helps the data to be rendered dynamically, but remember this will work on the server side.

- This is how the builtin function is working in SSR
<!-- 
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
-->

- This is the data which is serverside rendered with the fetching and its working is done on the server side rendering.
