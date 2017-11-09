
const articles = {
    articles: [
        {id:1,content:'article1'},
        {id:2,content:'article2'},
        {id:3,content:'article3'}
    ]
}

const addArticle = (req, res) => {
    var article = {id:0,content:''}
     console.log('Payload received', req.body)
     article.id = articles.articles.length+1
     article.content = req.body.content
     articles.articles.push(article)   
     res.send({id:article.id,content:article.content})
}
const getArticle = (req,res) =>{
    if(req.params.id ){
        if(req.params.id < articles.articles.length)
        res.send(articles.articles[req.params.id])
        else
        res.send({id:-1})
    }else
        res.send(articles);
}


module.exports = (app) =>{
    app.get('/article/:id?', getArticle)
    app.post('/addArticle', addArticle)
}
    // app.use(bodyParser.json())
    // app.post('/:article/:id*?', addArticle)
   



// Get the port from the environment, i.e., Heroku sets it

