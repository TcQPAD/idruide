# Grocery List Manager - FullStack

This repository contains the code for both back and front ends of the grocery list manager.
The backend starter I used comes from one of my repository : https://github.com/TcQPAD/starter-express-es6-rest

I developed this starter for the Polytech Nice Conseil, which is an association that intents to get the Junior Entreprise label.

# Subject

This document intends to iDruide applicants for technical role.

**Full Stack Web Developer**

As a full stack developer, your role will be to develop a backend server and a front end client.
This exercise must be think in the same paradigm.
Create a web application that allow a user to fill up and manage a grocery list.
No need to persist data in a database, memory is enough.

**Requirements :**

- NodeJS (Express or Koa) for the backend.
- Use any front end framework your are comfortable with (Angular, React, VueJs, ...)
- Use a state container (Redux, vuex, Sinux, ...)

**Plus:**
- Websocket (socket.io) / SSE / AJAX
- SASS
- Module Bundler (Webpack, Gulp, Grunt, or other)

## Technologies

### Backend

I used NodeJS v7.8.0 along with npm v4.2.0 to write and run the backend.

I ran some unit tests for both set of endpoints that the backend exposes,
if you'd wish to run them, you'll need to install mocha globally :

`npm i -g mocha`

and then :

```
$   cd backend/app
$   mocha
```

To run the backend, just do the following:

```
$   cd backend/app
$   npm i
$   npm start
```

At the moment, npm start boots up the server using nodemon. Nodemon
is a dev utility that will recompile files with changes.
In production, you'll definitely not want to use nodemon as it restarts the server
each time it detects a change in the hierarchy of the server.
Use `node` instead to boot up the server.

### Frontend

I used Angular v5.2.10 along with Angular CLI v1.7.4.
I used Angular Material NPM library to build a (non-ugly...) user interface
quickly.
I also chose this library because of the many components it provides, the stability
of the library, the number of contributors, and the usage easiness.

To start up the frontend application, open a terminal and type :

```
$   cd frontend/grocery-list-manager
$   npm i
$   npm start
```

This will open your browser and connect to http://localhost:4200/