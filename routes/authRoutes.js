
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