# Folder Structure Organization

- Here we will see the components, utilities , organising assets in public folder and library files like graphql.

## Organizing the components

- Applying the atomic design principle to follow for the folder and the file structure

## Organizing utilities

- There are specific files that don't export any component; they're just modular scripts used
  for many different purposes. We're talking here about the utility scripts.

## Organizing static assets

- As seen in the previous chapter, Next.js makes it easy to serve static files, as you only
  need to put them inside the public/ folder, and the framework will do the rest.

- In a standard website, we may want to serve at least the following static assets:
  • Images
  • Compiled JavaScript files
  • Compiled CSS files
  • Icons (including favicon and web app icons)
  • manifest.json, robot.txt, and other static files

## Lib files

- lib files for example graphql library files
- As we're going to see in Data fetching, the last section of this chapter, we will need to
  initialize a GraphQL client, save some GraphQL queries and mutations locally, and so
  on. To make those scripts more modular, we will store them inside a new folder called
  graphql/, which lies inside a lib/ directory, at the root of our project.
