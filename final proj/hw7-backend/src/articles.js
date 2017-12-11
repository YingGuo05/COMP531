'use strict'
const Article = require('./model.js').Article
const Comment = require('./model.js').Comment
const uploadImage = require('./uploadCloudinary.js')
const Profile = require('./model.js').Profile
const addArticle = (req, res) => {
   const author = req.username
   const text = req.content
   const date = new Date()
   const id = Math.ceil(Math.random()*199505)
   const comment = req.body.comments ? req.body.comments :[]
   const newArticle = {id:id,date:date,text:text,author:author,img:req.fileurl,comment:comment}
   new Article(newArticle).save()
   res.status(200).send({article:newArticle})
}

const getArticle = (req,res) =>{
    if(req.params.id){
        var objId = req.params.id
        Article.find({_id:objId}).exec(function(err,article){
            if(err){
                return console.log(err)
            }
            else{
                if(article == null ||article.length == 0 ){
                    return res.status(400).send({result:"no such article"})
                }
                res.status(200).send({article:article[0]})
            }
        })
    }else{
        var username = ''
        if(req.username)
            username = req.username
        else
            username = req.user.displayName+"@google"
        Profile.find({username: username}).exec(function(err, user){
            const following = user[0]
            console.log('article'+user[0])
            const usersToQuery = [username, ...following.following]
            Article.find({author: {$in: usersToQuery}}).limit( 10 ).sort('-date').exec(function(err, articles){
                return res.status(200).send({articles: articles})
            })
        })
    }
}

const changeArticle = (req,res) =>{
    const article_objId = req.body.articleId
    const commentId = req.body.commentId
    const author = req.username
    const text = req.body.text
    const date = new Date()
    if(!commentId){
        Article.findOneAndUpdate({_id:article_objId},{$set:{text:text}},{new:true}).exec(function(err,txt){
            if(err)
                return res.status(400).send({result:err})
            return res.status(200).send({article:txt})
        })
    }else if(commentId >= 0){
        Comment.update({id:commentId},{$set:{text:text}},{new:true},function(err,comment){})
        Article.update({_id:article_objId,'comments.commentId':commentId},{$set:{'comments.$.text':text}},{new:true},function(err,article){})
        Article.find({_id:article_objId}).exec(function(err,article){
            return res.status(200).send({article:article,result:"changed comment success"})
        })  
    }else{
        const newComment_id = Math.ceil(Math.random()*37+175)
        const commentObj = new Comment({commentId: newComment_id, author: author, date: new Date(), text: text})
        new Comment(commentObj).save(function(err, comment){
            if(err) throw err
        })
        Article.findOneAndUpdate({_id:article_objId},{$push:{comments:commentObj}},{upsert:true,new:true}).exec(function(err,article){
            return res.status(200).send({article:article})
        })
    }
}

const getAllUsers=(req,res)=>{
    Profile.find({}).exec(function(err,users){
        res.status(200).send({users:users})
    })
}
module.exports = (app) =>{
    app.get('/articles/:id?', getArticle)
    app.post('/article', uploadImage('img'),addArticle)
    app.put('/articles',changeArticle)
    app.get('/allusers',getAllUsers)
}
   



// Get the port from the environment, i.e., Heroku sets it

