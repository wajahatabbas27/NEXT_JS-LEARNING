# Routing

- How the routes works in the nextjs.
- Therefore what is over there in the pages folder appear as the route for the application which helps in such a manner that it allows us to navaigate to the other page.

## Nested Routes

- Pages folder works as the routes for us , how many files we have we want those files to have more routes with them therefore we can do it by making a folder;

  - In the folder we will have a index.js file which works for us as the home by default in the folder and another file e.g ; slug.js - which helps us to navigate to that.

  - When creating the route inside the post as dynamic we will have any name or any other thing we can do that dynamic thing by using [slug].js ,this will going to create the dynamic route for it, which helps us to route to any thing inside the post folder dynamically with whatever the data that is coming.

  - We can also create a folder name inside the post by using [date] this is a complete dynamic folder therefore which helps us to have dynamic route inside it as well [slug].js is there as well so if we wanted to call that we can do this using the :
    http://localhost:3000/posts/2021-01-01/my-firstpost

- import { useRouter } from "next/router";
  const router = useRouter();
  const { slug, date } = router.query;

- This is the technique we must follow to make the routes completely dynamic for us, using the [] braces for the name but the file name must be except the braces here.

- For the Dynamic perspective there will be only one file for the completely dynamic structure in a folder as its only supported by the nextjs.

## Using route variables inside our pages

- will be using the routes name inside our pages here so to route to the differet page.
- above we are just using the highly dynamic structure using [] -> this structure of square brackets.
- created the serversideprops function inside the greet folder inside the dynamic name page and passed the name using params there as it is routed all the way.

## Client-side navigation

- To navigate, we can use the anchor tag in html but nextjs also gives us Link - tag to route as well in the client side of the pages all the way
  import Link from 'next/link';

- We can also set our paths like this here in the nextjs for the dynamic pages which we created and we wanted to link the pages as well on the client side so we are making a link tag with the reference of the dynamic post
<Link href='/posts/2021-01-01/happy-new-year'>Post</Link>

- For more complex urls we can also say like this to link the pages all the way
  href={{
   pathname: '/blog/[date]/[slug]'
   query: {
   date: '2020-01-01',
   slug: 'happy-new-year',
   foo: 'bar'
   }
   }}

### router.push to navigate

- we can also make links using the router.push if we want to navigate to a particular page
  router.push('/login')

- For the router.push technique whenever we wanted to send back to the page without clicking we can send using the router.push as we have implemented the logic here in the useEffect.
  const [loggedIn, setLoggedIn] = useState(false);

        const router = useRouter();

        useEffect(() => {
          //Add login code here
          //You can set the state to true to show the PrivateComponent
          setLoggedIn(false);

          if (!loggedIn) {
            router.push('/login')
          }
        }, [loggedIn]);

- Done with the navigation_router_push in the index.js page but hide it or comment it out all the way
