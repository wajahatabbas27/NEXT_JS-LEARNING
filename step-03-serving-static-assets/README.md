# Serving static assets

- In public folder we can create file named index.txt and when we call the localost:3000/index.txt - we see the text in it.
- There is an issue when the file is being load and will render therefore its an issue.

## Next.js' automatic Image optimization

- Normaly we only use src and alt in the img tag however we will be using srcset property for responsive images, so we'll actually need to optimize the picture for different screen resolutions, which involves some extra steps for serving our assets in nextjs.

- by adding this inside the next.config.js file we will add the following:

module.exports = {
images: {
domains: ['images.unsplash.com']
}
};

This allows that nextjs by itself will optimize the images coming from the unsplash.

- import Image from "next/image";
- <Image
  src='https://images.unsplash.com/photo-
  1605460375648-278bcbd579a6'
  width={500}
  height={200}
  alt='A beautiful English Setter'
  />
- tag must be used with the properties of height,width,src,alt mandatory init to optimize the image.
- When we put the layout to fill, it will going to put it to the size of the div and it will not be needing the width and the height as the attribute then.

- When we inspect the image in the browser we will ging to see different image sizes in the srcset of the browser and therefore we will look that there are different sizes created by it.

- One last thing worth mentioning is that if we inspect the image format on Google Chrome
  or Firefox, we will see that it has been served as WebP, even if the original image served
  from Unsplash was a jpeg. If we now try to render the same page on iOS with Safari,
  Next.js will serve the original jpeg format, as (at the time of writing) that iOS browser
  does not yet support the WebP format.

## Running automatic image optimization on external services

- It is basically different server, which helps us to load images on the different server if we use it else it would be done in vercel if we are deploying our site on vercel.
