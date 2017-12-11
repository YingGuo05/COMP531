// this is model.js 
var mongoose = require('mongoose')
require('./db.js')

var commentSchema = new mongoose.Schema({
	commentId: Number, 
	author: String, 
	date: Date, 
	text: String
})
var articleSchema = new mongoose.Schema({
	id: Number, 
	author: String, 
	img: String, 
	date: Date, 
	text: String,
	comments: [ commentSchema ]
})

var validUserSchema = new mongoose.Schema({
	username:String,
	hash:String,
	salt:String,
	auth:[],
	authId:String
})
var authSchema = new mongoose.Schema({
	username:String,
	auth:String
})
var profileSchema = new mongoose.Schema({
	displayname:String,
	phone:String,
	username:String,
	headline:String,
	following:[String],
	email:String,
	dob:Date,
	zipcode:String,
	avatar:String
})

exports.Article = mongoose.model('article', articleSchema)
exports.Profile = mongoose.model('profile',profileSchema)
exports.ValidUser = mongoose.model('validUser',validUserSchema)
exports.Comment = mongoose.model('comments',commentSchema)
exports.Auth = mongoose.model('auth',authSchema)