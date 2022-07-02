# Customizing \_app.tsx page in the page folder

There are certain cases where you need to take control over page initialization, so that
every time we render a page, Next.js will need to run certain operations before sending
the resulting HTML to the client. To do that, the framework allows us to create two new
files, called \_app.js and \_document.js, inside our pages/ directory.

- We can use our components in app.js which we dont want to call every time when needed.

- It can also be wrapped by contextprovider and will help us to wrap the application once so it could be used by everypage.
