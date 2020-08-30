
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


// now our project files are in the GitHub repository and now we need to create a repository
// in Heroku and we can do that by typing the following in the integrated terminal:

// STEP 9: Rogers-iMac:node_auth_tutorial Home$ heroku create c-node-auth

// and after I created this repository in Heroku, Heroku generated the following Heroku URL
// " https://c-node-auth.herokuapp.com/ " 

// now we have to add Heroku as a remote repository and we do that by going to the Heroku
// website and then we press on the " deploy " tab and then inside this tab we want to copy
// " heroku git:remote -a "Heroku Project Name" " and this line of code will add Heroku as
// a remote repository

// STEP 10: Rogers-iMac:node_auth_tutorial Home$ heroku git:remote -a c-node-auth

// now if I do:
/*
Rogers-iMac:node_auth_tutorial Home$ git remote
*/

// then I get the following result ( so I have 2 repositories now, Heroku and origin or GitHUb )
/*
heroku
origin
*/

// now let's push our project files to our Heroku repository

// STEP 11: Rogers-iMac:node_auth_tutorial Home$ git push heroku master

// after pressing enter on " git push heroku master ", I got the following result in the integrated
// terminal:

/*
Rogers-iMac:node_auth_tutorial Home$ git push heroku master
Counting objects: 18, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (17/17), done.
Writing objects: 100% (18/18), 55.66 KiB | 9.28 MiB/s, done.
Total 18 (delta 0), reused 0 (delta 0)
remote: Compressing source files... done.
remote: Building source:
remote:
remote: -----> Node.js app detected
remote:
remote: -----> Creating runtime environment
remote:
remote:        NPM_CONFIG_LOGLEVEL=error
remote:        NODE_ENV=production
remote:        NODE_MODULES_CACHE=true
remote:        NODE_VERBOSE=false
remote:
remote: -----> Installing binaries
remote:        engines.node (package.json):  unspecified
remote:        engines.npm (package.json):   unspecified (use default)
remote:
remote:        Resolving node version 12.x...
remote:        Downloading and installing node 12.18.3...
remote:        Using default npm version: 6.14.6
remote:
remote: -----> Installing dependencies
remote:        Installing node modules
remote:
remote:        > ejs@3.1.3 postinstall /tmp/build_87dba27f/node_modules/ejs
remote:        > node --harmony ./postinstall.js
remote:
remote:
remote:        > node-sass@4.14.1 install /tmp/build_87dba27f/node_modules/node-sass
remote:        > node scripts/install.js
remote:
remote:        Downloading binary from https://github.com/sass/node-sass/releases/download/v4.14.1/linux-x64-72_binding.node
remote:        Download complete
remote:        Binary saved to /tmp/build_87dba27f/node_modules/node-sass/vendor/linux-x64-72/binding.node
remote:        Caching binary to /tmp/npmcache.dR1WB/_cacache/node-sass/4.14.1/linux-x64-72_binding.node
remote:
remote:        > node-sass@4.14.1 postinstall /tmp/build_87dba27f/node_modules/node-sass
remote:        > node scripts/build.js
remote:
remote:        Binary found at /tmp/build_87dba27f/node_modules/node-sass/vendor/linux-x64-72/binding.node
remote:        Testing binary
remote:        Binary is fine
remote:        added 266 packages in 5.585s
remote:
remote: -----> Build
remote:
remote: -----> Caching build
remote:        - node_modules
remote:
remote: -----> Pruning devDependencies
remote:        audited 266 packages in 2.457s
remote:
remote:        7 packages are looking for funding
remote:          run `npm fund` for details
remote:
remote:        found 0 vulnerabilities
remote:
remote:
remote: -----> Build succeeded!
remote:  !     This app may not specify any way to start a node process
remote:        https://devcenter.heroku.com/articles/nodejs-support#default-web-process-type
remote:
remote: -----> Discovering process types
remote:        Procfile declares types     -> (none)
remote:        Default types for buildpack -> web
remote:
remote: -----> Compressing...
remote:        Done: 28.2M
remote: -----> Launching...
remote:        Released v3
remote:        https://c-node-auth.herokuapp.com/ deployed to Heroku
remote:
remote: Verifying deploy... done.
To https://git.heroku.com/c-node-auth.git
 * [new branch]      master -> master
Rogers-iMac:node_auth_tutorial Home$
*/

// and I tried to open the heroku provided URL and I got an error on the web page that said
// " Application error " so I went to the suggested link at
// " https://devcenter.heroku.com/articles/nodejs-support#default-web-process-type "
// to see if I could solve the error

// I tried to update the package.json file with " "start": "node app.js" " and
// " "engines": { "node": "10.x" } " but I'm still getting the same error so let's move
// on with the tutorial and maybe solve this problem later


// BACK TO TUTORIAL 2

// before we actually code any routes or controller functions for our authentication
// process the net ninja wants to go over all the different routes and handler functions
// that we will be making and how we will structure the routes and functions and were doing this
// so that we can get the big picture of what were doing

// and we will use an MVC approach to creating this application and that just means that we
// will be extracting all of our auth route handler functions into a separate auth controller
// file and our auth routes will look like the following:

// Auth Routes

// 1 - /signup      GET         sign up page
// 2 - /login       GET         log in page
// 3 - /signup      POST        create a new user in database
// 4 - /login       POST        authenticate a current user
// 5 - /logout      GET         log a user out

// and in this tutorial we are going to focus on the routes 1 - 4

// now let's start flushing out these routes and the first thing we need to do is to create
// folder called " routes " and then inside this folder we need to create a file for our
// authentication routes and we will call this file " authRoutes.js " and let's go to the
// authRoutes.js file 1 -



// ==============================
// BACK FROM NODE_AUTH_TUTORIAL/ROUTES/AUTHROUTES.JS -- NOTES PERTAIN TO 1 -, 2 -
// ==============================


// 1 -

/*
// the first thing we need to do is import in the router from the Express package
// and really we are going to destructure the Router off the Express package
const { Router } = require( 'express' );

// now let's create a new instance of Router and then all we do is attach different
// requests to this router instance
const router = new Router();
*/

// instead of using the above code to create a router instance, I'm going to stick
// with the code we used in the node crash course

// import in Express
const express = require( 'express' );


// 2 -

// now were coming from the authControllers.js file 1 - and now let's import in our controller
// functions and we do that by doing " require( '../controllers/authController' ); " and then
// let's register these controller functions inside the relavant routes below

// and separating out the controller functions makes our code way more readable and managable
const authController = require( '../controllers/authController' );

// next we need to create the " signup " and " login " views so let's create the " signup.ejs "
// and " login.ejs " files and place both files inside the views folder and now let's go to
// the signup.ejs file 1 -

// End of 2 -


// next let's create a new Express router and we do that by creating a new instance of a router
// object and the code to create a new instance of the router object is " express.Router(); "

// create a new Express router instance
const router = express.Router();


// route #1
// route is "/signup"
// renders the sign up page
router.get( '/signup', authController.signup_get );


// route #2
// route is "/signup"
// create a new user in database
router.post( '/signup', authController.signup_post );


// route #3
// route is "/login"
// renders the log in page
router.get( '/login', authController.login_get );


// route #4
// route is "/login"
// authenticate a current user
router.post( '/login', authController.login_post );

// and remember we are going to separate the handler functions into their own auth controller
// file so let's first create a folder called " controllers " and then inside the controllers
// folder let's create a file called " authController.js " and let's go to the
//  " authController.js " file 1 -


// let's export the router and then go to the app.js file 2 - to import in the router
module.exports = router;

// End of 1 -





// -------------------- END OF FILE






// ==============================
// BACK FROM NODE_AUTH_TUTORIAL/CONTROLLERS/AUTHCONTROLLER.JS -- NOTES PERTAIN TO 1 -
// ==============================


// 1 -
// controller #1
// renders the sign up page
module.exports.signup_get = ( req, res ) => {

    res.render( 'signup' );

};

// controller #2
// create a new user in database
module.exports.signup_post = ( req, res ) => {

    // for now, let's just send some text to the webpage
    res.send( 'new signup' );

};


// controller #3
// renders the log in page
module.exports.login_get = ( req, res ) => {

    res.render( 'login' );

};


// controller #4
// authenticate a current user
module.exports.login_post = ( req, res ) => {

    // for now, let's just send some text to the webpage
    res.send( 'new login' );

};

// now let's go to the authRoutes.js file 2 - and import in these controllers 

// End of 1 -




// -------------------- END OF FILE







// ==============================
// BACK FROM NODE_AUTH_TUTORIAL/VIEWS/SIGNUP.EJS -- NOTES PERTAIN TO 1 -
// ==============================


/*
<!--
    // 1 -
    // and after we bring in the partials and add the h1 tag, let go to the login.ejs file 1 -
-->

<%- include( './partials/header.ejs' ) %>

    <h1>Sign Up</h1>

<%- include( './partials/footer.ejs' ) %>
*/


// -------------------- END OF FILE






// ==============================
// BACK FROM NODE_AUTH_TUTORIAL/VIEWS/LOGIN.EJS -- NOTES PERTAIN TO 1 -
// ==============================


/*
<!--
    // 1 -
    // and after we bring in the partials and add the h1 tag, let go to back to the
    // so now we have our views which we are rendering in the authController.js file and
    // we have all of our controller functions which we are registering for each route and
    // the only thing left to do is register these routes in our application so let's go back
    // to the app.js file 2 -
-->

<%- include( './partials/header.ejs' ) %>

    <h1>Log In</h1>

<%- include( './partials/footer.ejs' ) %>
*/



// -------------------- END OF FILE






// ==============================
// BACK FROM NODE_AUTH_TUTORIAL/APP.JS -- NOTES PERTAIN TO 2 - and 3 -
// ==============================


// this file or app.js will kickstart our application  

// import in Express
const express = require( 'express' );

// import in Mongoose
const mongoose = require( 'mongoose' );

// 2 -
// import in the router
// and now all we have to do is make authRoutes the argument to app.use(); bwlow and this is equal
// to pasting in all the routes instead and let's go to 3 - below
const authRoutes = require( './routes/authRoutes' );

// End of 2 -

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



// 3 -
// use " app.use( authRoutes ); " to bring in all the routes from the authRoutes.js file and
// remember " app.use( authRoutes ); " has to go before route #3 below, otherwise route #3 will
// run and everytime we go to " localhost:3006/signup ", for example, we will get a 404 page
app.use( authRoutes );

// now let's go to the homepage and test our the following 2 routes: " /signup " and " /login "
// and I see everything is working as expected

// we also want to test our post requests or routes #2 and #4 in the authRoutes.js file but we
// don't have the signup or login forms created yet so we need a quick way to test these two routes
// and in the next lesson we will use a tool called " postman " to test these 2 routes

// End of 3 -


// route #3
// create the 404 response and manually set the status code to 404
// no route and if we get to this part in the code app.use(); will always run
// renders the 404 page
app.use( ( req, res ) => {

    res.status( 404 ).render( '404', { title : '404' } );

} );





// -------------------- END OF FILE












// ==============================
// TUTORIAL 3 - Testing Routes with Postman
// ==============================

// we want to be able to test the POST routes in our application and to do that we will use
// a tool called postman and postman allows us to simulate requests to a server when we don't
// have a front end to do that for us, like in our case where we don't have any forms created
// yet so that we can test the POST request but we can use postman instead to simulate those
// requests

// and let's go download postman and then open postman and on the postman website it says:
// " What is Postman? Postman is a collaboration platform for API development. Postman's features
// simplify each step of building an API and streamline collaboration so you can create better
// APIs—faster. "

// now I'm inside the postman window or home page for the app and I need to press the
// " Create a request " tab and then I will be taken to a page where I choose the type of request
// ( GET, POST, PUT, DELETE, ETC. ) and the text field for the route and a blue button that says
// " Send " and so let's try:

// GET      http://localhost:3006

// and the result is ( above the result is the word " body " underlined and I see " HTML " in the
// dropdown menu to the right of " body ":

/*
<html lang="en">

<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="/styles.css">

    <title>Document</title>

</head>

</html>

<body>

    <nav>
        <h1><a href="/">Ninja Smoothies</a></h1>
    </nav>


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

    <footer>Copyright 2020 Ninja Smoothies</footer>

</body>

</html>
*/

// and that is correct so everything is working as expected and now let's try:

// GET      http://localhost:3006/signup

// then the result is:

/*
<!--
    // 1 -
    // and after we bring in the partials and add the h1 tag, let go to the login.ejs file 1 -
-->

<html lang="en">

<head>

	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
		rel="stylesheet">
	<link rel="stylesheet" href="/styles.css">

	<title>Document</title>

</head>

</html>

<body>

	<nav>
		<h1><a href="/">Ninja Smoothies</a></h1>
	</nav>


	<h1>Sign Up</h1>


	<footer>Copyright 2020 Ninja Smoothies</footer>

</body>

</html>
*/

// and this is correct so everything is working as expected

// and what we want to do is test the post requests as well so let's change the type from GET to
// POST and if we do:

// POST      http://localhost:3006/signup

// and we can check controller #2 in the authController.js file to see what the response should
// be and the response should be " new signup " and the result in postman is " new signup "
// so everything is working as expected or we know our POST request is working properly and 
// we know this by testing the request in postman

// and if we do:

// POST      http://localhost:3006/login

// we see the result " new login " and this is correct so everything is working as expected

// and when a user signs up for an app they will send along some data like a username and email
// address along with a POST request and we can also simulate sending data in postman and to do
// that in postman we need to go to the " body " tab right below the request field and there are
// several tabs that look like:

// Params / Authorization / Headers / Body / Pre-request Script / Test / Settings

// and when we click on the Body tab, we get the following tabs below Body:

// none / form-data / x www-form-urlencoded / raw / binary / GraphQL

// and we want to click on the raw tab and then a dropdown will appear with the following
// types of data in the dropdown:

// text / JavaScript / JSON / HTML / XML

// and we want to click on the " JSON " type and then below that we will add an object in the
// textarea box and this object will simulate the sending of JSON data fron a browser to a
// server or we will simulate sending this data at the same time we make the following POST
// request " http://localhost:3006/login " and the object we will send is:

/*
{
    "email": "mario@google.com",
    "password": "test12"
}
*/

// now to be able to recieve this object on the server we need to change contorller function
// #2 and #4 in the authContorller.js file so let's go to the authController.js file 2 -



// ==============================
// BACK FROM NODE_AUTH_TUTORIAL/CONTROLLERS/AUTHCONTROLLLER.JS -- NOTES PERTAIN TO 2 -, 3 -, 4 -
// ==============================


// controller #1
// renders the sign up page
module.exports.signup_get = ( req, res ) => {

    res.render( 'signup' );

};


// 2 -
// coming from the app-node-auth-tutorial file and we want to be able to grab the data
// that is sent to us by postman inside the request handler or the controller function
// and remember we are simulating data being sent to the server by the browser and there
// are 2 stpes involved in being able to grab the data inside the request handler and the
// first step is to use the Express JSON parser middleware and let's do that in the app.js
// file 4 -

// End of 2 -


// controller #2
// create a new user in database
module.exports.signup_post = ( req, res ) => {

    // 4 -
    // and in postman, let's do the following:

    // POST      http://localhost:3006/signup
    
    // and in the textarea:

    /*
        {
            "email": "jill@google.com",
            "password": "test12"
        }
    */
        
    const { email, password } = req.body;

    // so now we have access to the email and password key value pairs

    // let's log out email and password to make sure this is working
    console.log( email, password );

    // and if we test this out in postman, we get the following result in postman:
    // " new signup "

    // and this is correct so everything is working here

    // and we get the following response in the integrated terminal:
    // " jill@google.com test12 "

    // and this is correct so everything is working here as well which is great

    // and ultimately we will send a POST request from a browser after a user submits a form
    // but until we create those forms on the front end Postman will be our friend and now
    // we know all of our route handlers are working or controller functions 1 - 4 in this file
    // and we know we can test these route handlers going forward with Postman and in the next
    // lesson we are going to create a user model with Mongoose

    // End of 4 -


    // for now, let's just send some text to the webpage
    res.send( 'new signup' );

};


// controller #3
// renders the log in page
module.exports.login_get = ( req, res ) => {

    res.render( 'login' );

};


// controller #4
// authenticate a current user
module.exports.login_post = ( req, res ) => {

    // 3 -
    // coming from hte app.js file 4-
    // now let's access the object that was sent from postman along with the POSt request
    // to the following route " /login " and let's log out that data so we can see it in
    // postman and we do that below by doing " console.log( req.body ); "
    // console.log( req.body );

    // and if we test this out in postman, we get the following result in postman:
    // " new login "

    // and this is correct so everything is working here

    // and the following response in the integrated terminal:
    // " { email: 'mario@google.com', password: 'test12' } "

    // and this is correct so everything is working here as well

    // now let's comment out " console.log( req.body ); " above and then use destructuring to
    // bring in the email and password properties to this request handler function
    const { email, password } = req.body;

    // so now we have access to the email and password key value pairs

    // let's log out email and password to make sure this is working
    console.log( email, password );

    // and if we test this out in postman, we get the following result in postman:
    // " new login "

    // and this is correct so everything is working here

    // and we get the following response in the integrated terminal:
    // " mario@google.com test12 "

    // and this is correct so everything is working here as well and let's try the same thing
    // in the signup POST request so go to 4 - above

    // End of 3 -


    // for now, let's just send some text to the webpage
    res.send( 'new login' );

};




// -------------------- END OF FILE





// ==============================
// BACK FROM NODE_AUTH_TUTORIAL/APP.JS -- NOTES PERTAIN TO 4 -
// ==============================


// this file or app.js will kickstart our application  

// import in Express
const express = require( 'express' );

// import in Mongoose
const mongoose = require( 'mongoose' );

// import in the router
const authRoutes = require( './routes/authRoutes' );

// create an instance of an Express app
const app = express();


// 4 -
// use the Express JSON parser middleware

// what " app.use( express.json() ); " does is it takes any JSON data that comes along with
// a request and it passes that data into a JavaScript object and then we can use this object
// inside the application or more specifically this JavaScript object is atached to the request
// so that we can access this JavaScript object inside our request handlers
app.use( express.json() );

// so going back to postman, if we send this data or object:

/*
{
    "email": "mario@google.com",
    "password": "test12"
}
*/

// to this endpoint: " http://localhost:3006/login " as part of a POST request then what happens
// is this data or object is attached to the POST request and we can access this object inside
// the request handler in the authController.js file 2 - and let's go back to the authController.js
// file 3 -

// End of 4 -


// use express.static(); to serve static files and make " public " the argument to
// express.static(); and this will enable us to use the " public " folder to serve static
// files
app.use( express.static( 'public' ) );

// register the view engine as ejs
app.set( 'view engine', 'ejs' );

// Brad Schiff said we have to make our port number dynamic in order for our app to work on Heroku
let port = process.env.PORT || 3006;

// create the database connection
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

// routes #1, #2, #3 and #4 in the authRoutes.js file
// use " app.use( authRoutes ); " to bring in all the routes from the authRoutes.js file
app.use( authRoutes );

// route #3
// create the 404 response and manually set the status code to 404
// no route and if we get to this part in the code app.use(); will always run
// renders the 404 page
// since I added route #4 myself, remember to add a view for the 404 page
app.use( ( req, res ) => {

    res.status( 404 ).render( '404', { title : '404' } );

} );




// -------------------- END OF FILE


// now let's push our changes to GitHub but first let's create a new branch called
// " lesson-3 " and we can do that by typing:

// git branch newBranchName - allows us to add a new branch and give it a name
// git checkout newBranchName - move to the newBranchName branch and start working on that branch

// so let's do:

// " Rogers-iMac:node_auth_tutorial Home$ git branch lesson-3 "
// " Rogers-iMac:node_auth_tutorial Home$ git checkout lesson-3 "
// " Rogers-iMac:node_auth_tutorial Home$ git status "
// " Rogers-iMac:node_auth_tutorial Home$ git add . "
// " Rogers-iMac:node_auth_tutorial Home$ git commit -m " first commit " "
// " Rogers-iMac:node_auth_tutorial Home$ git push origin lesson-3 "










// ==============================
// TUTORIAL 4 - User Model
// ==============================

// 
