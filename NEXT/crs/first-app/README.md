This is a [Next.js](https://nextjs.org) project bootstrapped with
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.

You can start editing the page by modifying `app/page.js`. The page auto-updates
as you edit the file.

This project uses
[`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
to automatically optimize and load [Geist](https://vercel.com/font), a new font
family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js
  features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out
[the Next.js GitHub repository](https://github.com/vercel/next.js) - your
feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the
[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.

Check out our
[Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying)
for more details.

App router uses a client-side navigation which is similar to
single-page-application, This means when the user navigate to a new route the
browser isn't going to render or reload the whole page instead nextjs is only
going to update that segment that has changed this is called partial rendering

this save us from actually sending that unecessary data from the server back to
the client every time that the user changes a route & reduce the
execution/render time

-

Primarly 2 ways to navigate between pages: -Link component , - useRouter hook

- use Aliases in jsonconfig file --- code

- usePathname vs useRouter().pathname

- code: build a header changes the color of link if its active

- import useRouter hook the next/navigation

- This going to be similar to link - client side navigation instead of re-render
  the page, only use useRouter push or replace if you if you've a specific use
  case to programmatically change routes
