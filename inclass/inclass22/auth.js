var request = require('request')
var qs = require('querystring')
var express = require('express')
var cookieParser = require('cookie-parser')
var session =require('express-session')
var passport = require('passport')
var FacebookStrategy = require('passport-facebook').Strategy;
const md5 = require('md5')
let users = {}
let cookieKey = 'sid'

const config = { clientSecret: 'd661f37b192f020a68ea2063ca3c6ba4', 
					clientID: '869837866526890', 
					callbackURL: 'http://localhost:3000/auth/callback' }
const password = '12345'

const salt = md5('11/13/2017')

const Users = {
    'yg45':{
        username: 'yg4525',
        hash: (md5(password + salt)),
        salt: salt
    }
}
// serilarize the user for the session
passport.serializeUser(function(user, done) {
	users[user.id] = user
	done(null, user.id)
})

//deserialize the user from the session
passport.deserializeUser(function(id, done) {
	var user = users[id]
	done(null,user)
})

passport.use(new FacebookStrategy(config,
 function(token, refreshToken, profile, done) {
 	process.nextTick(function() {
 		//register the user in our system
 		return done(null, profile)
 	})
 }))


const addUser = (username, password) => {
    const newSalt = md5((new Date()).getTime())
    Users[username] = {username, hash: md5(password + newSalt), salt: newSalt}
}

const register = (req, res) => {
    if (!req.body.username || !req.body.password){
        res.status(400).send('username and password should be supplied')
        return
    }

    if (Users[req.body.username]){
        res.status(400).send('user already exists')
        return
    }

    addUser(req.body.username, req.body.password)

    res.send({
        username: Users[req.body.username].username,
        status: 'success'
    })
}

const login = (req, res) => {
    if (!req.body.username || !req.body.password){
        res.status(401).send('Unauthorized')
        return
    }
    const userObj = Users[req.body.username]
    if (userObj && md5(req.body.password + userObj.salt) == userObj.hash){
        const sessionKey = md5("asdfgdb"+new Date().getTime()+u.username)
		users[sessionKey] = userObj
        res.cookie(cookieKey,sessionKey,{MaxAge: 3600*1000, httpOnly: true})
        res.send({username:userObj.username, status:'success'})
    }
    else{
        res.status(401).send('Unauthorized')
        return
    }
}

const logout = (req, res) => {
    res.status(200).send('OK')
}

const changepassword = (req,res) => {
	const msg = {username:'yg45', 
	        	  status:'password will not change'
	    }
    res.send(msg)
}

const isLoggedIn = (req,res,next)=>{
	var sid = req.cookies[cookieKey]
	if(!sid){
		return res.sendStatus(401)
	}
	if(users[sid].username){
		req.username = users[sid].username
		next()
	}else{
		res.redirect('/login')
	}
}



module.exports = app => {
    app.post('/login', login)
    app.put('/logout', logout)
    app.post('/register', register)
    app.put('/password',changePassword)

    app.use(session({secret:'thisIsyg45SecretMessage'}))
	app.use(passport.initialize())
	app.use(passport.session())
    app.use(cookieParser())

	app.use('/login/facebook', passport.authenticate('facebook', {scope:'email'}))
	app.use('/auth/callback', passport.authenticate('facebook', {successRedirect:'/profile', failureRedirect:'/fail'}))
	app.use('/logout',isLoggedIn)
}