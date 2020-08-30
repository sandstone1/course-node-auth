

// 1 -
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

// now let's go to the authRoutes.js file 2 - and import in these controllers 

// End of 1 -

