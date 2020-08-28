
// ==============================
// STEPS TO QUITING AND THEN RESTARTING TERMINAL
// ==============================

// to get back to the main folder directory, we need to type:
// " cd /Applications/MAMP/htdocs/stoneburyhomes/misc/the_net_ninja/node_auth_tutorial "













// ==============================
// STEPS TO UPDATING NODE.JS
// ==============================



// ****************
// STEP 1 - UPDATE NODE TO THE LATEST RELEASE VERION
// ****************

// " nvm install v14.5.0 "

// remember, I pulled the latest version number from the following url:
// " https://nodejs.org/en/download/current/ "

























// ==============================
// MODULES INSTALLED AND UNINSTALLED
// ==============================


// #1
// node-sass: " Rogers-iMac:node_auth_tutorial Home$ npm install node-sass " and this will include
// sass in our node auth tutorial project
// TUTORIAL 1 - Intro & Setup


// #2
// express: " Rogers-iMac:node_auth_tutorial Home$ npm install express " and this will install
// express in our project
// TUTORIAL 1 - Intro & Setup


// #3
// EJS: " Rogers-iMac:node_auth_tutorial Home$ npm install ejs " and this will install EJS in
// our project
// TUTORIAL 1 - Intro & Setup


// #4
// Mongoose: " Rogers-iMac:node_auth_tutorial Home$ npm install mongoose " and this will install
// Mongoose in our project
// TUTORIAL 1 - Intro & Setup



























// ==============================
// NODE AUTH TUTORIAL
// ==============================




// ==============================
// TUTORIAL 1 - Intro & Setup
// ==============================

// welcome to your very first node and express authentication tutorial with json web tokens
// and in this tutorial the net ninja is going to show us how to set up a simple authentication
// system using node, express, mongoDB and json web tokens and we will build an app where users
// can sign up, sign out, log in and log out and we will see how to protect certain routes or
// pages from unathenticated users and we will build a sign up form and a login foem and a
// recipes page and the recipe page will be protected from unathorized users

// before we start the net ninja said we need to know the basics of Node, Express, MongoDB and
// Mongoose to go through this course since authentication can be a really complex subject and
// we should know how to set up an Express app and hook it up with MongoDB and we should also
// understand the different types of requests we can handle using Express and those requests
// may include POST and GET requests and we should understand what middleware is and how to use
// it and we should also have a decont grasp of JavaScript and in particular asychronous code
// so we should understand promises, callbacks, async and await and json data

// to manage this authentication system we are going to be using json web tokens or JWTs and
// JWTs are one way we can implement authentication and JWT is a very popular way to
// implement auth into websites and REST APIs and JWT is extremely flexible too

// another way to add authentication to your website would be to use sessions but that will have
// to wait for another tutorial on another day and right now we want to get up and running with
// a basic Express starter app and let's start with the package.json file



// ==============================
// BACK FROM NODE_AUTH_TUTORIAL/PACKAGE.JSON
// ==============================


/*
{
    "name": "node-express-jwt-auth",
    "version": "1.0.0",
    "description": "",
    "main": "app.js",
    "dependencies": {
        "ejs": "^3.1.3",
        "express": "^4.17.1",
        "mongoose": "^5.9.23",
        "node-sass": "^4.14.1"
    },
    "devDependencies": {},
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "repository": {
        "type": "git",
        "url": "git+https://github.com/iamshaunjp/node-express-jwt-auth.git"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "bugs": {
        "url": "https://github.com/iamshaunjp/node-express-jwt-auth.git/issues"
    },
    "homepage": "https://github.com/iamshaunjp/node-express-jwt-auth#readme"
}
*/




// -------------------- END OF FILE




// now we need to install the dependencies so let's go to our integrated terminal and do the
// following:

// npm install

// and I have already installed npm so were good to go here and I have already installed nodemon
// and the next command in the integreated terminal is:

// nodemon app

// and after I run " nodemon app " I see the following result in the integrated terminal:

/*
[nodemon] 2.0.4
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node app.js`
[nodemon] clean exit - waiting for changes before restart
[cursor here]
*/

// and this is working as expected and now let's go to the app.js file 1 -


// now were back from the  app.js file 1 -

// let's install sass

// #1
// node-sass: " Rogers-iMac:node_auth_tutorial Home$ npm install node-sass " and this will include
// sass in our node auth tutorial project
// TUTORIAL 1 - Intro & Setup

// now copy over the following files from the net ninja's GitHub repository:

// public/smoothie.png
// public/styles.css

// views/home.ejs
// views/smoothies.ejs
// views/partials/header.ejs
// views/partials/footer.ejs

// .gitignore
// package.json

// remember we have to install the dependencies in order for this project to work and we can find
// the dependencies in the package.json file and those dependencies are: Express, EJS and Mongoose

// and let's start by installing Express for this project

// #2
// express: " Rogers-iMac:node_auth_tutorial Home$ npm install express " and this will install
// express in our project
// TUTORIAL 1 - Intro & Setup

// #3
// EJS: " Rogers-iMac:node_auth_tutorial Home$ npm install ejs " and this will install EJS in
// our project
// TUTORIAL 1 - Intro & Setup

// #4
// Mongoose: " Rogers-iMac:node_auth_tutorial Home$ npm install mongoose " and this will install
// Mongoose in our project
// TUTORIAL 1 - Intro & Setup


// after installing Express, EJS and Mongoose, when we go to the integrated terminal and run:

/*
Rogers-iMac:node_auth_tutorial Home$ nodemon app
[nodemon] 2.0.4
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node app.js`
[cursor here]
*/

// so everything is now working which is great

// and when I go to the home page or " localhost:3006 " I see our home page so everything is
// working as expected

// our file directory looks like:

// node_modules
// public
//      smoothie.png
//      styles.css
// views
//      partials
//          footer.ejs
//          header.ejs
//      404.ejs
//      home.ejs
//      smoothies.ejs
// app-node-auth-tutorial.js
// app.js
// package-lock.json
// package.json 




// now let's go back to the app.js file 1 -



// ==============================
// BACK FROM NODE_AUTH_TUTORIAL/APP.JS -- NOTES PERTAIN TO 1 -
// ==============================


// 1 -
// coming from the app-node-auth-tutorial.js file
// this file or app.js will kickstart our application  

// import in Express
const express = require( 'express' );

// import in Mongoose
const mongoose = require( 'mongoose' );

// create an instance of an Express app
const app = express();

// use express.static(); to serve static files and make " public " the argument to
// express.static(); and this will enable us to use the " public " folder to serve static
// files
app.use( express.static( 'public' ) );

// register the view engine as ejs
app.set( 'view engine', 'ejs' );

// Brad Schiff said we have to make our port number dynamic in order for our app to work on Heroku
let port = process.env.PORT || 3006;

// create the database connection
// remember net-ninja-node is the database user name and net-ninja-auth-tutorial is the database
// name and remember to get the connection string we need to go to the Clusters page and then
// press on the connect button and then a modal will pop up and inside the model will be 3
// options and we want to choose the option that says " Connect your application " and after we
// click on " Connect your application " we will see a new pop up model and inside this modal is a
// connection string and let's copy that connection string and then place it below

// and referring to the connection string below, the net ninja said everything after
// " net-ninja-auth-tutorial " can be deleted since we don't need any of that
const dbURI = 'mongodb+srv://net-ninja-node:test1234@cluster1.ygd2v.mongodb.net/net-ninja-auth-tutorial';

mongoose.connect( dbURI, { useNewUrlParser : true, useUnifiedTopology : true } )
    .then( ( result ) => app.listen( port ) )
    .catch( ( error ) => console.log( error ) );

// routes
// route #1
// route is "/"
// renders the home page
app.get( '/', ( req, res ) => {

    res.render( 'home' );

} );

// route #2
// route is "/smoothies"
// renders the smoothies page
app.get( '/smoothies', ( req, res ) => {

    res.render( 'smoothies' );

} );

// route #3
// create the 404 response and manually set the status code to 404
// no route and if we get to this part in the code app.use(); will always run
// renders the 404 page
// since I added route #4 myself, remember to add a view for the 404 page
app.use( ( req, res ) => {

    res.status( 404 ).render( '404', { title : '404' } );

} );

// End of 1 -




// -------------------- END OF FILE






// ==============================
// BACK FROM NODE_AUTH_TUTORIAL/VIEWS/HOME.EJS
// ==============================


/*
<%- include( './partials/header.ejs' ) %>

    <div class="home">

        <div class="smoothie">

            <img src="/smoothie.png" alt="">

        </div>

        <div class="heading">

            <h2>Smoothie Recipes</h2>
            <h3>By Ninjas For Ninjas</h3>

            <a href="/smoothies" class="btn">View Recipes</a>

        </div>

    </div>

<%- include( './partials/footer.ejs' ) %>
*/



// -------------------- END OF FILE






// ==============================
// BACK FROM NODE_AUTH_TUTORIAL/VIEWS/SMOOTHIES.EJS
// ==============================


/*
<%- include( './partials/header.ejs' ) %>

    <ul class="recipes">

        <li class="recipe">

            <img src="/smoothie.png" alt="smoothie recipe icon">

            <h4>Banana Boost</h4>
            <p>Banana, Vanilla ice cream, Milk</p>

        </li>

        <li class="recipe">

            <img src="/smoothie.png" alt="smoothie recipe icon">

            <h4>Tropical Twist</h4>
            <p>Peach, Pinapple, Apple juice</p>

        </li>

        <li class="recipe">

            <img src="/smoothie.png" alt="smoothie recipe icon">

            <h4>Protein Packer</h4>
            <p>Oats, Peanut butter, Milk, Banana, Blueberries</p>

        </li>

        <li class="recipe">

            <img src="/smoothie.png" alt="smoothie recipe icon">

            <h4>Banana Boost</h4>
            <p>Banana, Vanilla ice cream, Milk</p>
        </li>

        <li class="recipe">

            <img src="/smoothie.png" alt="smoothie recipe icon">

            <h4>Tropical Twist</h4>
            <p>Peach, Pinapple, Apple juice</p>

        </li>

        <li class="recipe">

            <img src="/smoothie.png" alt="smoothie recipe icon">

            <h4>Protein Packer</h4>
            <p>Oats, Peanut butter, Milk, Banana, Blueberries</p>

        </li>

    </ul>  

<%- include( './partials/footer.ejs' ) %>
*/




// -------------------- END OF FILE







// ==============================
// BACK FROM NODE_AUTH_TUTORIAL/VIEWS/404.EJS
// ==============================


/*
<%- include( './partials/header.ejs' ) %>

    <div class="not-found content">Oops, page not found :)</div><br>

<%- include( './partials/footer.ejs' ) %>
*/




// -------------------- END OF FILE






// ==============================
// BACK FROM NODE_AUTH_TUTORIAL/VIEWS/PARTIALS/HEADER.EJS
// ==============================


/*
<html lang="en">

    <head>

        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="/styles.css">

        <title>Document</title>

    </head>

</html>

<body>

    <nav>
        <h1><a href="/">Ninja Smoothies</a></h1>
    </nav>
*/



// -------------------- END OF FILE






// ==============================
// BACK FROM NODE_AUTH_TUTORIAL/VIEWS/PARTIALS/FOOTER.EJS
// ==============================


/*
    <footer>Copyright 2020 Ninja Smoothies</footer>

</body>

</html>

*/



// -------------------- END OF FILE







// ==============================
// BACK FROM NODE_AUTH_TUTORIAL/PUBLIC/STYLES.CSS
// ==============================


/*
// general styles
body {
    margin : 20px 40px 20px 40px;

    font-size      : 1.2rem;
    letter-spacing : 1px;
    
    background : rgba( 250, 250, 250, 1 );
}

h1, h2, h3, h4, ul, li, a, p, input, label, button, div, footer {
    margin  : 0;
    padding : 0;

    font-family : 'Quicksand', sans-serif;
    color       : rgba(68, 68, 68, 1);
  }

ul {
    list-style-type : none;
}

a {
    text-decoration : none;
}

.btn {
    border-radius : 36px;

    background : rgba(254, 233, 150, 1);
}

.error {
    margin : 10px 2px 10px 2px;

    font-size   : 0.8em;
    font-weight : bold;
    color       : rgba(255, 0, 153, 1);
}


// nav styles
nav {
    display         : flex;
    justify-content : space-between;
    align-items     : flex-end;
    margin-bottom   : 120px;
}

nav ul {
    display     : flex;
    align-items : center;
}

nav li {
    margin-left : 20px;
}

nav li a {
    display : block;
    padding : 10px 16px;

    font-size      : 0.8em;
    font-weight    : 700;
    letter-spacing : 2px;
    text-transform : uppercase;
}


// form styles
form h2 {
    margin-bottom : 40px;

    font-size   : 2.4em;
    font-weight : 900; 
}

form {
    width   : 360px;
    margin  : 0 auto;
    padding : 30px;

    box-shadow    : 1px 2px 3px rgba( 0, 0, 0, 0.1 );
    border-radius : 10px;

    background : rgba( 255, 255, 255, 1 );
}

input {
    width   : 100%;
    padding : 10px 12px;

    border        : 1px solid rgba(221, 221, 221, 1);
    border-radius : 4px;

    font-size : 1em;
}

label {
    display : block;
    margin  : 20px 0 10px 0;
}

button {
    display : block;
    margin  : 30px 0 0 0;
    padding : 10px 16px;

    border        : 0;
    border-radius : 36px;
    
    font-size      : 0.8em;
    font-weight    : 700;
    letter-spacing : 2px;
    text-transform : uppercase;

    background : rgba(254, 233, 150, 1);
}


// home page
.home {
    display     : flex;
    align-items : center;
}

.home > .smoothie > img {
    width  : 250px;
    margin : 0 40px 0 0;
}

.home > .heading > h2 {
    margin : 0 0 10px 0;

    font-size : 3em;
}

.home > .heading > h3 {
    margin-bottom : 0 0 10px 2px;

    font-size : 1.6em;
    color     : rgba(153, 153, 153, 1);
}

.home > .heading > a {
    display : inline-block;
    margin  : 20px 0 0 0;
    padding : 12px 18px 12px 18px;

    font-size      : 0.8em;
    font-weight    : bold;
    text-transform : uppercase;
}


// smoothie page
.recipes {
    display               : grid;
    grid-template-columns : 1fr 1fr 1fr;
    grid-gap              : 80px 30px; // row gap and then column gap
    max-width             : 1200px;
    margin                : 80px auto;
}

.recipe {
    display   : inline-block;
    position  : relative;
    padding   : 0 20px 30px 20px;

    border-radius : 20px;

    text-align : center;

    background: rgba(255, 255, 255, 1 );
}

.recipe img {
    width  : 100px;
    margin : -30px auto 20px auto;
}


// footer styles
footer {
    margin : 120px 0 0 0;

    color      : rgba(170, 170, 170, 1);
    text-align : center;
}


// 404 page styles
.not-found {
    margin-left : 20px;
}
*/




// -------------------- END OF FILE




// at the end of this tutorial, I went to the integrated terminal and typed in " nodemon app "
// and the result was:

/*
Rogers-iMac:node_auth_tutorial Home$ nodemon app
[nodemon] 2.0.4
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node app.js`
*/

// so everything is working as expected and in the next tutorial we will start creating the
// authentication routes and controllers






// ==============================
// TUTORIAL 2 - Auth Routes & Controllers
// ==============================

// I'm going to start this tutorital by creating a repo on GitHub called " course-node-auth "
// and then uploading my project files to my GitHib repo

// STEP 1: Rogers-iMac:node_auth_tutorial Home$ echo "# course-node-auth" >> README.md ( according
// to GitHib's documentation )

// STEP 2: Rogers-iMac:node_auth_tutorial Home$ git init

// STEP 3: Rogers-iMac:node_auth_tutorial Home$ git add README.md ( from GitHub documentation )

// STEP 4: Rogers-iMac:node_auth_tutorial Home$ git status

// STEP 5: Rogers-iMac:node_auth_tutorial Home$ git add .

// STEP 6: Rogers-iMac:node_auth_tutorial Home$ git commit -m "first commit" ( from GitHub documentation )

// STEP 7: Rogers-iMac:node_auth_tutorial Home$ git remote add origin git@github.com:sandstone1/course-node-auth.git
// ( from GitHub documentation )

// STEP 8: Rogers-iMac:node_auth_tutorial Home$ git push -u origin master


// updating my GitHub repository going forward:

// " git status "
// " git add . "
// " git commit -m " Message " "
// " git push origin master "

// 