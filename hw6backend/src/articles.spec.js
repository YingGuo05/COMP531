
/*
 * Test suite for articles.js
 */

const fetch = require('isomorphic-fetch')

const url = path => `http://localhost:3000${path}`

describe('Validate Article functionality', () => {
	let length = 0
	it('should give me 10 or more articles', done => {
		// IMPLEMENT ME
		fetch(url('/login'),{
			method:"POST",
			body:JSON.stringify({username:"yg1234",password:"111"}),
			headers:{
				"Content-Type":"application/json"
			}
		})
		.then(res =>{
			fetch(url("/articles"))
			.then(res=>{
				return res.json()
			})
			.then(body => {
				length = body.articles.length
				return expect(body.articles.length).to.least(10)
				
			})
		})
		.then(done)
		.catch((error) => {
			assert.isNotOk(error,'Promise error');
			done();
		  });
 	});

	 it('should add a post', done => {
		fetch(url('/login'),{
			method:"POST",
			body:JSON.stringify({username:"yg1234",password:"111"}),
			headers:{
				"Content-Type":"application/json"
			}
		})
		.then(res =>{
			fetch(url("/article"),{
				method:"POST",
				body:JSON.stringify({text:"test article",username:"yg1234"})
			})
			.then(res=>{
				return res.json()
			})
			.then(body => {
				return expect(body.article.text).toEqual("test article")
			})
		})
		.then(done)
		.catch((error) => {
			assert.isNotOk(error,'Promise error');
			done();
		  });
	 });
	 
	 it('should increase the length by 1', done => {
		// IMPLEMENT ME
		fetch(url('/login'),{
			method:"POST",
			body:JSON.stringify({username:"yg1234",password:"111"}),
			headers:{
				"Content-Type":"application/json"
			}
		})
		.then(res =>{
			fetch(url("/articles"))
			.then(res=>{
				return res.json()
			})
			.then(body => {
				return expect(body.articles.length).toEqual(length+1)
			})
		})
		.then(done)
		.catch((error) => {
			assert.isNotOk(error,'Promise error');
			done();
		  });
 	});
	

});


