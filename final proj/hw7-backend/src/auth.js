
const md5 = require('md5')
const cookieParser = require('cookie-parser') 
const keys = require('../config/keys.js')
const session = require('express-session');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
let cookieKey = 'sid'
var ValidUser = require('./model.js').ValidUser
var Article = require('./model.js').Article
var Comment = require('./model.js').Comment
var Profile = require('./model.js').Profile
let users = {}
// let originHostUrl = ''
// const locationFun = (req, res, next) => {
// 	if(originHostUrl === ''){
// 		originHostUrl = req.headers.referer
// 	}
// 	next()
// }
passport.serializeUser(function (user, done) {
    users[user.id] = user;
    done(null,user.id)
})

passport.deserializeUser(function(id,done){
    var user = users[id]
    done(null, user)
})
passport.use(new GoogleStrategy({
		clientID:keys.googleClientId,
		clientSecret:keys.googleClientSecret,
		callbackURL: '/callback',
		returnURL:'/callback',
		accessType: 'offline'
	},
		function(req,token, refreshToken, profile, done){
			const username = profile.displayName+'@google'
				console.log(username)
	            ValidUser.findOne({username: username}).exec(function(err, user) {
					if(!user || user.length === 0){
						const authObj = {}
						authObj[`google`] = profile.displayName
						const userObj = new ValidUser({username: username, authId: profile.id,auth:authObj})
						new ValidUser(userObj).save(function (err, usr){
							if(err) return console.log(err)
						})
						const profileObj = new Profile({username: username,displayname:username, headline: "login by google", following:[], email: "null", zipcode: "null", dob: new Date(1999,09,09).getTime(), avatar: 'http://animals.sandiegozoo.org/sites/default/files/2016-10/owl_southern_white_faced.jpg'})
						new Profile(profileObj).save(function (err, usr){
							if(err) return console.log(err)
						})
					}
					req.username = username
					done(null, profile)
				})
				
			
			}))

const register = (req, res) => {
	if(!req.body.username|| !req.body.password){
		res.sendStatus(400)
		return
	}
	var displayname = req.body.displayname
	var username = req.body.username;
	var phone = req.body.phone
	var email = req.body.email;
	var dob = req.body.dob;
	var zipcode = req.body.zipcode;
	var password = req.body.password;
	var headline = 'This is the headline'
	var avatar ='http://animals.sandiegozoo.org/sites/default/files/2016-10/owl_southern_white_faced.jpg'
	if(!username || !password ||  !dob || !zipcode ||!password || !phone || !displayname){
		res.status(400).send("some register info missing")
		return 
	}else{
		ValidUser.find({username:username},function(err,user){
			if(err){
				console.log(err)
				return
			}else if(user.length != 0){
				return res.status(400)
				.send({result:"this username has been taken"})
			}else{
				const salt = 'rice is good university'
				const hash = md5(salt + req.body.password)
				var new_user_account = new ValidUser({username:username,hash:hash,salt:salt})
				var new_user = new Profile({username:username,displayname:displayname,phone:phone,email:email,dob: dob,zipcode:zipcode,
				headline:headline,following:[],avatar:avatar})
				new ValidUser(new_user_account).save()
				new Profile(new_user).save()
				res.send({username:req.body.username, salt:salt, hash:hash,result:'register success'})
			}

		})	
	}
}

const changePassword = (req,res) =>{
	if(req.body.password){
		const salt = 'rice is good university'
		const hash = md5(salt + req.body.password)
		ValidUser.findOneAndUpdate({username: req.username}, {$set: {salt: salt, hash: hash}}, {new: true},function(err,user){
			if(err){
				console.log("something wrong")
				console.log(err);
				return;
			}else if(user){
				res.status(200).send({password:req.body.password,result:"Password successfully updated"})
			}else{
				res.status(400)
				.send({result:"No password been found"})
			}
		})
	}else{
		res.status(400)
		.send({result:"no update password input"})
	}
}
const link = (req,res) => {
	if(!req.body.name || !req.body.secret){
		
		res.status(400).send({result:"no username or password"})
	}
	var username = req.body.name
	var password = req.body.secret

	ValidUser.find({username: username}).exec(function(err, users){
		if (!users || users.length === 0){
			
			return res.status(400).send({result:"no such user in our record"})	
		}
		const userObj = users[0]
		if(!userObj){
			
			res.status(400).send("the user is null")
		}
		const salt = userObj.salt;
		const hash = userObj.hash;

		if(md5(salt+password) === hash){
		//third party username
			Article.update({author:req.username}, { $set: { 'author': username}}, { new: true, multi: true}, function(){})
			Article.update({'comments.author' : req.username}, { $set: {'comments.$.author': username}}, { new: true, multi: true }, function(){})
			Comment.update({author:req.username}, { $set: { 'author': username}}, { new: true, multi: true }, function(){})
			Profile.findOne({username: req.username}).exec(function(err, profile){
				if(profile){
					const oldFollowingArr = profile.following
					Profile.findOne({username: username}).exec(function(err, newProfile) {
						if(newProfile){
							//concat
							
							const newFollowingArr = newProfile.following.concat(oldFollowingArr)
							Profile.update({username: username}, {$set: {'following': newFollowingArr}}, function(){})
						}
					})
					//delete the profile record
					Profile.update({username: req.username}, {$set: {'following':[]}}, function(){})
				}
			})
			ValidUser.findOne({username: username}).exec(function(err, user){
				if(user){
					const usrArr = req.username.split('@');
					const authObj = {}
					authObj[`google`] = usrArr[0]
					ValidUser.update({username: username}, {$addToSet: {'auth': authObj}}, {new: true}, function(){})
				}
			})
			res.status(200).send({ username: username, result: 'success link Google'})
		} else{
			res.status(401).send("incorrect password!")
		}
	})
}

const unlink=(req,res)=>{
	if(!req.body.username){
		return res.status(400).send({result:"no username"})
	}
	var username = req.body.username
	var thirdparty = 'google'
	ValidUser.findOne({username: username}).exec(function(err, user){
		if(user.auth.length !== 0){
			ValidUser.findOne({username: username}).exec(function(err,user){
				let authArr = user.auth
				authArr = authArr.filter(function (obj) {
					return Object.keys(obj)[0] !== thirdparty;
				})
				ValidUser.update({username: username}, {$set: {'auth': authArr}}, {new: true}, function(){})
				res.status(200).send({result: 'successfully unlink google' })
			})
		} else {
			res.status(400).send("can't link account")
		}
	})

}
const login = (req, res) => {
    if(!req.body.username|| !req.body.password){
		return res.status(400)
		.send({result:"username or password missing"})
	}
	ValidUser.find({username:req.body.username},(error,user)=>{
		const u = user[0]
		if(!u){
			return res.status(401).send({error:'no this user'})
		}
		if(!isAuthorized(req,u)){
			return res.status(401).send({error:'password is not right'})
		}
		const sessionKey = md5("asdfgdb"+new Date().getTime()+u.username)
		users[sessionKey] = u
		res.cookie(cookieKey,sessionKey,{MaxAge: 3600*1000, httpOnly: true})
		return res.status(200).send({username:req.body.username,result:'login-success'})
	})
	
}

function isAuthorized(req, userObj){
	return userObj.hash === md5(userObj.salt + req.body.password)
}


function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
		req.username = req.user.displayName+"@google"
		console.log("isloggedin"+req.user.displayName)
        next()
    }else{
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
}

function profile(req,res){
	res.redirect("https://yg-ricebook.surge.sh/#/main")


}

function fail(req, res){
	console.log('fail')
    res.status(401).send('fail')
}
const logout = (req, res) => {
	const sid = req.cookies[cookieKey];
	users[sid] = undefined
	res.clearCookie(cookieKey);
	req.logout()
	res.status(200).send({result:'logout'});
}

module.exports = app => {
	app.use(cookieParser());
	app.use(session({ secret: "secretMessage" ,resave: false, saveUninitialized: false}));
	app.use(passport.initialize());
	app.use(passport.session());
	app.use('/auth/google', passport.authenticate('google',{scope:['email','profile']}))
	app.use('/callback', passport.authenticate('google',{
		successRedirect:'/profile', failureRedirect:'/fail'
	}))
	app.use('/profile',profile)
	app.use('/fail',fail)
	
	app.post('/register', register)
	app.post('/login', login)
	
	app.use(isLoggedIn)
	app.put('/logout',logout)
	app.put('/password',changePassword)
	app.post('/link',link)
	app.post('/unlink',unlink)
}