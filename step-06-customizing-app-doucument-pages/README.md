# Customizing \_app.tsx page in the page folder

There are certain cases where you need to take control over page initialization, so that
every time we render a page, Next.js will need to run certain operations before sending
the resulting HTML to the client. To do that, the framework allows us to create two new
files, called \_app.js and \_document.js, inside our pages/ directory.

- We can use our components in app.js which we dont want to call every time when needed.

- It can also be wrapped by contextprovider and will help us to wrap the application once so it could be used by everypage.

One important thing to remember when customizing the \_app.js page is that it is not
meant for running data fetching using getServerSideProps or getStaticProps,
as other pages do. Its main use cases are maintaining state between pages during
navigation (dark/light themes, items in a cart, and so on), adding global styles, handling
page layouts, or adding additional data to the page props.

# The \_document.js page

- we created the file for te document in the pages folder where we wil import document and the important html,body,.. tags which we will use there.

- import Document,{ Html, Head, Main, NextScript, DocumentContext } from 'next/document';

- just created the \_document.tsx file in te pages folder which has all the document elements there.
