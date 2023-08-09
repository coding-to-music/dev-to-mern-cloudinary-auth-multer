# dev-to-mern-cloudinary-auth-multer

# 🚀 A DEV.to clone using MERN stack, React 17 and MongoDB 🚀

## MERN Stack

### React / Express / MongoDB / Redux

https://github.com/coding-to-music/dev-to-mern-cloudinary-auth-multer

https://dev-to-mern-cloudinary-auth-multer.vercel.app/

by Eknoorpreet Singh https://github.com/eknoorpreet

https://github.com/eknoorpreet/dev.to-clone

## Environment Values

```
CLOUDINARY_CLOUD_NAME=""
CLOUDINARY_API_KEY=""
CLOUDINARY_API_SECRET=""

In `client/.env`:

REACT_APP_BASE_URL=http://localhost:5000/api
REACT_APP_SOCKET_IO_URL=http://localhost:5000
REACT_APP_GOOGLE_CLIENT_ID=<GOOGLE_CLIENT_ID>
REACT_APP_FB_APP_ID=<FACEBOOK_CLIENT_ID>

In `.env`:

DB_USER = //user name for db
DB_PASSWORD = //password for db
DB_NAME = // name for db
JWT_KEY = //random string
COOKIE_KEY = //random string;
NODE_ENV = 'development';
CLIENT_URL = //the port of React app, ex: 'http://localhost:3000';

//Google will provide you with the following credentials
GOOGLE_API_KEY = //API key

//Github will provide you with the following credentials
GH_CLIENT_ID = //Github's Client ID
GH_CLIENT_SECRET = //Github's Client Secret

// Twitter will provide you with the following credentials
TWITTER_CONSUMER_KEY = //Twitter's Consumer key
TWITTER_CONSUMER_SECRET = //Twitter's Consumer Secret
```

## GitHub

```java
git init
git add .
git remote remove origin
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:coding-to-music/dev-to-mern-cloudinary-auth-multer.git
git push -u origin main
```

## upgrade root-level (server) package.json

```
 axios                                                        ^0.26.1  →    ^1.2.2
 body-parser                                                  ^1.19.0  →   ^1.20.1
 cloudinary                                                   ^1.28.1  →   ^1.33.0
 dotenv                                                       ^16.0.0  →   ^16.0.3
 express                                                      ^4.17.1  →   ^4.18.2
 express-validator                                            ^6.12.0  →   ^6.14.2
 google-auth-library                                          ^7.10.2  →    ^8.7.0
 jsonwebtoken                                                  ^8.5.1  →    ^9.0.0
 mongoose                                                     ^5.13.2  →    ^6.8.3
 mongoose-unique-validator                                     ^2.0.3  →    ^3.1.0
 passport                                                      ^0.5.2  →    ^0.6.0
 socket.io                                                     ^4.4.1  →    ^4.5.4
 uWebSockets.js             github:uNetworking/uWebSockets.js#v20.4.0  →  v20.19.0
 uuid                                                          ^8.3.2  →    ^9.0.0
```

## upgrade client package.json

```
 @testing-library/jest-dom    ^5.12.0  →  ^5.16.5
 @testing-library/react       ^11.2.7  →  ^13.4.0
 @testing-library/user-event  ^12.8.3  →  ^14.4.3
 easymde                      ^2.16.1  →  ^2.18.0
 query-string                  ^7.0.1  →   ^8.1.0
 react                        ^17.0.2  →  ^18.2.0
 react-dom                    ^17.0.2  →  ^18.2.0
 react-login-github            ^1.0.7  →   ^1.0.8
 react-markdown                ^8.0.0  →   ^8.0.4
 react-router-dom              ^5.2.0  →   ^6.6.2
 react-scripts                 ^5.0.0  →   ^5.0.1
 react-simplemde-editor        ^5.0.2  →   ^5.2.0
 react-transition-group        ^4.4.2  →   ^4.4.5
 socket.io-client              ^4.4.1  →   ^4.5.4
 web-vitals                    ^1.1.2  →   ^3.1.1

Run npm install to install new versions.
```

## Removed from client/package.json

```
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^14.4.3",
    "react-facebook-login": "^4.1.1",
    "react-github-login": "^1.0.3",
    "react-google-login": "^5.2.2",
    "react-login-github": "^1.0.8",
```

## Overview

<h1 align="center">
  <br>
  <a href="https://devfrom.netlify.app"><img src="https://res.cloudinary.com/practicaldev/image/fetch/s--QG4or-x4--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/jrzutxzs0l43wqvw5k8z.png" alt="DEV.to Clone" width="200"></a>
  <br>
  <br>
  <b>DEV.to Clone</b>
  <br>
</h1>

[![Netlify Status](https://api.netlify.com/api/v1/badges/c804d244-6f9d-4e37-be5d-3a8f5bd4e414/deploy-status)](https://app.netlify.com/sites/devfrom/deploys)

[![forthebadge](https://svgshare.com/i/fcr.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)

> An DEV.to clone created with MongoDB, Express, React, Node, and Socket.io

![](screenshots/cover.png)

## [Live Site](https://devfrom.netlify.app)

## [Backend API](https://devfrom.herokuapp.com/)

## Tech

- UI: <a href="https://github.com/facebook/react">React</a>
- Routing: <a href="https://github.com/ReactTraining/react-router">React Router</a>
- Real-time Notifications: <a href="https://github.com/socketio/socket.io">Socket.io</a>
- Backend: <a href="https://github.com/expressjs/express">Express</a>
- Database: <a href="https://github.com/mongodb/mongo">MongoDB</a>
- ORM: <a href="https://github.com/Automattic/mongoose">Mongoose</a>
- Image hosting: <a href="https://cloudinary.com/">Cloudinary</a>

## Features

- Login / Signup
- Google / Facebook / Twitter / GitHub OAuth
- Create / Remove / Update / Delete Post
- Like / Unicorn / Bookmark Post
- Reading List
- Create / Add Tags to Post
- Follow Tags
- Find Posts by Tags
- Comment / Replies
- Like Comment
- Edit / Delete Comment
- View Profile
- Edit Profile
- Follow User
- Search Posts
- Real-time Notifications
- Skeleton Loading

## How to setup locally

### Clone

Clone the repo to your local machine using `https://github.com/eknoorpreet/dev.to-clone`

### Setup

Install npm dependencies in both `client` and `server` subdirectories using `npm install`

```shell
$ cd server && npm install
$ cd client && npm install
```

Set up a MongoDB database either locally or online via <a href='https://www.mongodb.com/cloud/atlas'>MongoDB Atlas</a>

Create a <a href="https://cloudinary.com/">Cloudinary account</a>

Create a new project on <a href='https://console.cloud.google.com'>Google Cloud Platform</a>

Create a `.env` file in in both `client` and `server` subdirectories

Set up the following environment variables

In `client/.env`:

```js
REACT_APP_BASE_URL=http://localhost:5000/api
REACT_APP_SOCKET_IO_URL=http://localhost:5000
REACT_APP_GOOGLE_CLIENT_ID=<GOOGLE_CLIENT_ID>
REACT_APP_FB_APP_ID=<FACEBOOK_CLIENT_ID>
```

In `server/.env`:

```js
DB_USER = //user name for db
DB_PASSWORD = //password for db
DB_NAME = // name for db
JWT_KEY = //random string
COOKIE_KEY = //random string;
NODE_ENV = 'development';
CLIENT_URL = //the port of React app, ex: 'http://localhost:3000';

//cloundiary will provide you with the following credentials
CLOUDINARY_CLOUD_NAME = //cloud name
CLOUDINARY_API_KEY = //API key
CLOUDINARY_API_SECRET; //API secret

//Google will provide you with the following credentials
GOOGLE_API_KEY = //API key

//Github will provide you with the following credentials
GH_CLIENT_ID = //Github's Client ID
GH_CLIENT_SECRET = //Github's Client Secret

// Twitter will provide you with the following credentials
TWITTER_CONSUMER_KEY = //Twitter's Consumer key
TWITTER_CONSUMER_SECRET = //Twitter's Consumer Secret
```

Finally, run <code>npm start</code> in both `client` and `server` subdirectories

```shell
$ npm run start
$ cd client && npm run start
```

## Screenshots

### Login / Signup

![](screenshots/login-signup.gif)

### Like / Unicorn / Bookmark

![](screenshots/like-unicorn-bookmark.gif)

### New Post

![](screenshots/new-post.gif)

### Comments and Replies

![](screenshots/comments-replies.gif)

### Real-time Notifications

![](screenshots/notif.gif)

### Follow Tags

![](screenshots/tags.gif)

### Edit Profile

![](screenshots/edit-profile.gif)

### Search

![](screenshots/search.gif)

## About the Website: Maper

- A location-based website using React as Frontend and NodeJs, ExpressJS as backend, and MongoDB as Database. On this website, I had use MapBox for the world map and React-Mapbox-gl for configuration. We can select the place where we had visited and added the photo URL, so the entry will be seen on the map and in the visited place area. We can delete or modify the changes in the Entry we had created. It is a responsive website with live location of a point on the map. The Backend is deployed on Heroku and the frontend is deployed on Netlify.

#### The Password for the Entry: maper01

## Technology Stack

- React js
- Node js
- Express js
- MongoDB
- MapBox, React Mapbox-gl
- Heroku
- Netlify
- Flexbox
- Material-ui

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
