/*
 * Test suite for articles.js
 */
const expect = require('chai').expect
const fetch = require('isomorphic-fetch')

const url = path => `http://localhost:3000${path}`

describe('Validate Article functionality', () => {

	it('should give me three or more articles', (done) => {
        // IMPLEMENT ME
        fetch(url("/article"))
		.then(res => {
			
			return res.json()
		})
		.then(body => {
            expect(body.articles.length).to.least(2)
		})
		.then(done)
		.catch(done)
		
 	}, 200)

	it('should add two articles with successive article ids, and return the article each time', (done) => {
		// add a new article
		// verify you get the article back with an id
		// verify the content of the article
		// add a second article
		// verify the article id increases by one
        // verify the second artice has the correct content
        var firstid;
		const article1 = {content:'abc'}
		const article2= {content:'hhh'}

        fetch(url('/addArticle'),{
			method:"POST",
			body:JSON.stringify(article1),
			headers:{
				"Content-Type":"application/json"
			}
		})
		.then(res => {
			return res.json()
		})
		.then(body => {
            expect(body.content).to.eql(article1.content)
			return body.id
			
		})
		.then(id=>
			fetch(url("/addArticle"),
			{
				method:"POST",
				body:JSON.stringify(article2),
				headers:{
					"Content-Type":"application/json"
				}
			})
			.then(res => {
				
				return res.json()
			})
			.then(body => {
				expect(body.content).to.eql("hhh")
				expect(body.id).to.eql(id+1)
			})
		)
		
		.then(done)
        .catch(done)
        
 	}, 200)

	it('should return an article with a specified id', (done) => {
		// call GET /articles first to find an id, perhaps one at random
		// then call GET /articles/id with the chosen id
        // validate that only one article is returned
        var return_id;
        fetch(url("/article"))
		.then(res => {
				
			return res.json()
		})
		.then(body => {
			
			return body.articles[0].id
		})
		.then(id=>
			fetch(url("/article/0"))
			.then(res => {
				return res.json()
			})
			.then(body => {
				expect(body.id).to.eql(id)
			})
		)
		
        
		.then(done)
        .catch(done)
		
	}, 200)

	it('should return nothing for an invalid id', (done) => {
		// call GET /articles/id where id is not a valid article id, perhaps 0
		// confirm that you get no results
		var error = {id:-1}
        fetch(url("/article/100"))
		.then(res => {
			return res.json()
		})
		.then(body => {
            expect(body.id).to.eql(error.id)
		})
		.then(done)
        .catch(done)
		
	}, 200)

});