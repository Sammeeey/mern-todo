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