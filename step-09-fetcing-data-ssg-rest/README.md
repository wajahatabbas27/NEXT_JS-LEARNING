# SSG -static site generation using GET STATIC PROPS with REST API

## getStaticProps

- We use getStaticProps function to create ssg file all the way
- In the same folder whenever we wants to create the static site on the build time we will be doing it using the getStaticProps
- All the things will be similar like the getServerSideProps as we do in SSR, therefore we will be doing it in SSG here using the getStaticProps thats the difference.

## getStaticPaths

- Whenever working with the getStaticProps, we must require the getStaticPaths as it is required all the way
- It is required when getting the get static props
- Everytime we use the get Static Props we must require the get static paths
- routes jb bhi use kreinge wahan yh zaroor deinge

export const getStaticPaths: GetStaticPaths = async () => {
const userReq = await axios.get("https://jsonplaceholder.typicode.com/users");
const users: User[] = userReq.data;
const paths = users.map((user) => ({
params: {
username: user.username,
},
}));

return {
paths,
fallback: false,
};
};
