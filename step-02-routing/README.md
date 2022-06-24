# Routing

- How the routes works in the nextjs.
- Therefore what is over there in the pages folder appear as the route for the application which helps in such a manner that it allows us to navaigate to the other page.

## Nested Routes

- Pages folder works as the routes for us , how many files we have we want those files to have more routes with them therefore we can do it by making a folder;

  - In the folder we will have a index.js file which works for us as the home by default in the folder and another file e.g ; slug.js - which helps us to navigate to that.

  - When creating the route inside the post as dynamic we will have any name or any other thing we can do that dynamic thing by using [slug].js ,this will going to create the dynamic route for it, which helps us to route to any thing inside the post folder dynamically with whatever the data that is coming.

  - We can also create a folder name inside the post by using [date] this is a complete dynamic folder therefore which helps us to have dynamic route inside it as well [slug].js is there as well so if we wanted to call that we can do this using the :
    http://localhost:3000/posts/2021-01-01/my-firstpost

## Using route variables inside our pages

- will be using the routes name inside our pages here so to route to the differet page.
- above we are just using the highly dynamic structure using [] -> this structure of square brackets.
