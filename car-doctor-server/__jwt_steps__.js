/*
* JWT: Secure your API
* ----------------------
* CREATE TOKEN
* ----------------------
* 1. client: After user login send user basic info to create token
* 2. in the server side: install npm i jsonwebtoken
* 3. import jsonwebtoken
* 4. jwt.sign(payload, secret, {expires})
* 5. return token to the client side
* 
* 6. after receiving the token store it with either HTTP only or local storage(second best solution)
* 7. use a general space onAuthStateChange > AuthProvider
* -----------------------------
* SEND TOKEN TO SERVER
* -----------------------------
* 1. For sensitive api call( )send authorization headers 
* {authorization: 'Bearer token'}
* -----------------------------
* VERIFY TOKEN
* -----------------------------
* 1. create a function called verifyJWT(middleware)
* 2. This function will have three params: req, res, next
* 3. First check whether the authorization headers exists
* 4. If not send 401
* 5. Get the token out of the authorization header
* 6. call jwt.verify(token, secret, (err, decode) =>{})
* 7. If err => send 401
* 8. set decoded to the req object so that we can retrieve it later
* 9. call the next() to go to the next function
* 
* --------------------------------
* 1. check whether token has the email that matches the email
* 
* 
* 
* 

*/