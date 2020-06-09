
## Productivity App
[https://productivity-app.netlify.app/](https://productivity-app.netlify.app/)  
A productivity app where user can insert a task, mark as complete and delete the task. Build with React Ecosystem as part of a course on Linkedin Learning(Lynda)

## Motivation
I want to make a react-redux app and this tutorial gives me the clearest understanding of what I need to accomplish.

## Getting Started
These instructions will guild you through the inital setting up process and 
highlight what the apps can do for you to explore on your own.  


## Notable feature
- Interaction with the page will have lasting effect (app does not reset on refresh or even on different browser) (redux-persist)
- Redux and react ecosystem helps the code follow better programming practices
- Fully written code testing files for each components of the ecosystem
- Nicely incorporated js array prototype function with state (map, filter, concat)


## Prequesite
Nodejs installed for local running purpose    
check out Node installation instruction [here](https://nodejs.org/en/)  
Netlify set up if you would like to continuous deploy and host your own client side app
check out Netlify instruction [here](https://www.netlify.com/)  
Or you use any other hostin site, including github page (the site is static anyway)
Heroku set up if you want to host your own server  
chek out Heroku installation [here](https://devcenter.heroku.com/start)


## Installing and Running
Clone the repo
```
$ git clone https://github.com/zahego/Covid-Tracker-19.git
```
Run Node command to create node_modules folder from the information in package.json, which hold all the necessary dependencies
```
$ npm install
```
Run Node command for local testing
```
$ npm start
```

## Deploying on Netlify
access the client folder  
create a prouction build of the app
```
$ yarn build
```
install Netlify on your local repo
```
$ npm install netlify-cli -g
```
login to your Netlify account
```
$ netlify login
```
start the deploy process
```
$ netlify deploy
```
choose the option to Create and Config a new site  
change the site name to your preference  
set the deploy path to   
```
$ ./build
```

## Deploying on Heroku
access the server folder  
add a file name Procfile in and specify the content inside the file
```
web: node index.js
```
add and commit
```
$ git add .
$ git commit -m "add Procfile"
```
login to Heroku
```
$ heroku login
```
add heroku remote repo
```
$ heroku git:remote -a [name of your server]
```
push from local repo to heroku remote repo
```
$ git push heroku master
```
remember to add the new server link to the cosnt ENDPOINT at src/todo/thunk.js



## What you can do
- create a new task
- mark a task as completed
- delete the task
- check out if any old task was not completed with a red highlight

## Server
[http://productivity-app-server.herokuapp.com/](http://productivity-app-server.herokuapp.com/)

## Technologies stack
client:  
- [React](https://reactjs.org/) - framework
- [react-redux](https://react-redux.js.org/) - state management with flux design pattern
- [redux-thunk](https://github.com/reduxjs/redux-thunk) - help reducer stay as a pure function and do side effect logic from outside
- [redux-reselect](https://github.com/reduxjs/reselect) - selector that make accessing state a function for more logic display
- [styled component](https://styled-components.com/) - target display css

server:  
- [webpack](https://webpack.js.org/)- js module builder
- [express](https://expressjs.com/) - improve the working experience with web building
- [Nodejs](https://nodejs.org/en/download/) - JavaScript runtime environment that executes JavaScript code outside a web browser
- [style loader]() - let css style be loaded like a component
- [babel](https://babeljs.io/) -  transcompiler to turn modern js syntax to work with older browser
- [react-hot-loader]() - reload local host on undate

testing:
- [mocha-chai](https://mochajs.org/) - testing framework to run on back server
- [fetch-mock](https://www.npmjs.com/package/fetch-mock) - fake a HTTP fetch as a test
- [sinon](https://sinonjs.org/) - testing framework


## Contributors
Minh Tran 


## License
This project is licensed under the MIT License

## Challenges and resolutions
- Putting this up on heroku server is rather difficult since babel, webpack and heroku doesn't particularly mash well together. The issue was that Heroku doesn't include dev-dependencies when render, so the solution was to make heroku not ignore the dev-dependecies on package.json
- I tried to name the const with the most elaborate name possible to further understand the flow of data. This leads to some issue when I tried to access some constants in the server, but at least I understand it better.
- Testing thunk is a big issue and I constantly recieving errors, but it work eventually.
- spread operation also give me anxiety sometimes.

