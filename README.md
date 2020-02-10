# NextJs-Spike
A spike for nextJS usage, to get an understanding of the framework dynamics and if they will work with the Silicon Rhino approach. 

### Requirements
 - Server side rendering, needed for SEO purposes both content and seo specific tags
 - Dynamic routing with pretty urls
 - React takes over the front end after inital render

Also looking at possible UI scaffolding mostly for layout grids but other elements we could leverage. As already familiar with Bootstrap going to look at Material Design implementation Material UI.

Jira issue: [SR-576](https://silicon-rhino.atlassian.net/browse/SR-576)

### Running it
To keep it simple used yarn without any containerisation so:

`yarn install`

To get all the dependencies installed, then:

`yarn dev`

To get started.

### Work achieved:
 - Placed source files in src folder to match CRA file structure.
 - Add dynamic routes for:
  - Listing page for data from Drinks API
  - Single page for data from Drinks API
 - Created page template for example layout, used title bar and Grid from Materials UI
 - Created some twitter tags to include in the page head with data from API as example for SEO tags
 - Created navigation config file to demonstrate static data on initial render.

 ### Learnings
 Routing is entirely file structure based but with enough configurability for dynamic pretty URL routes:

 `/hotel/[hotel_id]/[hotel_name].js`

 Will give you the hotel_id and hotel_name as varibles to use in your route. With the above example

 `/hotel/55/`

 would not resolves as a route unless you placed an index.js file in the [hotel_id] folder. This can be seen in the pages folders 'drinks' and 'drink'. Major complaint for others is redirects, but this is still very achievable using file structure routing. There is also the possibility of a sort of catch all using spread operator:

 `pages/post/[...slug].js` matches `/post/a`, but also `post/a/b`, `post/a/b/c` and so on. - __https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes__

 Have added a 'services' folder to contain classes that wrap sending and recieving data to a specific model/collection API, the example in this case being drink events endpoint. This is similar to the /api/commands.ts in Banders and /api/index.ts in Bubble web app.

