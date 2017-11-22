const md5 = require('md5')
const cookieParser = require('cookie-parser') 

let cookieKey = 'sid'
var ValidUser = require('./model.js').ValidUser
var Profile = require('./model.js').Profile
let users = {}

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
		ValidUser.findOneAndUpdate({username: req.body.username}, {$set: {salt: salt, hash: hash}}, {new: true},function(err,user){
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

const logout = (req, res) => {
	const sid = req.cookies[cookieKey];
	users[sid] = undefined
	res.clearCookie(cookieKey);
	res.status(200).send({result:'logout'});
}

module.exports = app => {
    app.use(cookieParser());
	app.post('/register', register)
	app.post('/login', login)
	app.use(isLoggedIn)
	app.put('/logout',logout)
	app.put('/password',changePassword)
}

