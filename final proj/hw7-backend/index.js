
const express = require('express')
const bodyParser = require('body-parser')
const keys = require('./config/keys.js')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy

if (process.env.NODE_ENV !== "production") {
    require('dotenv').load()
}
const enableCORS = (req,res,next) =>{
// res.header('Access-Control-Allow-Origin',req.headers.origin)
// res.header('Access-Control-Allow-Credentials',true)
// res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE,OPTIONS')
// res.header('Access-Control-Allow-Headers','Authorization, Content-Type')
// res.header('Access-Control-Expose-Headers', 'Location, X-Session-Id')
// if (req.method == 'OPTIONS')
// {
//     res.sendStatus(200)
// }
// else{
//     next()
// }
// res.header('Access-Control-Allow-Origin',req.headers.origin)
res.header('Access-Control-Allow-Origin',req.headers.origin)
res.header('Access-Control-Allow-Credentials',true)
res.header('Access-Control-Allow-Methods','GET, PUT, POST, DELETE')
res.header('Access-Control-Allow-Headers','Authorization, Content-Type, X-Request-With, X-Session-Id')
res.header('Access-Control-Expose-Headers', 'Location, X-Session-Id')
if(req.method === 'OPTIONS') {
    res.status(200).send("OK")
} else {
    next()
}

// res.header("Access-Control-Allow-Origin", "*");
// res.header("Access-Control-Allow-Credentials", true);
// res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS');
// res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Accept, Authorization, Content-Type");

// if (req.method == "OPTIONS") res.status(200).send('ok');
// else {
//     next();
// }
}

const app = express()
app.use(bodyParser.json())

app.use(enableCORS)
require('./src/auth')(app)
require('./src/profile')(app)
require('./src/following.js')(app)
require('./src/articles.js')(app)

// Get the port from the environment, i.e., Heroku sets it
const port = process.env.PORT || 3000
const server = app.listen(port, () => {
     const addr = server.address()
     console.log(`Server listening at http://${addr.address}:${addr.port}`)
})