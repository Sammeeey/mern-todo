# Fullstack TodoList📝 (Frontend + Backend)


## TODO



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

## ToDos
- [x] clear form after submit
- [x] store in localstorage
- [ ] create backend (node, express, mongodb)
- [ ] connect frontend & backend
  - [ ] [proxy `package.json` of frontend to port of backend](https://youtu.be/MEab_a19ZGk?list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE&t=451)
  - [ ] do I need (global) context?
  - [ ] deployment!?

### nice to have
- [ ] store permanently
  - [ ] store in db
- [ ] [collection of todolists](https://www.udemy.com/course/the-web-developer-bootcamp/learn/lecture/37867296#questions)
  - [ ] navigation
    - [ ] different routes for different todo lists
- [ ] personalized todo lists
  - [ ] user login/authentication/accounts









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
- todo list insipred by [WebDev Bootcamp (paid)](https://www.udemy.com/course/the-web-developer-bootcamp/learn/lecture/37867268)
- backend setup inspired by [MERN stack tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE)
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
      - [define `NODE_VERSION` to tell Render which version to use (otherwise uses old version by default)](https://stackoverflow.com/a/77431074/12946000)
      - define `NODE_ENV` environment variable to use dev dependencies only during development (here only `dotenv` in development)
    - frontend
      - frontend needs server URL to make API request
  - [grant backend service access to MongoDB (get render service IPs & allow them inside MongoDB)](https://www.mongodb.com/community/forums/t/cant-connect-to-mongodb-atlas-from-render-web-hosted-app/192110/5)