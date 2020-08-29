
// 1 -
// coming from the app-node-auth-tutorial.js file
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
// since I added route #4 myself, remember to add a view for the 404 page
app.use( ( req, res ) => {

    res.status( 404 ).render( '404', { title : '404' } );

} );

// End of 1 -
