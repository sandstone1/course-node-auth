

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