
const express = require('express')
const bodyParser = require('body-parser')
const articles = {
    articles: [
        {id:1,content:'article1'},
        {id:2,content:'article2'},
        {id:3,content:'article3'}
    ]
}
const article = {
    id:0,
    content :''
}
const addArticle = (req, res) => {
     console.log('Payload received', req.body)
     article.id = articles.articles.length+1
     article.content = req.body.article
     articles.articles.push(article)   
     res.send(article)
}
const getArticle = (req,res) =>{
    res.send(articles);
}
const hello = (req, res) => res.send({ hello: 'world' })

const app = express()
app.use(bodyParser.json())
app.post('/article', addArticle)
app.get('/', getArticle)

// Get the port from the environment, i.e., Heroku sets it
const port = process.env.PORT || 3000
const server = app.listen(port, () => {
     const addr = server.address()
     console.log(`Server listening at http://${addr.address}:${addr.port}`)
})

