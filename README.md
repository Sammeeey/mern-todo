# Fullstack TodoList📝 (Frontend + Backend)


# BACKEND
## API 
### Todolist
- create
- get/display
- check off
- (change task)
- delete




# FRONTEND
- inspired by [webdev bootcamp by colt steele (paid)](https://www.udemy.com/course/the-web-developer-bootcamp/learn/lecture/37867268)

## Structure
- TodoList🧠
  - list todos
  - handle state
    - check off
    - delete
    - (edit)
  - hold data/state - format: list of todos
- Todo🎨
  - format: object (uuid, task(string), done(boolean))
- NewTodoForm🎨
  - create new todo







# Project Structure
```
my-mern-app/
|-- backend/
|   |-- node_modules/   // Backend-specific dependencies
|   |-- src/            // Backend source code
|   |-- package.json    // Backend dependencies and scripts
|   |-- ...
|
|-- frontend/
|   |-- node_modules/   // Frontend-specific dependencies
|   |-- public/         // Public assets (e.g., HTML, images)
|   |-- src/            // Frontend source code
|   |-- package.json    // Frontend dependencies and scripts
|   |-- ...
|
|-- node_modules/       // Shared dependencies (if any)
|-- .git/               // Git repository configuration
|-- .gitignore          // Git ignore file
|-- package.json        // Project-level dependencies and scripts
|-- README.md           // Project documentation
|-- ...
```





# Resources
## todo list insipred by [WebDev Bootcamp (paid)](https://www.udemy.com/course/the-web-developer-bootcamp/learn/lecture/37867268)
## backend setup inspired by [MERN stack tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE)
## deployment
- ~~[deployment to Vercel](https://youtu.be/Cfi0mymfKiA) **not working after trying a ton of resources for two days** (all tutorials outdated - all using [deprecated `builds` etc. in `vercel.json`](https://vercel.com/docs/projects/project-configuration) + Vercel just not meant for monorepos/express APIs)~~
  - if really want to deploy MERN/Express API to Vercel - [*deploy Express API tut*](https://www.youtube.com/watch?v=B-T69_VP2Ls) along with ["*Using Express.js with Vercel*" (Vercel Docs)](https://vercel.com/guides/using-express-with-vercel#standalone-express) could work
- [deploy Vite-MERN to Render (YouTube Tutorial)](https://youtu.be/l134cBAJCuc?si=GT1fOJP6j5pcHZZ5)
  - deploy frontend folder as static page
    - root directory: `frontend` (bc frontend folder called `frontend`)
    - build command: `npm run build`
    - publish directory: `dist` (bc that's where vite *publishes* app after build)
  - deploy backend folder as web service
    - root directory: `backend` (bc backend folder called `backend`)
    - build command: `npm install` (to install node dependencies)
    - start command: `npm start` (defined as `"node index.js"` in `package.json` OR just use `node index.js`)
  - define correct environment variables for client & server (on Render)
    - backend
      - needs client URL to grant CORS access (& few more env variables)
      - needs MongoDB URL to interact with DB
      - [~~define `NODE_VERSION` to tell Render which version to use (otherwise uses old version by default)~~](https://stackoverflow.com/a/77431074/12946000) - [define node engine version in `package.json`](https://render.com/docs/node-version)
      - define `NODE_ENV` environment variable to use dev dependencies only during development (here only `dotenv` in development)
    - frontend
      - frontend needs server URL to make API request
  - [grant backend service access to MongoDB (get render service IPs & allow them inside MongoDB)](https://www.mongodb.com/community/forums/t/cant-connect-to-mongodb-atlas-from-render-web-hosted-app/192110/5)




## takeaways
- forget about error handling initially! (takes a ton of time while making code unreadable)
- good practice to do frontend validation (eventually) but also takes a lot of time and redundant work in the beginning (defining additional schema on frontend - e.g. using react-hook-form)





# TODO
- [x] add functionality to all routes
  - [ ] eventually make update route really update - not just change done boolean
- [x] move routes to controller file
- [ ] ([implement router (navigation (& navbar))](https://youtu.be/bx4nk7kBS10?list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE))
- [x] connect backend & frontend
  - [x] [fetch db data from inside react and apply them to state using `fetch()`](https://youtu.be/MEab_a19ZGk?list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE)
  - [x] how to implement correct backend URI during production ([not just using *proxy*](https://youtu.be/MEab_a19ZGk?list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE&t=430))? using `CORS` package? yes!
  - [x] [update todo creation form to save user input into db (via `fetch()`-POST request with JSON-string as body & content-type JSON to backend creation route)](https://youtu.be/tRmeik-IpUQ?list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE)
    - [ ] (give error messages on failed forms)
  - [x] [dynamically update page (react to change) when new todo added](https://youtu.be/tRmeik-IpUQ?list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE&t=792)
    - [x] using useEffect
    - [ ] using context (potentially valuable for bigger projects)
  - [ ] implement CRUD in frontend using db
    - [x] create
      - [ ] WHERE/HOW/WHEN TO SET NEW STATE AFTER UPDATING DATA IN DB?
    - [x] read
      - [x] read todos
      - [ ] (read single todo)
    - [x] update
      - [x] toggle
      - [ ] (eventually edit to update generally (also update task description))
        - [ ] toggle inside update function
    - [x] delete
- [ ] (improve styling)
- [ ] hide error stack trace eventually
  - [ ] (display useful error messages to users)
- [x] (move server route to `/api/todos`)
- [ ] (IMPROVE PAGE SPEED)
  - [ ] why page speed so slow? - normal in such basic react apps or just because I'm only using free plans (MongoDB Atlas & Render)?
  - [ ] (**why does useeffect in `todolist.jsx` get triggered by `todos` (`usestate`) every few seconds? does todos get executed every few seconds to check state** - so that it's generally a bad idea to make useEffect depending on it?)
    - [x] does removing todos dependency solve infinite re-run of useeffect? - YES (no clue why - seems like re-render is considered as *mount* and something in the app triggers a re-render (probably the (react-hook-)form))

- [x] remove localhost from cors list in index.js on backend
- [x] remove vercel config file in case vercel not used
- [x] ~~[add nodeversion file to root of backend](https://stackoverflow.com/a/77431074/12946000)~~ [define node engine version in `package.json`](https://render.com/docs/node-version) if that's what solves backend deployment issue on render
- [x] document deployment (somehow)
- [ ] try cloudflare for deployment?!


### nice to have
- [x] store permanently
  - [x] store in db
- [ ] [collection of todolists](https://www.udemy.com/course/the-web-developer-bootcamp/learn/lecture/37867296#questions)
  - [ ] navigation
    - [ ] different routes for different todo lists
- [ ] personalized todo lists
  - [ ] user login/authentication/accounts



